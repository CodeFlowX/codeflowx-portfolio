#!/usr/bin/env node
const { execSync } = require("child_process");
console.log("Serving CodeFlowX Portfolio...");
try {
  execSync("npx serve .", { stdio: "inherit" });
} catch (error) {
  console.error(`Error serving portfolio: ${error.message}`);
}