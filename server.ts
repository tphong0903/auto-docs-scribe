import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ==========================================
// API: Lấy danh sách tất cả folder DTC
// ==========================================
app.get("/api/dtc-list", (req: Request, res: Response) => {
  const outputPath = path.join(__dirname, "public", "output_sections");

  try {
    const folders = fs.readdirSync(outputPath, { withFileTypes: true });
    const dtcList = folders
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => {
        const folderName = dirent.name;
        // Extract code and name: "1A-51_DTC_P0010_P2088" -> code: "1A-51", name: "DTC_P0010_P2088"
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
        // Sort by code naturally
        const aMatch = a.code.match(/(\d+)|([A-Z])/g) || [];
        const bMatch = b.code.match(/(\d+)|([A-Z])/g) || [];
        return aMatch.toString().localeCompare(bMatch.toString());
      });

    res.json({ success: true, data: dtcList });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Lỗi khi đọc danh sách thư mục",
    });
  }
});

// ==========================================
// API: Lấy refs.json của một DTC
// ==========================================
app.get("/api/dtc-refs/:folder", (req: Request, res: Response) => {
  const { folder } = req.params;
  const refsPath = path.join(
    __dirname,
    "public",
    "output_sections",
    folder,
    "refs.json",
  );

  try {
    // Validate folder name to prevent directory traversal
    if (folder.includes("..") || folder.includes("/")) {
      return res.status(400).json({
        success: false,
        error: "Invalid folder name",
      });
    }

    if (fs.existsSync(refsPath)) {
      const data = fs.readFileSync(refsPath, "utf-8");
      const refs = JSON.parse(data);
      res.json({ success: true, data: refs });
    } else {
      res.json({ success: true, data: [] });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Lỗi khi đọc tệp refs",
    });
  }
});

// ==========================================
// API: Tìm folder theo code (để redirect)
// ==========================================
app.get("/api/dtc-find/:code", (req: Request, res: Response) => {
  const { code } = req.params;
  const outputPath = path.join(__dirname, "public", "output_sections");

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
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`DTC API Server running at http://localhost:${PORT}`);
});
