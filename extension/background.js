// ================= CONFIG =================
const DEFAULT_BLOCKED = [
  "x.com",
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "youtube.com",
];

const RULESET_ID_BASE = 1000;

// ================= HELPERS =================
/**
 * @param {number} id
 * @param {string} domain
 * @returns {chrome.declarativeNetRequest.Rule}
 */
function makeRule(id, domain) {
  return {
    id,
    priority: 1,
    action: { type: "block" },
    condition: {
      urlFilter: domain,
      resourceTypes: ["main_frame", "sub_frame"],
    },
  };
}

function isBlocked(hostname, blockedSites) {
  return blockedSites.some((d) => {
    if (!d || !d.includes(".")) return false;
    return hostname === d || hostname.endsWith("." + d);
  });
}

// ================= INIT =================
chrome.runtime.onInstalled.addListener(async () => {
  const { blockedSites } = await chrome.storage.local.get("blockedSites");

  if (!blockedSites) {
    await chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED });
  }
});