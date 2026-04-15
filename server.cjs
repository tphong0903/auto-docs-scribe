const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();

// 1. Lấy PORT từ biến môi trường của Railway, nếu không có thì mặc định 3001
const PORT = process.env.PORT || 3001;

// 2. Cấu hình CORS mở cho Vercel gọi vào
app.use(
  cors({
    origin: "*", // Tạm thời để '*' cho dễ test. Sau này đổi thành URL của Vercel (vd: 'https://auto-docs-scribe.vercel.app')
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

// 3. Đường dẫn gốc tới thư mục output_sections (Sử dụng __dirname cho an toàn trên server)
const OUTPUT_SECTIONS_PATH = path.join(__dirname, "public", "output_sections");

// Helper function để đọc an toàn JSON
const safeReadJSON = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn(`[API] Could not parse JSON at ${filePath}:`, error.message);
  }
  return null;
};

// ==========================================
// API: Lấy danh sách tất cả folder DTC
// ==========================================
app.get("/api/dtc-list", (req, res) => {
  try {
    if (!fs.existsSync(OUTPUT_SECTIONS_PATH)) {
      return res.status(500).json({
        success: false,
        error: "Folder output_sections not found on server",
      });
    }

    const folders = fs.readdirSync(OUTPUT_SECTIONS_PATH, {
      withFileTypes: true,
    });

    const dtcList = folders
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => dirent.name.includes("DTC_P"))
      .filter((dirent) => !dirent.name.includes("CAN"))
      .map((dirent) => {
        const folderName = dirent.name;
        const parts = folderName.split("_");
        const code = parts[0];

        const folderPath = path.join(OUTPUT_SECTIONS_PATH, folderName);
        const files = fs.readdirSync(folderPath);
        const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
        const hasTables = files.includes("troubleshooting_tables.json");

        // Đọc refs.json
        const refsData = safeReadJSON(path.join(folderPath, "refs.json")) || {};

        // 🔥 LẤY TÊN TỪ REFS.JSON: Ưu tiên lấy tên tiếng Việt có dấu
        const exactName = refsData.name || parts.slice(1).join(" ");
        const refsArray = refsData.refs || [];

        return {
          code,
          name: exactName,
          folder: folderName,
          displayName: exactName,
          metadata: {
            hasRefs: !!refsData.refs,
            hasPdf: pdfFiles.length > 0,
            hasTables: hasTables,
            refsCount: refsArray.length,
            totalFiles: files.length,
            pdfFile: pdfFiles.length > 0 ? pdfFiles[0] : null,
          },
          refs: refsArray,
        };
      })
      .sort((a, b) => {
        const aMatch = a.code.match(/(\d+)|([A-Z])/g) || [];
        const bMatch = b.code.match(/(\d+)|([A-Z])/g) || [];
        return aMatch.toString().localeCompare(bMatch.toString());
      });

    res.json({ success: true, data: dtcList });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// API: Tìm kiếm DTC theo từ khóa
// ==========================================
app.get("/api/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ success: false, error: "Query required" });
  }

  try {
    const folders = fs.readdirSync(OUTPUT_SECTIONS_PATH, {
      withFileTypes: true,
    });
    const searchResults = folders
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => {
        const folderName = dirent.name;
        const code = folderName.split("_")[0];

        const folderPath = path.join(OUTPUT_SECTIONS_PATH, folderName);
        const refsData = safeReadJSON(path.join(folderPath, "refs.json")) || {};

        const exactName =
          refsData.name || folderName.split("_").slice(1).join(" ");
        const refsArray = refsData.refs || [];

        return {
          code,
          name: exactName,
          folder: folderName,
          displayName: exactName,
          refs: refsArray,
        };
      })
      .filter((dtc) => {
        const searchTerm = q.toLowerCase();
        return dtc.code.toLowerCase().includes(searchTerm);
      });

    res.json({
      success: true,
      data: searchResults,
      query: q,
      total: searchResults.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Search error" });
  }
});

// ==========================================
// API: Lấy dữ liệu Bảng (Tables) của một DTC
// ==========================================
app.get("/api/dtc-tables/:folder", (req, res) => {
  const { folder } = req.params;
  const safeFolder = path.basename(folder);

  const isPowertrainDTC = /P[0-9A-F]{4}/i.test(safeFolder);

  if (!isPowertrainDTC) {
    return res.json({ success: true, data: [] });
  }

  const tablePath = path.join(
    OUTPUT_SECTIONS_PATH,
    safeFolder,
    "troubleshooting_tables.json",
  );

  try {
    if (!fs.existsSync(tablePath)) {
      return res.json({ success: true, data: [] });
    }

    const tablesData = safeReadJSON(tablePath);
    res.json({ success: true, data: tablesData || [] });
  } catch (error) {
    res.status(500).json({ success: false, error: "Lỗi khi đọc dữ liệu bảng" });
  }
});

// ==========================================
// API: Tìm folder theo code (để redirect)
// ==========================================
app.get("/api/dtc-find/:code", (req, res) => {
  const { code } = req.params;

  try {
    const folders = fs.readdirSync(OUTPUT_SECTIONS_PATH, {
      withFileTypes: true,
    });
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
      res
        .status(404)
        .json({ success: false, error: `Không tìm thấy DTC: ${code}` });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Find error" });
  }
});

// ==========================================
// Serve static files
// ==========================================
// 4. Cho phép truy cập vào thư mục public, đặc biệt là PDF
app.use(express.static(path.join(__dirname, "public")));
// (Tùy chọn) Thêm một route riêng cho file PDF nếu cần
app.use("/output_sections", express.static(OUTPUT_SECTIONS_PATH));

// 5. Thêm route test kết nối cho Railway
app.get("/", (req, res) => {
  res.send("Backend DTC Auto Docs Scribe is running!");
});

// 6. Thêm 0.0.0.0 vào app.listen
app.listen(PORT, "0.0.0.0", () => {
  console.log("\n=====================================");
  console.log("✓ DTC API Server is running!");
  console.log(`✓ API available at port: ${PORT}`);
  console.log("=====================================\n");
});
