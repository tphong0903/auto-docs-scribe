const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ==========================================
// API: Lấy danh sách tất cả folder DTC (chỉ folder có chứa "DTC")
// ==========================================
app.get("/api/dtc-list", (req, res) => {
  const outputPath = path.join(process.cwd(), "public", "output_sections");
  console.log("[API /api/dtc-list] Looking for DTC in:", outputPath);
  console.log("[API /api/dtc-list] Folder exists:", fs.existsSync(outputPath));

  try {
    if (!fs.existsSync(outputPath)) {
      console.log("[API /api/dtc-list] ERROR: Folder not found");
      return res.status(500).json({
        success: false,
        error: `Folder not found: ${outputPath}`,
      });
    }

    const folders = fs.readdirSync(outputPath, { withFileTypes: true });
    console.log("[API /api/dtc-list] Found", folders.length, "items");

    const dtcList = folders
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => dirent.name.includes("DTC")) // Chỉ lấy folder có chứa "DTC"
      .map((dirent) => {
        const folderName = dirent.name;
        // Extract code and name: "1A-51_DTC_P0010_P2088" -> code: "1A-51", name: "DTC_P0010_P2088"
        // Only process folders containing "DTC"
        const parts = folderName.split("_");
        const code = parts[0];
        const name = parts.slice(1).join(" ");

        // Get additional metadata
        const folderPath = path.join(outputPath, folderName);
        const files = fs.readdirSync(folderPath);
        const hasRefs = files.includes("refs.json");
        const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
        const hasPdf = pdfFiles.length > 0;

        // Load refs if available
        let refs = [];
        if (hasRefs) {
          try {
            const refsData = fs.readFileSync(
              path.join(folderPath, "refs.json"),
              "utf-8",
            );
            refs = JSON.parse(refsData);
          } catch (error) {
            console.warn(
              `[API] Could not parse refs.json for ${folderName}:`,
              error.message,
            );
          }
        }

        return {
          code,
          name,
          folder: folderName,
          displayName: `${name}`,
          metadata: {
            hasRefs,
            hasPdf,
            refsCount: refs.length,
            totalFiles: files.length,
            pdfFile: hasPdf ? pdfFiles[0] : null,
          },
          refs: refs, // Include refs data directly
        };
      })
      .sort((a, b) => {
        // Sort by code naturally
        const aMatch = a.code.match(/(\d+)|([A-Z])/g) || [];
        const bMatch = b.code.match(/(\d+)|([A-Z])/g) || [];
        return aMatch.toString().localeCompare(bMatch.toString());
      });

    console.log(
      "[API /api/dtc-list] SUCCESS: Returning",
      dtcList.length,
      "DTCs",
    );
    res.json({ success: true, data: dtcList });
  } catch (error) {
    console.error("[API /api/dtc-list] ERROR:", error);
    res.status(500).json({
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Lỗi khi đọc danh sách thư mục",
    });
  }
});

// ==========================================
// API: Tìm kiếm DTC theo từ khóa
// ==========================================
app.get("/api/search", (req, res) => {
  const { q } = req.query;
  if (!q || typeof q !== "string") {
    return res.status(400).json({
      success: false,
      error: "Query parameter 'q' is required",
    });
  }

  const outputPath = path.join(process.cwd(), "public", "output_sections");

  try {
    const folders = fs.readdirSync(outputPath, { withFileTypes: true });
    const searchResults = folders
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => {
        const folderName = dirent.name;
        const parts = folderName.split("_");
        const code = parts[0];
        const name = parts.slice(1).join(" ");

        // Get metadata
        const folderPath = path.join(outputPath, folderName);
        const files = fs.readdirSync(folderPath);
        const hasRefs = files.includes("refs.json");
        const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
        const hasPdf = pdfFiles.length > 0;

        let refs = [];
        if (hasRefs) {
          try {
            const refsData = fs.readFileSync(
              path.join(folderPath, "refs.json"),
              "utf-8",
            );
            refs = JSON.parse(refsData);
          } catch (error) {
            // Ignore parse errors
          }
        }

        return {
          code,
          name,
          folder: folderName,
          displayName: `${code} - ${name}`,
          metadata: {
            hasRefs,
            hasPdf,
            refsCount: refs.length,
            totalFiles: files.length,
            pdfFile: hasPdf ? pdfFiles[0] : null,
          },
          refs,
        };
      })
      .filter((dtc) => {
        // Search in code, name, and refs
        const searchTerm = q.toLowerCase();
        return (
          dtc.code.toLowerCase().includes(searchTerm) ||
          dtc.name.toLowerCase().includes(searchTerm)
        );
      })
      .sort((a, b) => {
        // Sort by relevance: exact code match first, then name match, then refs match
        const query = q.toLowerCase();
        const aExactCode = a.code.toLowerCase() === query ? 1 : 0;
        const bExactCode = b.code.toLowerCase() === query ? 1 : 0;
        if (aExactCode !== bExactCode) return bExactCode - aExactCode;

        const aCodeMatch = a.code.toLowerCase().includes(query) ? 1 : 0;
        const bCodeMatch = b.code.toLowerCase().includes(query) ? 1 : 0;
        if (aCodeMatch !== bCodeMatch) return bCodeMatch - aCodeMatch;

        // Natural sort by code
        const aMatch = a.code.match(/(\d+)|([A-Z])/g) || [];
        const bMatch = b.code.match(/(\d+)|([A-Z])/g) || [];
        return aMatch.toString().localeCompare(bMatch.toString());
      });

    res.json({
      success: true,
      data: searchResults,
      query: q,
      total: searchResults.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Lỗi khi tìm kiếm",
    });
  }
});

// ==========================================
// API: Tìm folder theo code (để redirect)
// ==========================================
app.get("/api/dtc-find/:code", (req, res) => {
  const { code } = req.params;
  const outputPath = path.join(process.cwd(), "public", "output_sections");

  try {
    const folders = fs.readdirSync(outputPath, { withFileTypes: true });
    const found = folders.find((dirent) => {
      if (!dirent.isDirectory()) return false;
      const folderCode = dirent.name.split("_")[0];
      return folderCode === code;
    });

    if (found) {
      res.json({
        success: true,
        data: {
          folder: found.name,
          code: found.name.split("_")[0],
        },
      });
    } else {
      res.status(404).json({
        success: false,
        error: `Không tìm thấy DTC với mã: ${code}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Lỗi khi tìm kiếm DTC",
    });
  }
});

// ==========================================
// Serve static files
// ==========================================
app.use(express.static(path.join(process.cwd(), "public")));

app.listen(PORT, () => {
  console.log("\n=====================================");
  console.log("✓ DTC API Server is running!");
  console.log(`✓ API available at: http://localhost:${PORT}`);
  console.log(`✓ Serving files from: ${path.join(process.cwd(), "public")}`);
  console.log("=====================================\n");
});
