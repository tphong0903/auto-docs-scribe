# DTC Documentation Viewer - Ứng dụng Tra cứu Tài liệu Sửa Chữa Ô tô

Ứng dụng web React hiện đại để tra cứu tài liệu sửa chữa ô tô (DTC) với giao diện phân chia 3 phần: Sidebar danh sách, PDF viewer, và tài liệu tham khảo.

## 🚀 Tính năng

- ✅ **Danh sách DTC động**: Quét tất cả thư mục từ `public/output_sections`
- ✅ **PDF Viewer**: Xem PDF của DTC trong ứng dụng với điều khiển trang
- ✅ **Tài liệu Tham khảo**: Danh sách các mã DTC tham khảo từ `refs.json`
- ✅ **Điều hướng Thông minh**: Click vào reference để chuyển đến DTC tương ứng
- ✅ **Tìm kiếm**: Filter DTC theo mã hoặc tên
- ✅ **Xử lý Lỗi**: Toast notification và thông báo lỗi rõ ràng
- ✅ **UI Hiện Đại**: TailwindCSS + shadcn/ui components

## 📋 Yêu cầu Hệ thống

- Node.js v16+
- npm hoặc bun
- Các file PDF trong `public/output_sections/**/*.pdf`

## 🔧 Cấu trúc Dự Án

```
auto-docs-scribe/
├── server.ts                          # API server (Express)
├── src/
│   ├── components/admin/
│   │   ├── Viewer.tsx                 # Entry component
│   │   ├── DTCViewer.tsx              # Component chính
│   │   ├── DTCSidebar.tsx             # Sidebar danh sách
│   │   ├── DTCPDFViewer.tsx           # PDF viewer
│   │   └── DTCReferencePanel.tsx      # Panel tài liệu tham khảo
│   └── ...
├── public/
│   ├── output_sections/               # Dữ liệu DTC
│   │   ├── 1A-51_DTC_P0010_P2088/
│   │   │   ├── 1A-51_DTC_P0010_P2088.pdf
│   │   │   └── refs.json              # Mảng tham khảo: ["1A-12", "1A-41"]
│   │   ├── ...
│   └── ...
└── ...
```

## ⚙️ Cài Đặt & Khởi Động

### 1. Cài đặt Dependencies

```bash
npm install
```

### 2. Khởi động Ứng Dụng (Dev Mode)

Chạy cả Vite server (port 8080) và API server (port 3001) **đồng thời**:

```bash
npm run dev
```

Nếu bạn muốn chạy riêng biệt:

```bash
# Terminal 1: Vite dev server
npm run dev:vite

# Terminal 2: API server
npm run dev:server
```

### 3. Truy Cập Ứng Dụng

Mở trình duyệt và vào: **http://localhost:8080**

Đảm bảo API server chạy tại **http://localhost:3001**

## 🏗️ API Endpoints

### GET `/api/dtc-list`

Lấy danh sách tất cả DTC (folder và metadata)

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "code": "1A-51",
      "name": "DTC_P0010_P2088",
      "folder": "1A-51_DTC_P0010_P2088",
      "displayName": "1A-51 - DTC_P0010_P2088"
    },
    ...
  ]
}
```

### GET `/api/dtc-refs/:folder`

Lấy danh sách tài liệu tham khảo từ `refs.json`

**Response:**

```json
{
  "success": true,
  "data": ["1A-12", "1A-41", "2A-5"]
}
```

### GET `/api/dtc-find/:code`

Tìm folder của DTC theo mã (ví dụ: "1A-51")

**Response:**

```json
{
  "success": true,
  "data": {
    "folder": "1A-51_DTC_P0010_P2088",
    "code": "1A-51"
  }
}
```

## 📁 Định Dạng Dữ Liệu

### Cấu Trúc Thư Mục

```
output_sections/
└── [CODE]_[NAME]/                    # Ví dụ: 1A-51_DTC_P0010_P2088
    ├── [CODE]_[NAME].pdf             # File PDF chính
    └── refs.json                      # File tham khảo (tùy chọn)
```

### File refs.json

Chứa một mảng JSON các mã DTC tham khảo:

```json
["1A-12", "1A-41", "2A-5"]
```

Hoặc file rỗng:

```json
[]
```

## 🎨 Giao Diện

### Layout 3 Phần

1. **Sidebar (trái)** - Danh sách DTC với tìm kiếm
2. **PDF Viewer (giữa)** - Xem PDF với điều khiển trang
3. **Reference Panel (phải)** - Danh sách tài liệu tham khảo clickable

### Tương Tác Chính

- **Click DTC** trên sidebar → Hiển thị PDF và refs
- **Click Reference** → Chuyển hướng đến DTC tương ứng
- **Type Search** → Filter danh sách theo mã/tên
- **Prev/Next Buttons** → Chuyển trang PDF
- **Scroll** → Lướt danh sách, refs, hoặc PDF

## 🐛 Xử Lý Lỗi

- **Không kết nối server**: Hiển thị lỗi và nút "Thử lại"
- **PDF không tồn tại**: Loading state hoặc thông báo lỗi
- **Reference không tìm thấy**: Toast notification "Không tìm thấy tài liệu tham khảo"
- **Folder không hợp lệ**: API trả về 400 Bad Request

## 🔒 Bảo Mật

- Server validate folder name để ngăn directory traversal (`../`)
- CORS enabled cho localhost development
- Static files phục vụ từ `public/`

## 📦 Stack Công Nghệ

- **Frontend**: React 18 + TypeScript + Vite
- **PDF**: react-pdf + pdfjs-dist
- **UI**: TailwindCSS + shadcn/ui + Lucide icons
- **Backend**: Express.js + TypeScript
- **Dev Tools**: ts-node-dev + concurrently

## 🚀 Build & Deploy

### Build Production

```bash
npm run build
```

Output: `dist/` folder

### Start Production Server

Sau khi build, chuẩn bị file server compiled:

```bash
npx tsc server.ts
node server.js
```

## 💡 Tuỳ Chỉnh

### Thay đổi Port API

File `server.ts`:

```typescript
const PORT = 3001; // Đổi port tại đây
```

Hoặc set biến môi trường:

```bash
PORT=3005 npm run dev:server
```

### Tuỳ chỉnh Giao Diện

- **Layout**: Thay đổi width của sidebar/reference panel trong DTCViewer.tsx
- **Colors**: TailwindCSS classes (bg-blue-600, text-gray-800, etc.)
- **Icons**: Lucide React icons library
- **Fonts**: Tailwind default fonts

## 🐛 Troubleshooting

**Q: "Cannot GET /api/dtc-list"**

- A: Đảm bảo API server chạy tại port 3001. Chạy `npm run dev` hoặc `npm run dev:server`

**Q: PDF không hiển thị**

- A: Kiểm tra đường dẫn file PDF: `public/output_sections/[FOLDER]/[FOLDER].pdf`
- Đảm bảo file PDF tồn tại và accessible

**Q: Reference link không hoạt động**

- A: Kiểm tra file `refs.json` - phải chứa mảng các mã hợp lệ
- Mã tham khảo phải khớp với folder name đầu tiên (ví dụ: "1A-12" → "1A-12\_...")

**Q: Lỗi CORS**

- A: CORS đã được enable trong server.ts. Nếu vẫn gặp vấn đề, check browser console

## 📝 License

Xây dựng cho dự án quản lý tài liệu DTC

---

**Phát triển bởi: Frontend Expert**

Hỗ trợ: Liên hệ through project issues
