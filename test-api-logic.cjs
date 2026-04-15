const path = require("path");
const fs = require("fs");

const outputPath = path.join(process.cwd(), "public", "output_sections");

const folders = fs.readdirSync(outputPath, { withFileTypes: true });
const dtcList = folders
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => {
    const folderName = dirent.name;
    const parts = folderName.split("_");
    const code = parts[0];
    const name = parts.slice(1).join(" ");

    return {
      code,
      name,
      folder: folderName,
      displayName: `${code} - ${name}`,
    };
  })
  .sort((a, b) => {
    const aMatch = a.code.match(/(\d+)|([A-Z])/g) || [];
    const bMatch = b.code.match(/(\d+)|([A-Z])/g) || [];
    return aMatch.toString().localeCompare(bMatch.toString());
  });

console.log("Total items:", folders.length);
console.log(
  "Total directories after filter:",
  folders.filter((d) => d.isDirectory()).length,
);
console.log("Total in dtcList:", dtcList.length);
console.log("First 5 items:");
dtcList.slice(0, 5).forEach((item) => console.log("  -", item.displayName));
console.log("\nAPI Response would be:");
console.log(
  JSON.stringify({ success: true, data: dtcList.slice(0, 3) }, null, 2),
);
