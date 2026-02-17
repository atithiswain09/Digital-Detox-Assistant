// ===== BLOCK SCREEN HTML =====
const BLOCK_HTML = `
<head>
  <title>Blocked</title>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: #111;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: larger;
      color: white;
      font-family: system-ui, -apple-system, sans-serif;
    }
  </style>
</head>
<body>
  <div>Site can't be open</div>
</body>
`;

// ===== HELPERS =====
function hostnameMatches(hostname, domain) {
  return hostname === domain || hostname.endsWith("." + domain);
}

async function getBlockedSites() {
  return new Promise((resolve) => {
    try {
      chrome.storage.local.get("blockedSites", (data) => {
        resolve(data.blockedSites || []);
      });
    } catch {
      resolve([]);
    }
  });
}

function isBlocked(hostname, blockedList) {
  return blockedList.some((d) => hostnameMatches(hostname, d));
}

// ===== HARD BLOCK =====
(async () => {
  const blockedSites = await getBlockedSites();

  let hostname;
  try {
    hostname = location.hostname;
  } catch {
    return;
  }

  if (!isBlocked(hostname, blockedSites)) return;

  // 🔥 stop network ASAP
  try {
    window.stop();
  } catch {}

  // 🔥 kill page repeatedly (handles race conditions)
  const nuke = () => {
    try {
      document.documentElement.innerHTML = BLOCK_HTML;
    } catch {}
  };

  nuke();

  // multiple passes for stubborn sites
  setTimeout(nuke, 0);
  setTimeout(nuke, 50);
  setTimeout(nuke, 250);

  // 🔥 observe and re-wipe if SPA tries to recover
  const observer = new MutationObserver(() => {
    if (!document.body?.innerText.includes("Site can't be open")) {
      nuke();
    }
  });

  try {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  } catch {}

  // 🔥 block further JS execution paths
  Object.defineProperty(window, "fetch", { value: () => new Promise(() => {}) });
  Object.defineProperty(window, "XMLHttpRequest", {
    value: function () {}
  });
})();
