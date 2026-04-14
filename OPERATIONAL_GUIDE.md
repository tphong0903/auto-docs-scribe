# 🎬 DTC Viewer - Hướng Dẫn Vận Hành Chi Tiết

## 📌 Thông Tin Nhanh

| Đặc tính           | Chi tiết                |
| ------------------ | ----------------------- |
| **Frontend**       | http://localhost:8080   |
| **API Server**     | http://localhost:3001   |
| **Lệnh khởi động** | `npm run dev`           |
| **Framework**      | React 18 + TypeScript   |
| **Styling**        | TailwindCSS + shadcn/ui |
| **PDF Support**    | react-pdf + pdfjs-dist  |

---

## 🚦 Quy Trình Khởi Động Từng Bước

### Bước 1: Mở Terminal/PowerShell

```bash
# Chuyển đến thư mục dự án
cd d:\TAI_LIEU_DAI_HOC\Code\PhanVu\auto-docs-scribe
```

### Bước 2: Khởi Động Ứng Dụng

```bash
npm run dev
```

**Output Expected:**

```
  ➜  Local:   http://localhost:8080/
  ➜  Press h to show help

DTC API Server running at http://localhost:3001
```

### Bước 3: Mở Trình Duyệt

1. Mở Chrome, Firefox, Edge, hoặc Safari
2. Nếu không tự mở, vào: **http://localhost:8080**

### Bước 4: Sử Dụng Ứng Dụng

Xem phần "📖 Hướng Dẫn Sử Dụng" dưới đây

---

## 📖 Hướng Dẫn Sử Dụng

### 🔍 Tìm Kiếm DTC

1. Nhìn vào **Sidebar bên trái**
2. Có ô "Tìm kiếm mã DTC..." ở đầu
3. **Gõ mã hoặc tên** (ví dụ: "1A-51" hoặc "DTC")
4. Danh sách **tự động lọc** theo gõ

```
Ô Tìm Kiếm
    ↓
[1A-51 - DTC_P0010_P2088] ← Kết quả match
[1A-55 - DTC_P0016] ← Kết quả match
[2A-1 - ...] ← Không match → bị ẩn
```

### 📂 Chọn DTC

1. **Click** vào một item trong sidebar
2. Item này sẽ **highlight xanh**
3. **PDF tự động load** ở giữa
4. **References tự động hiển thị** bên phải

```
Trước: [1A-51 - DTC_P0010_P2088]  ← Màu xám
              ↓ (Click)
Sau:  [1A-51 - DTC_P0010_P2088]   ← Màu xanh
```

### 📄 Xem PDF

1. **PDF tự động load** khi chọn DTC
2. Dùng **nút Prev/Next** để chuyển trang
3. **Page counter** hiển thị: "trang hiện tại / tổng trang"
4. **Loading spinner** hiển thị khi đang load

```
Điều Khiển PDF
┌─────────────────┐
│ ◄  5 / 45  ►   │  ← Prev, Page, Next
└─────────────────┘
     ↓ (Click)
  [PDF Load]
```

### 🔗 Sử Dụng Reference

1. Nhìn vào **References panel bên phải**
2. Xem danh sách các **mã tham khảo** từ `refs.json`
3. **Click vào một mã** (ví dụ: "1A-12")
4. Ứng dụng **tự động tìm và chuyển** đến DTC đó
5. **PDF + References cập nhật** tự động

```
References Panel
┌────────────────┐
│  📌 1A-12  →   │ ← Click để mở
│  📌 1A-41  →   │
│  📌 2A-5   →   │
└────────────────┘
      ↓ (Click)
[Find Folder] → [Navigate] → [Load]
```

---

## ⌨️ Tương Tác Chi Tiết

### Sidebar (Danh Sách DTC)

| Tương Tác         | Kết Quả                    |
| ----------------- | -------------------------- | ----------------------------- |
| Gõ vào ô tìm kiếm | Filter danh sách real-time |
| **Click** item    | Chọn DTC + load PDF + refs |
| **Scroll**        | Lướt danh sách DTC         |
| **Hover**         | Item highlight             | màu xám cho thấy có thể click |

### PDF Viewer (Giữa)

| Tương Tác          | Kết Quả                              |
| ------------------ | ------------------------------------ |
| Click **◄ (Prev)** | Đến trang trước                      |
| Click **► (Next)** | Đến trang sau                        |
| **Scroll**         | Lướt trong PDF                       |
| **Zoom**           | Có thể zoom bằng browser (Ctrl+Plus) |

### References Panel (Phải)

| Tương Tác    | Kết Quả                  |
| ------------ | ------------------------ |
| **Click mã** | Tìm DTC & chuyển hướng   |
| **Hover**    | Mã highlight + icon mở   |
| **Scroll**   | Lướt danh sách tham khảo |

---

## 📊 Mô Tả Giao Diện

```
┌───────────────────────────────────────────────────────────────────┐
│                                                                   │
│  SIDEBAR                PDF VIEWER             REFERENCES PANEL  │
│ ┌──────────┐         ┌──────────────┐         ┌──────────────┐   │
│ │ Search   │         │              │         │ 📌 1A-12 →  │   │
│ │ ⌕ _____  │         │   Điều Khiển │         │ 📌 1A-41 →  │   │
│ │          │         │ ◄ 5/45 ►     │         │ 📌 2A-5  →  │   │
│ │ [DTC 1]  │         │              │         │             │   │
│ │ Selected │         │              │         │ Scroll để   │   │
│ │ color:   │         │   Nội dung   │         │ xem thêm    │   │
│ │ blue     │         │   PDF...     │         │             │   │
│ │          │         │              │         │             │   │
│ │ [DTC 2]  │         │              │         │             │   │
│ │ Normal   │         │              │         │             │   │
│ │ color:   │         │              │         │             │   │
│ │ gray     │         │              │         │             │   │
│ │          │         │              │         │             │   │
│ │ Scroll   │         │  Scroll      │         │  Scroll     │   │
│ │...       │         │  ...         │         │  ...        │   │
│ └──────────┘         └──────────────┘         └──────────────┘   │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Kịch Bản Sử Dụng Thực Tế

### Kịch Bản 1: Tìm DTC Cụ Thể

**Mục đích**: Tìm DTC P0010

```
1. Nhìn Sidebar
2. Gõ "P0010" vào ô tìm kiếm
3. Danh sách lọc → Chỉ hiển thị DTC có "P0010"
4. Click vào DTC tìm được
5. Xem PDF và references
```

### Kịch Bản 2: Khám Phá Tài Liệu Liên Quan

**Mục đích**: Tìm hiểu more chi tiết qua references

```
1. Mở DTC A
2. Xem References panel → Thấy "1A-12"
3. Click "1A-12"
4. App tự động tìm & chuyển → DTC B
5. Xem PDF DTC B
6. Lặp lại bước 2-5 để khám phá thêm
```

### Kịch Bản 3: So Sánh Nhiều DTC

**Mục đích**: Nhanh chóng chuyển qua các DTC

```
1. Click DTC 1 → Xem → Đọc PDF
2. Gõ tìm kiếm → DTC 2
3. Click DTC 2 → Xem → Đọc PDF
4. Back to search → DTC 3
5. ...
```

---

## 🛑 Xử Lý Tình Huống

### ❌ Ứng dụng không kết nối

**Dialog hiện lên:**

```
Lỗi kết nối
Không thể kết nối tới server
Vui lòng đảm bảo rằng API server đang chạy
trên localhost:3001

[Thử lại] button
```

**Giải pháp:**

1. Kiểm tra terminal → API server chạy chưa?
2. Nếu chưa: Ctrl+C rồi chạy `npm run dev` lại
3. Click "[Thử lại]" button

### ❌ PDF không hiển thị

**Khu PDF trống hoặc loading lâu**

**Nguyên nhân có thể:**

1. File PDF không tồn tại
2. File PDF bị hỏng
3. Network chậm

**Giải pháp:**

1. Chyển DTC khác → Nếu OK thì file PDF cũ bị hỏng
2. Kiểm tra file: `public/output_sections/[FOLDER]/[FOLDER].pdf`
3. Thay file PDF bằng file hợp lệ

### ❌ Reference không hoạt động

**Click reference nhưng không chuyển**

**Dialog xuất hiện:**

```
Toast: "Không tìm thấy tài liệu tham khảo: [CODE]"
```

**Nguyên nhân:**

- Mã reference không hợp lệ
- Folder không tồn tại

**Giải pháp:**

1. Kiểm tra `refs.json` → Có mã đấy không?
2. Kiểm tra folder → Folder `[CODE]_...` tồn tại không?
3. Fix file `refs.json` hoặc thêm folder

---

## ⚙️ Tuỳ Chỉnh Cơ Bản

### Thêm DTC Mới

1. Tạo **folder mới** trong `public/output_sections/`
   - Format: `[CODE]_[NAME]`
   - Ví dụ: `2B-10_New_DTC`

2. Thêm **file PDF** trong folder
   - Tên: `[CODE]_[NAME].pdf`
   - Ví dụ: `2B-10_New_DTC.pdf`

3. Tạo **refs.json** (tuỳ chọn)

   ```json
   ["1A-12", "1A-41"]
   ```

4. **Refresh** trang web → DTC mới xuất hiện

### Thay Đổi Search Behavior

File: `src/components/admin/DTCViewer.tsx` (Dòng ~73-75)

```typescript
// Case-insensitive search (hiện tại)
const filteredDTC = dtcList.filter((item) =>
  item.displayName.toLowerCase().includes(searchQuery.toLowerCase()),
);

// Để thay đổi: Edit điều kiện filter
```

### Thay Đổi Màu Giao Diện

File: `src/components/admin/DTCViewer.tsx`

Tìm các `className`:

- `bg-blue-600` → Selected color
- `bg-gray-100` → Normal color
- `text-gray-800` → Text color

Thay đổi số để tuỳ chỉnh (ví dụ: `blue-700`, `purple-500`, etc.)

---

## 📱 Responsive Design

Ứng dụng **responsive** trên:

- ✅ Desktop (được tối ưu)
- ✅ Laptop rộng
- ⚠️ Tablet (có thể cần scroll)
- ⚠️ Mobile (resize panels)

**Để dùng trên tablet/mobile**: Browser support panning & zoom

---

## 🎓 Keyboard Shortcuts (Tiềm Năng)

Hiện tại:

- Tab: Chuyển focus giữa elements
- Enter: Chọn focused item
- Ctrl+F: Browser search (không phải app search)

**Custom shortcuts không được implement** - nhưng dễ thêm nếu cần

---

## 📞 Troubleshooting FAQ

**Q: Terminal hiển thị error?**
A: Kiểm tra:

1. Node.js version >= v16
2. npm cache: `npm cache clean --force`
3. Reinstall: `npm install --legacy-peer-deps`

**Q: Port 8080/3001 đã bị dùng?**
A: Thay đổi port trong:

- Vite: `vite.config.ts` (server.port)
- API: `server.ts` (const PORT)

**Q: PDF file quá lớn → Load chậm?**
A:

1. Nén PDF (compression)
2. Thay PDF file bằng file smaller
3. Upgrade storage

**Q: Muốn deploy production?**
A:

1. `npm run build` → tạo `dist/`
2. Hôsting frontend: Vercel, Netlify, etc.
3. Hôsting API server: Heroku, AWS, etc.

---

## ✅ Checklist Trước Khi Sử Dụng

- [ ] Node.js cài đặt (check: `node -v`)
- [ ] npm cài đặt (check: `npm -v`)
- [ ] Dependencies install (`npm install` ✅ done)
- [ ] Server.ts tạo ✅ done
- [ ] Components tạo ✅ done
- [ ] npm run dev chạy được
- [ ] Vite server hiện URL ?
- [ ] API server log "running at localhost:3001" ?
- [ ] Browser truy cập http://localhost:8080 được?
- [ ] PDF hiển thị?
- [ ] Search hoạt động?
- [ ] Click DTC & references hoạt động?

---

**🎉 Sẵn sàng! Hãy vận hành ứng dụng!**

```bash
npm run dev
```

Thành công! 🚀
