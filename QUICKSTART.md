# 🚀 DTC Viewer - Hướng Dẫn Nhanh

## Bước 1: Khởi Động Ứng Dụng

Mở terminal/PowerShell và chạy:

```bash
npm run dev
```

Lệnh này sẽ chạy **đồng thời**:

- 🎯 **Vite Dev Server** (Frontend) → http://localhost:8080
- 🔌 **Express API Server** → http://localhost:3001

## Bước 2: Truy Cập Ứng Dụng

Mở trình duyệt web và vào: **http://localhost:8080**

## 🎨 Giao Diện Chính

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Sidebar]            [PDF Viewer]        [References]     │
│  - Danh sách DTC      - Xem PDF           - Mã tham khảo  │
│  - Tìm kiếm           - Điều khiển trang  - Clickable     │
│  - Click để chọn      - Zoom              - Navigation    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 📋 Các Tính Năng Chính

### 1️⃣ Danh Sách DTC (Sidebar)

- Hiển thị tất cả DTC từ `public/output_sections`
- **Search**: Gõ để filter theo mã hoặc tên
- **Click**: Chọn DTC để xem chi tiết
- **Highlight**: DTC được chọn sẽ highlight màu xanh

### 2️⃣ Xem PDF (Giữa)

- Hiển thị file PDF của DTC được chọn
- **Prev/Next**: Điều hướng qua các trang
- **Page Info**: Hiển thị trang hiện tại / tổng trang
- **Auto Load**: Tự động load PDF khi chọn DTC

### 3️⃣ Tài Liệu Tham Khảo (Phải)

- Danh sách các mã tham khảo từ `refs.json`
- **Click trực tiếp**: Nhấn vào mã tham khảo để chuyển hướng
- **Auto Navigation**: Ứng dụng tự động tìm và mở DTC tương ứng
- **Toast Notification**: Thông báo nếu không tìm thấy

## 🔄 Quy Trình Sử Dụng Điển Hình

```
1. Mở ứng dụng → 2. Chọn DTC từ Sidebar
   ↓
3. Xem PDF và thông tin → 4. Click reference
   ↓
5. Chuyển hướng tự động → 6. Tiếp tục khám phá
```

## ⌨️ Phím Tắt / Tương Tác

| Thao tác            | Kết quả                  |
| ------------------- | ------------------------ |
| Gõ vào Search box   | Filter danh sách DTC     |
| Click DTC item      | Mở PDF + tải refs        |
| Click reference tag | Chuyển đến DTC tương ứng |
| Click Prev/Next     | Chuyển trang PDF         |
| Scroll Sidebar      | Lướt danh sách           |
| Scroll PDF area     | Lướt PDF                 |
| Scroll References   | Lướt danh sách tham khảo |

## 📁 Cấu Trúc Dữ Liệu

Ứng dụng tự động quét folder `public/output_sections`:

```
output_sections/
├── 1A-51_DTC_P0010_P2088/
│   ├── 1A-51_DTC_P0010_P2088.pdf    ← File PDF
│   └── refs.json                     ← ["1A-12", "1A-41"]
├── 1A-55_DTC_P0016/
│   ├── 1A-55_DTC_P0016.pdf
│   └── refs.json
└── ...
```

### Định Dạng refs.json

File này phải chứa mảng JSON các mã tham khảo:

```json
["1A-12", "1A-41", "2A-5"]
```

Nếu không có tài liệu tham khảo:

```json
[]
```

## 🐛 Xử Lý Sự Cố

### ❌ "Cannot connect to server"

**Nguyên nhân**: API server không chạy
**Giải pháp**: Đảm bảo chạy `npm run dev` (không phải chỉ `npm run dev:vite`)

### ❌ PDF không hiển thị

**Nguyên nhân**: Đường dẫn file PDF sai
**Giải pháp**: Kiểm tra file tồn tại: `public/output_sections/[FOLDER]/[FOLDER].pdf`

### ❌ Reference không hoạt động

**Nguyên nhân**: Mã tham khảo không khớp với folder
**Giải pháp**:

- Kiểm tra `refs.json` có mã hợp lệ
- Mã phải khớp với folder name đầu tiên (vd: "1A-12" → "1A-12\_...")

### ❌ Ứng dụng chậm khi load PDF

**Giải pháp**:

- Đợi PDF load xong (có loading indicator)
- Nếu file PDF lớn, có thể mất vài giây
- Kiểm tra file PDF không bị hỏng

## 🔧 Chế Độ Development

### Chạy Components Riêng Biệt

```bash
# Chỉ chạy Vite (cần API chạy riêng)
npm run dev:vite

# Chỉ chạy API Server (cần frontend call từ port khác)
npm run dev:server
```

### Debug

Mở **DevTools** (F12):

- **Console**: Xem logs và errors
- **Network**: Kiểm tra API calls
- **Elements**: Inspect UI components

## 📦 Build Production

```bash
npm run build
```

Output: `dist/` folder (ready to deploy)

## 🎯 API Endpoints Reference

| Endpoint                | Method | Tác dụng                  |
| ----------------------- | ------ | ------------------------- |
| `/api/dtc-list`         | GET    | Lấy danh sách tất cả DTC  |
| `/api/dtc-refs/:folder` | GET    | Lấy refs.json của một DTC |
| `/api/dtc-find/:code`   | GET    | Tìm folder theo mã        |

## 💡 Mẹo & Trik

1. **Search nhanh**: Gõ mã DTC để tìm ngay lập tức
2. **Bookmark**: Bookmark folder `output_sections` để thêm DTC mới
3. **Batch Add DTC**: Chỉ cần tạo folder mới → ứng dụng tự động nhận biết
4. **Auto Reload**: Khi thêm folder mới, refresh trang để cập nhật

## 📞 Hỗ Trợ

Xem file chi tiết: **DTC_VIEWER_README.md**

---

**Happy Coding! 🚀**
