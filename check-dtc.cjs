#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const http = require("http");

console.log("\n╔════════════════════════════════════════════════════╗");
console.log("║  DTC Application - Pre-check Diagnostic Tool      ║");
console.log("╚════════════════════════════════════════════════════╝\n");

// 1. Check folder existence
const outputPath = path.join(process.cwd(), "public", "output_sections");
console.log("📁 Checking folder structure...");
console.log(`   Expected path: ${outputPath}`);

if (!fs.existsSync(outputPath)) {
  console.log("   ❌ FAILED: Folder not found!");
  process.exit(1);
}

const folders = fs.readdirSync(outputPath, { withFileTypes: true });
const dirs = folders.filter((d) => d.isDirectory());
console.log(`   ✓ Found ${dirs.length} DTC directories\n`);

// 2. Check API server
console.log("🔌 Checking API server...");
const checkAPI = () => {
  return new Promise((resolve) => {
    const req = http.get("http://localhost:3001/api/dtc-list", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.success && Array.isArray(json.data)) {
            console.log(`   ✓ API responding correctly`);
            console.log(`   ✓ Returned ${json.data.length} DTC items\n`);
            resolve(true);
          } else {
            console.log(`   ⚠️  API returned unexpected format\n`);
            resolve(false);
          }
        } catch (e) {
          console.log(`   ⚠️  Could not parse API response\n`);
          resolve(false);
        }
      });
    });

    req.on("error", () => {
      console.log(
        "   ⚠️  Cannot reach API server (it will be started with npm run dev)\n",
      );
      resolve(false);
    });

    req.setTimeout(2000);
  });
};

checkAPI().then(() => {
  // 3. Final summary
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║  Ready to run: npm run dev                         ║");
  console.log("║                                                    ║");
  console.log("║  This will start both:                             ║");
  console.log("║  • Frontend (Vite)    → http://localhost:8080      ║");
  console.log("║  • Backend (Express)  → http://localhost:3001      ║");
  console.log("╚════════════════════════════════════════════════════╝\n");
});
