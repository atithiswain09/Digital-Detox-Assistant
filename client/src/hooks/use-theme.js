import { useContext, createContext } from "react";

/**
 * @typedef {"dark" | "light" | "system"} Theme
 */

/**
 * @typedef {Object} ThemeProviderState
 * @property {Theme} theme
 * @property {(theme: Theme) => void} setTheme
 */

/** @type {ThemeProviderState} */
const initialState = {
  theme: "system",
  setTheme: () => null,
};

/** @type {import("react").Context<ThemeProviderState>} */
export const ThemeProviderContext = createContext(initialState);

/**
 * @returns {ThemeProviderState}
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
