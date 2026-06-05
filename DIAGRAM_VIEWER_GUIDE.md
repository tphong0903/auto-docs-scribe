# Hướng dẫn sử dụng Diagram Viewer

## Tổng quan

Component `DiagramViewer` là một image viewer hiện đại với các tính năng:

- 🖼️ Hiển thị hình ảnh từ thư mục `public/so_do`
- 🔍 Zoom (phóng to/thu nhỏ)
- 🖱️ Pan/Drag (kéo thả khi đang phóng to)
- ⬅️➡️ Slider/Carousel (chuyển đổi giữa các hình ảnh)
- 📱 Responsive design

## Cấu trúc thư mục

```
public/so_do/
├── RungGiat/           (Rung giật động cơ)
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── 4.png
├── QuaNhiet/          (Động cơ quá nhiệt)
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── khoiDen/           (Khói đen, dư xăng)
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── 4.png
├── CamChungKem/       (Cầm chừng kém)
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── KhoKhoiDong/       (Khó khởi động)
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
└── MatCongSuat/       (Mất công suất)
    ├── 1.png
    ├── 2.png
    └── 3.png
```

## Thêm triệu chứng mới

### Bước 1: Tạo thư mục hình ảnh

Tạo thư mục mới trong `public/so_do/` và đặt các hình ảnh PNG vào đó.
Tên file phải là `1.png`, `2.png`, `3.png`, v.v.

### Bước 2: Cập nhật cấu hình

Chỉnh sửa file `src/data/symptomsConfig.ts`:

```typescript
export const SYMPTOMS: SymptomConfig[] = [
  // ... existing symptoms ...
  {
    id: "your-symptom-id",
    title: "Tên triệu chứng",
    folder: "FolderName",
    description: "Mô tả triệu chứng (tùy chọn)",
  },
];
```

### Bước 3: Tự động cập nhật

Các thành phần sau sẽ tự động cập nhật:

- Menu sơ đồ trong Navbar
- Quiz modal
- Tất cả liên kết

## Tính năng chi tiết

### 1. Zoom

- **Phương pháp 1:** Lăn chuột lên để phóng to, xuống để thu nhỏ
- **Phương pháp 2:** Dùng nút `+` và `-` phía dưới bên trái
- **Reset:** Nhấp nút reset để quay về mặc định (100%)

### 2. Pan/Drag

- Khi hình ảnh đã phóng to (> 100%), di chuột để kéo thả xem các phần khác
- Chỉ hoạt động khi scale > 1

### 3. Slider/Carousel

- Nút **◀ Tiếp theo ▶** để chuyển giữa các hình ảnh
- Nhấp vào thumbnail ở sidebar để chuyển nhanh
- Tự động reset view (zoom=100%) khi chuyển hình

### 4. Thumbnail Panel

- Hiển thị preview của tất cả hình ảnh
- Nhấp để chọn hình cần xem
- Highlight hình hiện tại

## Điều hướng

### Từ Navbar

```
Navbar → "Sơ đồ triệu chứng" → Chọn triệu chứng → DiagramViewer
```

### URL Query Parameters

```
/diagram?folder=RungGiat&title=Rung giật động cơ
```

## Tế bào lệnh React

### Props

```typescript
interface ImageViewerProps {
  folder: string; // Tên thư mục (từ query params)
  title: string; // Tiêu đề (từ query params)
}
```

### State

- `images`: Danh sách đường dẫn hình ảnh
- `currentIndex`: Vị trí hình hiện tại
- `scale`: Mức zoom (1 = 100%)
- `pan`: Vị trí kéo thả {x, y}
- `isDragging`: Trạng thái kéo thả

## Tối ưu hoá

### Performance

- Lazy load hình ảnh (chỉ tải khi cần)
- Optimize hình ảnh trước khi upload (dưới 500KB mỗi file)
- Sử dụng format WebP nếu khả năng cho phép

### Hình ảnh recommend

- Kích thước: 1200x800 px trở lên
- Format: PNG hoặc WebP
- Dung lượng: 100-300 KB mỗi file

## Troubleshooting

### Hình ảnh không hiển thị

1. Kiểm tra tên file có phải `1.png`, `2.png`, ... không
2. Kiểm tra thư mục có tên chính xác không (case-sensitive)
3. Kiểm tra đường dẫn trong `symptomsConfig.ts`

### Zoom không hoạt động

- Đảm bảo đã phóng to (scale > 1)
- Thử dùng nút `+` thay vì lăn chuột

### Pan không hoạt động

- Chỉ hoạt động khi hình ảnh được phóng to
- Đảm bảo chuột đang trên hình ảnh

## File liên quan

- `src/components/canva/DiagramViewer.tsx` - Component chính
- `src/components/landing/Navbar.tsx` - Menu điều hướng
- `src/data/symptomsConfig.ts` - Cấu hình triệu chứng
- `src/App.tsx` - Routing

---

**Cập nhật lần cuối:** Tháng 6, 2026
