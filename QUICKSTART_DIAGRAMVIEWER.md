## ⚡ Hướng dẫn Nhanh - DiagramViewer

### 🚀 Bắt đầu ngay

#### Bước 1: Cài đặt phụ thuộc (nếu cần)

```bash
bun install
# hoặc
npm install
```

#### Bước 2: Chạy dev server

```bash
bun dev
# hoặc
npm run dev
```

#### Bước 3: Kiểm tra tính năng

1. Vào **http://localhost:5173**
2. Click "Sơ đồ triệu chứng" trên navbar
3. Chọn một triệu chứng → Mở DiagramViewer

---

### 🎮 Kiểm tra nhanh mỗi tính năng

#### ✅ Zoom

- **Mouse Wheel:** Cuộn lên/xuống
- **Nút +/-:** Click các nút góc dưới trái
- **Reset:** Click nút reset

#### ✅ Kéo thả (Pan)

- Phóng to hình ảnh đến 150%+
- Kéo chuột để di chuyển
- Cursor sẽ đổi thành "grab" 👆

#### ✅ Slider

- **Next:** Click nút "Tiếp theo" hoặc ▶
- **Previous:** Click nút ◀
- **Số hiển thị:** Xem x/y ở trên cùng

#### ✅ Thumbnail

- Scroll trong sidebar bên phải
- Click ảnh để chuyển nhanh
- Ảnh đang xem được highlight

---

### 📁 Hình ảnh mẫu được hỗ trợ

| Triệu chứng       | Thư mục       | Ảnh | Trạng thái |
| ----------------- | ------------- | --- | ---------- |
| Rung giật động cơ | `RungGiat`    | 4   | ✅         |
| Quá nhiệt         | `QuaNhiet`    | 3   | ✅         |
| Khói đen          | `khoiDen`     | 4   | ✅         |
| Khó khởi động     | `KhoKhoiDong` | 3   | ✅         |
| Cầm chừng kém     | `CamChungKem` | 3   | ✅         |
| Mất công suất     | `MatCongSuat` | 3   | ✅         |

---

### 🔧 Thêm triệu chứng mới (5 phút)

**Ví dụ:** Thêm triệu chứng "Động cơ kêu rơ"

#### 1️⃣ Tạo thư mục hình ảnh

```
public/so_do/
└── DongCoKeuRo/
    ├── 1.png
    ├── 2.png
    └── 3.png
```

#### 2️⃣ Cập nhật `src/data/symptomsConfig.ts`

```typescript
export const SYMPTOMS: SymptomConfig[] = [
  // ... existing symptoms ...
  {
    id: "engine-noise",
    title: "Động cơ kêu rơ",
    folder: "DongCoKeuRo",
    description: "Kiểm tra nguyên nhân động cơ kêu rơ",
  },
];
```

#### 3️⃣ Hoàn tất! ✅

- Navbar sẽ tự động thêm vào menu
- Quiz modal sẽ tự động thêm vào
- Không cần sửa file khác!

---

### 🐛 Gỡ lỗi nhanh

| Vấn đề               | Giải pháp                                  |
| -------------------- | ------------------------------------------ |
| Hình không hiển thị  | Kiểm tra tên file: `1.png`, `2.png`, ...   |
| Zoom không hoạt động | Phải có ảnh được tải trước, thử F5 refresh |
| Sidebar ẩn           | Màn hình quá nhỏ, zoom ra để xem           |
| Ảnh bị vắt           | Hình ảnh quá lớn, optimize kích thước      |

---

### 📚 Tài liệu đầy đủ

- **Chi tiết:** Xem `DIAGRAM_VIEWER_GUIDE.md`
- **Test cases:** Xem `DIAGRAM_VIEWER_TEST.md`
- **Thay đổi:** Xem `CHANGELOG_DIAGRAMVIEWER.md`

---

### 💾 File thay đổi

| File                                     | Trạng thái | Mô tả                  |
| ---------------------------------------- | ---------- | ---------------------- |
| `src/components/canva/DiagramViewer.tsx` | ✨ NEW     | Component viewer chính |
| `src/components/landing/Navbar.tsx`      | ✏️ UPDATED | Sử dụng config mới     |
| `src/App.tsx`                            | ✏️ UPDATED | Import DiagramViewer   |
| `src/data/symptomsConfig.ts`             | ✨ NEW     | Cấu hình triệu chứng   |

---

### 🎯 Nếu gặp vấn đề

1. **Bước 1:** Chạy `bun run dev` lại
2. **Bước 2:** Clear cache (Ctrl+Shift+Delete)
3. **Bước 3:** Kiểm tra console (F12 → Console tab)
4. **Bước 4:** Xem troubleshooting trong DIAGRAM_VIEWER_GUIDE.md

---

**Ready to go!** 🚀 Chúc bạn sử dụng vui vẻ!
