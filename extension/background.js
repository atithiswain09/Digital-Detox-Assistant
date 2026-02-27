let currentSite = null;
let startTime = null;

const DEFAULT_BLOCKED = [
  "x.com",
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "youtube.com",
];

chrome.runtime.onInstalled.addListener(async () => {
  const { blockedSites } = await chrome.storage.local.get("blockedSites");
  if (!blockedSites) {
    await chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED });
  }
});

//  when browser will open 
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleSiteChange(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    handleSiteChange(tab);
  }
});
function onSiteVisit(site) {
  console.log("User VISITED:", site);
}

async function onSiteLeave(site, timeSpent) {
  const { screenTime = {} } = await chrome.storage.local.get("screenTime");
  screenTime[site] = (screenTime[site] || 0) + timeSpent;
  console.log(screenTime);
  await chrome.storage.local.set({ screenTime });
}


// this Function will handel how much  time user will chenge the Tap
async function handleSiteChange(tab) {
  if (!tab.url) return;

  const url = new URL(tab.url);
  const newSite = url.hostname;
  const now = Date.now();

  console.log(currentSite, startTime);
  if (currentSite && startTime) {
    const timeSpent = now - startTime;
    await onSiteLeave(currentSite, timeSpent);
  }

  //this  function will control the how much time user Will stay in the Website
  onSiteVisit(newSite);

  currentSite = newSite;
  startTime = now;
}
