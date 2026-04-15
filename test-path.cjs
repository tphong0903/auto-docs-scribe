const path = require("path");
const fs = require("fs");

const outputPath = path.join(process.cwd(), "public", "output_sections");
console.log("Current working directory:", process.cwd());
console.log("Output path:", outputPath);
console.log("Folder exists:", fs.existsSync(outputPath));

if (fs.existsSync(outputPath)) {
  const folders = fs.readdirSync(outputPath, { withFileTypes: true });
  const dirs = folders.filter((d) => d.isDirectory());
  console.log("Total items:", folders.length);
  console.log("Total directories:", dirs.length);
  console.log("First 5 directories:");
  dirs.slice(0, 5).forEach((d) => console.log("  -", d.name));
}
