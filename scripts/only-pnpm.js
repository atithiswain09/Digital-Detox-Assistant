#!/usr/bin/env node

const userAgent = process.env.npm_config_user_agent || "";

if (!userAgent.includes("pnpm")) {
  console.error("\n🚫 ERROR: This project must be installed using pnpm.\n");
  console.error("Detected package manager:", userAgent);
  console.error("\nPlease run:");
  console.error("  pnpm install\n");
  process.exit(1);
}
