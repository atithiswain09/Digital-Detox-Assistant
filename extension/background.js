// ===== CONFIG =====
const DEFAULT_BLOCKED = ["facebook.com", "twitter.com", "instagram.com"];

// ===== UTIL =====
function hostnameMatches(hostname, domain) {
  return hostname === domain || hostname.endsWith("." + domain);
}

function isBlockedUrl(url, blockedList) {
  try {
    const hostname = new URL(url).hostname;
    return blockedList.some((d) => hostnameMatches(hostname, d));
  } catch {
    return false;
  }
}

// ===== INIT STORAGE =====
chrome.runtime.onInstalled.addListener(async () => {
  const data = await chrome.storage.local.get("blockedSites");
  if (!data.blockedSites) {
    await chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED });
  }
});

// ===== NAVIGATION WATCHER =====
// Fires very early in navigation lifecycle
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  console.log(details);
  if (details.frameId !== 0) return;

  const { blockedSites = DEFAULT_BLOCKED } =
    await chrome.storage.local.get("blockedSites");

  if (isBlockedUrl(details.url, blockedSites)) {
    // Inject blocker immediately
    try {
      await chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"],
      });
    } catch (e) {
      // ignore race conditions
    }
  }
});
