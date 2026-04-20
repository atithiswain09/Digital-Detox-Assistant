import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// In-memory storage for the access token
let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => {
  return accessToken;
};

export const clearAccessToken = () => {
  accessToken = null;
};

// Create a configured axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Required to send and receive httpOnly cookies (like the refresh token)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach the in-memory access token
api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Flag and queue for managing concurrent requests during a token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

// Response interceptor to handle 401 Unauthorized responses and refresh tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and the request hasn't been retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      
      // If a refresh is already in progress, queue the request
      if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the token. 
        // We use an isolated axios call to avoid interceptor loops,
        // and include withCredentials to send the httpOnly refresh token cookie.
        const { data } = await axios.post(`${API_BASE_URL}/refresh`, {}, {
          withCredentials: true 
        });
        
        // Assume the server responds with JSON like { "accessToken": "new_token_here" }
        const newAccessToken = data.accessToken;
        
        // Store the new token in-memory
        setAccessToken(newAccessToken);
        
        // Resolve all queued requests with the new token
        processQueue(null, newAccessToken);
        
        // Retry the original request with the new token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
        
      } catch (refreshError) {
        // If the refresh fails (e.g., refresh token expired), reject all queued requests
        processQueue(refreshError, null);
        clearAccessToken();
        
        // Optional: Redirect the user to login page
        // window.location.href = '/login';
        
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
