# Test Checklist - DiagramViewer Features

## ✅ Tính năng cần kiểm tra

### 1. **Hiển thị hình ảnh**

- [ ] Hình ảnh từ thư mục được tải thành công
- [ ] Hình ảnh hiển thị đúng kích thước
- [ ] Không có lỗi CORS

### 2. **Zoom Functionality**

- [ ] Mouse wheel zoom hoạt động (cuộn lên = phóng to, cuộn xuống = thu nhỏ)
- [ ] Nút `+` / `-` hoạt động
- [ ] Nút `Reset` quay về 100%
- [ ] Zoom range: 100% - 300%
- [ ] Hiển thị % zoom chính xác

### 3. **Pan/Drag Functionality**

- [ ] Kéo chuột khi zoom > 100% để di chuyển hình
- [ ] Pan bị giới hạn (không kéo ra ngoài)
- [ ] Cursor thay đổi thành "grab" khi zoom
- [ ] Cursor thay đổi thành "grabbing" khi đang kéo

### 4. **Slider/Carousel**

- [ ] Nút Previous/Next hoạt động
- [ ] Số hiển thị chính xác (x/y)
- [ ] Có thể quay lại từ ảnh cuối cùng (circular)
- [ ] Reset view khi chuyển ảnh

### 5. **Thumbnail Panel**

- [ ] Thumbnail hiển thị preview
- [ ] Highlight ảnh hiện tại
- [ ] Scroll trong panel hoạt động
- [ ] Click thumbnail để chuyển

### 6. **Responsive Design**

- [ ] Desktop view hoạt động tốt
- [ ] Mobile view tương thích
- [ ] Layout không bị lỗi ở các kích thước khác nhau

### 7. **Navigation**

- [ ] Nút "Trang chủ" quay lại trang chính
- [ ] Link từ Navbar hoạt động
- [ ] URL query params chính xác

### 8. **Performance**

- [ ] Không có lag khi zoom
- [ ] Không có lag khi drag
- [ ] Tải hình ảnh nhanh

---

## 🧪 Test Cases

### Test Case 1: Basic Navigation

1. Vào trang chủ
2. Click "Sơ đồ triệu chứng" → "Rung giật động cơ"
3. **Kỳ vọng:** DiagramViewer mở và tải ảnh thành công

### Test Case 2: Zoom Test

1. Di chuột vào hình ảnh
2. Cuộn chuột lên 3-4 lần
3. **Kỳ vọng:** Hình ảnh phóng to đến ~150-180%
4. Cuộn chuột xuống
5. **Kỳ vọng:** Hình ảnh thu nhỏ về gần 100%

### Test Case 3: Pan Test

1. Phóng to hình ảnh (150%+)
2. Kéo chuột từ trái sang phải
3. **Kỳ vọng:** Hình ảnh di chuyển theo chuột
4. Kéo quá giới hạn
5. **Kỳ vọng:** Hình ảnh dừng lại (không kéo ra ngoài)

### Test Case 4: Slider Test

1. Click nút "Tiếp theo"
2. **Kỳ vọng:** Chuyển sang ảnh tiếp theo, số hiển thị tăng
3. Click nút Previous
4. **Kỳ vọng:** Quay lại ảnh trước

### Test Case 5: Thumbnail Click

1. Click vào thumbnail thứ 2
2. **Kỳ vọng:** Chuyển sang ảnh thứ 2
3. Zoom được reset
4. **Kỳ vọng:** Zoom = 100%

### Test Case 6: Mobile Test

1. Resize trình duyệt về kích thước mobile (< 768px)
2. **Kỳ vọng:** Layout vẫn tương thích, có thể sử dụng bình thường

---

## 🐛 Bug Report Template

```markdown
### Bug: [Tên lỗi]

**Bước tái hiện:**

1. ...
2. ...
3. ...

**Kỳ vọng:**
...

**Thực tế:**
...

**Ảnh chụp:** [Nếu có]

**Browser/Device:**

- OS: ...
- Browser: ...
- Version: ...
```

---

## 📝 Notes

- Đảm bảo tất cả hình ảnh đã được upload vào `public/so_do/`
- Test trên ít nhất 2 trình duyệt khác nhau
- Kiểm tra cả trên desktop và mobile
