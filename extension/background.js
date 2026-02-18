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
    // await syncDynamicRules(DEFAULT_BLOCKED);
  } else {
    // await syncDynamicRules(blockedSites);
  }
});

// ================= SYNC RULES =================
// let syncing = false;

// async function syncDynamicRules(domains) {
//   if (syncing) return;
//   syncing = true;

//   try {
//     const existing = await chrome.declarativeNetRequest.getDynamicRules();
//     const removeIds = existing.map((r) => r.id);

//     await chrome.declarativeNetRequest.updateDynamicRules({
//       removeRuleIds: removeIds,
//     });

//     const newRules = domains.map((domain, i) =>
//       makeRule(RULESET_ID_BASE + i, domain),
//     );

//     await chrome.declarativeNetRequest.updateDynamicRules({
//       addRules: newRules,
//     });
//   } finally {
//     syncing = false;
//   }
// }

// ================= STORAGE WATCH =================
// chrome.storage.onChanged.addListener((changes, area) => {
//   if (area !== "local") return;
//   if (!changes.blockedSites) return;

//   syncDynamicRules(changes.blockedSites.newValue || []);
// });

// chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
//   if (details.frameId !== 0) return;

//   const url = new URL(details.url);
//   if (url.protocol === "chrome-extension:") return;

//   const { blockedSites = [] } = await chrome.storage.local.get("blockedSites");
//   if (!isBlocked(url.hostname, blockedSites)) return;

//   try {
//     // await chrome.tabs.update(details.tabId, {
//     //   url: chrome.runtime.getURL("html/block.html"),
//     // });
//     await chrome.scripting.executeScript({
//       target: { tabId: details.tabId },
//       files: ["content.js"]
//     });
//   } catch {}
// });
