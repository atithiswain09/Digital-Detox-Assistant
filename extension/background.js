let currentSite = null; //which site is Created
let startTime = null;   //what timer start 
// ================= CONFIG =================
const DEFAULT_BLOCKED = [
  "x.com",
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "youtube.com",
];

const RULESET_ID_BASE = 1000;


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


chrome.runtime.onInstalled.addListener(async () => {
  const { blockedSites } = await chrome.storage.local.get("blockedSites");

  if (!blockedSites) {
    await chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED });
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleSiteChange(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    handleSiteChange(tab);
  }
});

async function handleSiteChange(tab) {
  if (!tab.url) return;

  const url = new URL(tab.url);
  const newSite = url.hostname;
  const now = Date.now();

  console.log("New site opened:", newSite);

  
}