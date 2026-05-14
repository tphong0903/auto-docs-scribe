# 📚 Auto Docs Scribe - Hướng Dẫn Cho Người Mới Bắt Đầu & Non-Tech

> Bạn muốn hiểu **dự án này được xây dựng như thế nào**? Hoặc bạn muốn **xây dựng một dự án tương tự**? Tài liệu này sẽ giúp bạn! 🚀

---

## 📖 Mục Lục

1. [❓ Dự Án Này Là Gì?](#-dự-án-này-là-gì)
2. [🏗️ Cách Xây Dựng (Step by Step)](#️-cách-xây-dựng-step-by-step)
3. [🤖 Cách Prompt với AI để Xây Dựng Dự Án](#-cách-prompt-với-ai-để-xây-dựng-dự-án)
4. [💻 Khởi Động Ứng Dụng (Cho Người Không Code)](#-khởi-động-ứng-dụng-cho-người-không-code)
5. [📊 Bố Cục Ứng Dụng - Dễ Hiểu](#-bố-cục-ứng-dụng---dễ-hiểu)
6. [🔄 Quy Trình Tạo Dự Án](#-quy-trình-tạo-dự-án)
7. [❓ Câu Hỏi Thường Gặp](#-câu-hỏi-thường-gặp)

---

## ❓ Dự Án Này Là Gì?

### 🎯 Mục Đích

Ứng dụng này là một **công cụ tra cứu tài liệu kỹ thuật** giống như một **cuốn sách điện tử thông minh** với những tính năng:

- 📖 Xem các tài liệu PDF (giống như xem sách)
- 🔍 Tìm kiếm tài liệu (bạn nhập mã, nó tìm ra)
- 🔗 Các liên kết tham khảo (giống như "xem tiếp tài liệu liên quan")

### 🚗 Ví Dụ Thực Tế

Hãy tưởng tượng bạn có:

- 📚 500 cuốn sách về sửa chữa ô tô
- 🏢 Cần lưu trữ chúng và dễ tìm kiếm
- 👥 Nhiều người cần sử dụng cùng lúc

**Thay vì** để 500 cuốn sách ở thư viện (khó tìm, khó chia sẻ)  
**Chúng ta** tạo một **ứng dụng web** để mọi người truy cập từ máy tính

---

## 🏗️ Cách Xây Dựng (Step by Step)

### 📋 Quy Trình Tổng Quát

```
1. Chuẩn Bị Dữ Liệu
   ↓
2. Chọn Công Nghệ
   ↓
3. Xây Dựng Frontend (Giao Diện)
   ↓
4. Xây Dựng Backend (Động Cơ)
   ↓
5. Kết Nối Frontend + Backend
   ↓
6. Test & Deploy (Đưa Lên Mạng)
```

---

### Bước 1️⃣: Chuẩn Bị Dữ Liệu

#### ❓ Cần Gì?

- 📄 **PDF files** - Các tài liệu (sửa chữa, hướng dẫn, v.v.)
- 📋 **Danh sách references** - Những tài liệu liên quan (file `refs.json`)

#### 📁 Cấu Trúc Folder

```
public/output_sections/
│
├── 1A-51_DTC_P0010/
│   ├── 1A-51_DTC_P0010.pdf          ← File PDF
│   └── refs.json                    ← File danh sách liên kết
│
├── 1A-55_DTC_P0016/
│   ├── 1A-55_DTC_P0016.pdf
│   └── refs.json
│
└── ... (nhiều folder khác)
```

#### 📝 File `refs.json` Trông Như Thế Nào?

```json
["1A-12", "1A-41", "1A-55"]
```

> Đơn giản thôi! Chỉ là danh sách các mã tài liệu liên quan.

---

### Bước 2️⃣: Chọn Công Nghệ

#### 🤔 Công Nghệ Là Gì?

Công nghệ giống như "**công cụ xây nhà**":

- 🛠️ Nếu xây nhà gỗ → dùng sơn, khoan, đinh
- 💻 Nếu xây ứng dụng web → dùng React, TypeScript, TailwindCSS

#### Các Công Nghệ Đã Chọn

| Phần                     | Công Nghệ   | Tác Dụng                           |
| ------------------------ | ----------- | ---------------------------------- |
| **Frontend** (Giao diện) | React       | Framework để xây giao diện         |
|                          | TypeScript  | Giúp code không bị lỗi             |
|                          | TailwindCSS | Giúp thiết kế đẹp nhanh            |
|                          | shadcn/ui   | Thư viện các nút bấm, dialog, v.v. |
| **Backend** (Động cơ)    | Express.js  | Server để quản lý dữ liệu          |
| **Build**                | Vite        | Tool giúp chạy & build nhanh       |

#### 🎨 Tính Chất Của Từng Phần

```
Frontend (Giao Diện)
├─ Người dùng nhìn thấy
├─ Các nút bấm, menu, hình ảnh
└─ Chạy trên trình duyệt

Backend (Động Cơ)
├─ Người dùng không nhìn thấy
├─ Quản lý dữ liệu, tệp PDF, danh sách
└─ Chạy trên server
```

---

### Bước 3️⃣: Xây Dựng Frontend (Giao Diện)

#### 🎨 Giao Diện Trông Như Thế Nào?

```
┌─────────────────────────────────────────────┐
│  🏠 Auto Docs Scribe                        │
├────────────────────────────────────────────┤
│           DTC Explorer                       │
├────────────────────────────────────────────┤
│ SIDEBAR          │ PDF VIEWER    │ REFS   │
│ ┌──────────┐    │ ┌───────────┐ │ ┌────┐ │
│ │ 1A-51    │    │ │           │ │ │ Ref │
│ │ 1A-55    │    │ │  PDF Page │ │ │ 1A-12
│ │ 1A-60    │    │ │           │ │ │ 1A-41
│ │ Search:  │    │ │[Page 1/5] │ │ │ 1A-55
│ │  _______│    │ │           │ │ │     │
│ └──────────┘    │ └───────────┘ │ └────┘
└────────────────────────────────────────────┘
```

#### 📝 Component (Phần) Chính

| Component             | Tác Dụng                    |
| --------------------- | --------------------------- |
| **Sidebar (Trái)**    | Hiển thị danh sách tài liệu |
| **PDF Viewer (Giữa)** | Xem file PDF                |
| **References (Phải)** | Hiển thị liên kết liên quan |

#### 🛠️ Cách Xây Dựng

Bạn tạo các **component** (những khối giao diện):

```
Viewer.tsx (Component chính)
├─ DTCSidebar.tsx (Danh sách)
│  └─ Search input
│  └─ Item list
├─ DTCPDFViewer.tsx (Xem PDF)
│  └─ PDF display
│  └─ Prev/Next buttons
└─ DTCReferencePanel.tsx (Liên kết)
   └─ Reference list
   └─ Clickable tags
```

---

### Bước 4️⃣: Xây Dựng Backend (Động Cơ)

#### 🔧 Backend Làm Cái Gì?

Backend là **"bộ não"** của ứng dụng:

```
Người Dùng Click Button
            ↓
Frontend Gửi Yêu Cầu (Request)
            ↓
Backend Nhận Yêu Cầu
            ↓
Backend Tìm Dữ Liệu
            ↓
Backend Gửi Kết Quả (Response)
            ↓
Frontend Hiển Thị Kết Quả
```

#### 📡 API Endpoints (Các Đường Dẫn)

API giống như **những cửa cấp dữ liệu**:

```
Cửa 1: /api/dtc-list
       "Cho tôi danh sách tất cả tài liệu"
       ↓ Trả về: [1A-51, 1A-55, 1A-60, ...]

Cửa 2: /api/dtc-refs/:folder
       "Cho tôi các tài liệu liên quan của 1A-51"
       ↓ Trả về: [1A-12, 1A-41]

Cửa 3: /api/dtc-find/:code
       "Tìm folder của 1A-51"
       ↓ Trả về: { folder: "1A-51_DTC_P0010_P2088" }
```

#### 🔨 Code Backend (Express.js)

```javascript
// Bước 1: Khởi tạo server
const app = express();

// Bước 2: Tạo "cửa" (endpoint)
app.get("/api/dtc-list", (req, res) => {
  // Bước 3: Đọc folder
  const folders = fs.readdirSync("public/output_sections");

  // Bước 4: Trả về kết quả
  res.json({ success: true, data: folders });
});

// Bước 5: Khởi động server
app.listen(3001);
```

---

### Bước 5️⃣: Kết Nối Frontend + Backend

#### 🔌 Cách Kết Nối?

```
Frontend (Port 8080)
    ↓
Gửi request: "Lấy danh sách tài liệu"
    ↓
Backend (Port 3001)
    ↓
Trả về: [1A-51, 1A-55, ...]
    ↓
Frontend hiển thị danh sách
```

#### 📝 Code Kết Nối (Frontend)

```javascript
// Frontend gửi request
const response = await fetch("http://localhost:3001/api/dtc-list");
const data = await response.json();

// Hiển thị dữ liệu
setDtcList(data.data);
```

---

### Bước 6️⃣: Test & Deploy

#### 🧪 Test Là Gì?

Test = **Kiểm tra xem có lỗi không**

```bash
npm run test              # Chạy các kiểm tra tự động
npm run dev              # Chạy app để test thủ công
```

#### 🚀 Deploy (Đưa Lên Mạng)

Deploy = **Đưa ứng dụng lên internet để mọi người dùng**

```
Máy Tính Cá Nhân (localhost:8080)
            ↓
    Build Ứng Dụng
            ↓
  Upload Lên Vercel / AWS / DigitalOcean
            ↓
Người Dùng Truy Cập: https://auto-docs-scribe.vercel.app
```

---

## 🤖 Cách Prompt với AI để Xây Dựng Dự Án

### 📝 Template Prompt Cơ Bản

Khi bạn muốn tạo một dự án tương tự, hãy prompt như sau:

```
Tôi muốn xây dựng một ứng dụng web để tra cứu tài liệu
(giống như DTC Viewer). Ứng dụng cần có:

1. Frontend:
   - Giao diện 3 phần: Sidebar + Main Viewer + Side Panel
   - Search/Filter tài liệu
   - Xem PDF file

2. Backend:
   - Express.js server
   - API để lấy danh sách tài liệu
   - API để lấy references
   - API để tìm tài liệu

3. Công Nghệ:
   - Frontend: React + TypeScript + TailwindCSS
   - Backend: Express.js + Node.js
   - PDF Viewer: react-pdf

4. Dữ Liệu:
   - Folder: public/output_sections/
   - Mỗi folder chứa: 1 PDF file + 1 refs.json

5. Tính Năng:
   - Dynamic load danh sách từ folder
   - Click item để xem PDF
   - Click reference để jump đến tài liệu khác
   - Error handling & loading states

Vui lòng tạo cấu trúc folder và các component cần thiết.
```

### 🎯 Ví Dụ Prompt Chi Tiết Hơn

#### Prompt 1: Xây Dựng Component Sidebar

```
Tôi cần tạo một Sidebar component để hiển thị danh sách tài liệu.

Requirements:
- Hiển thị danh sách item với scroll
- Có search/filter input
- Highlight item được select
- Click item gọi callback onSelect

Props:
- items: Array<{code, name, displayName}>
- selected: Object | null
- onSelect: (item) => void
- searchQuery: string
- onSearchChange: (query) => void

Hãy tạo component này bằng React + TypeScript + TailwindCSS.
Sử dụng shadcn/ui cho components.
```

#### Prompt 2: Xây Dựng API Backend

```
Tôi cần tạo 3 API endpoints bằng Express.js:

1. GET /api/dtc-list
   - Scan folder: public/output_sections/
   - Trả về mảng các folder (code, name, displayName)
   - Sort by code tự nhiên

2. GET /api/dtc-refs/:folder
   - Đọc file: public/output_sections/{folder}/refs.json
   - Trả về danh sách references
   - Nếu không có file → return []

3. GET /api/dtc-find/:code
   - Tìm folder theo code
   - Trả về folder path
   - Nếu không tìm thấy → return error

Server chạy trên port 3001, enable CORS.
```

#### Prompt 3: Kết Nối Frontend + Backend

```
Tôi có:
- Frontend: React component với state (dtcList, selected, refs)
- Backend: Express API (/api/dtc-list, /api/dtc-refs, /api/dtc-find)

Hãy viết code React để:
1. Khi component mount → fetch /api/dtc-list
2. Set dtcList vào state
3. Khi select item → fetch /api/dtc-refs/{folder}
4. Set refs vào state
5. Handle loading & error states

Sử dụng React hooks (useState, useEffect).
```

### 💡 Prompt Writing Tips

#### ✅ DO:

```
✓ Nêu rõ mục đích: "Tôi muốn tạo..."
✓ Liệt kê requirements rõ ràng
✓ Nêu công nghệ cụ thể
✓ Cho ví dụ dữ liệu input/output
✓ Nêu ràng buộc (constraints)
```

#### ❌ DON'T:

```
✗ "Tạo một ứng dụng web" (quá mơ hồ)
✗ "Làm một component" (không nêu props/functionality)
✗ "Viết code" (không nêu công nghệ)
✗ "Fix lỗi" (không nêu lỗi gì)
```

### 📋 Checklist Prompt

Trước khi gửi prompt, kiểm tra:

- [ ] Mục đích rõ ràng?
- [ ] Công nghệ cụ thể?
- [ ] Requirements liệt kê?
- [ ] Input/Output examples?
- [ ] Constraints nêu rõ?
- [ ] Scope rõ ràng (không quá lớn)?

---

## 💻 Khởi Động Ứng Dụng (Cho Người Không Code)

### 🎯 Mục Đích

Bạn muốn **chạy ứng dụng** nhưng không biết code? Đây là cách!

### 📋 Yêu Cầu

1. **Node.js** - Công cụ để chạy JavaScript
   - Download từ: https://nodejs.org/
   - Chọn LTS (Long Term Support)

2. **PowerShell / Command Prompt** - Dòng lệnh Windows
   - Built-in sẵn trong Windows

### ✅ Bước 1: Cài Đặt Node.js

1. Vào https://nodejs.org/
2. Click "Download LTS" (phiên bản ổn định)
3. Double-click file download để cài đặt
4. Chọn "Next" → "Next" → Finish

> **Xác nhận cài đặt thành công**:
>
> - Mở PowerShell
> - Gõ: `node -v`
> - Nếu thấy số version → Thành công ✅

### ✅ Bước 2: Mở Folder Dự Án

1. Mở PowerShell
2. Gõ:

```powershell
cd d:\TAI_LIEU_DAI_HOC\Code\PhanVu\auto-docs-scribe
```

> 💡 Nếu không biết path, mở folder trong File Explorer, nhấp chuột phải → "Copy as path"

### ✅ Bước 3: Cài Đặt Dependencies (Thư Viện)

Gõ lệnh:

```powershell
npm install
```

> ⏱️ Chờ khoảng 2-5 phút để download & cài đặt

### ✅ Bước 4: Khởi Động Ứng Dụng

Gõ lệnh:

```powershell
npm run dev
```

> Nếu thành công, bạn sẽ thấy:
>
> ```
> ✓ Vite dev server running at:
> > http://localhost:8080/
>
> ✓ API server running at:
> > http://localhost:3001/
> ```

### ✅ Bước 5: Mở Trình Duyệt

1. Mở Chrome / Firefox / Edge
2. Gõ: `http://localhost:8080`
3. Bạn sẽ thấy landing page
4. Click "DTC Explorer" để xem danh sách tài liệu

### ⏹️ Dừng Ứng Dụng

Khi muốn tắt, ở PowerShell:

```
Nhấn: Ctrl + C
```

---

## 📊 Bố Cục Ứng Dụng - Dễ Hiểu

### 🏠 Landing Page

```
┌────────────────────────────────┐
│     Auto Docs Scribe           │
├────────────────────────────────┤
│  Chào mừng bạn đến ứng dụng    │
│                                │
│  [📖 DTC Explorer]             │
│  [📡 Sensor Explorer]          │
│  [🎨 Diagram]                  │
│  [🎬 YouTube]                  │
└────────────────────────────────┘
```

### 📖 DTC Explorer Page

#### Layout 3 Phần:

```
┌────────────────────────────────────────┐
│ 📚 DTC Explorer                        │
├──────────┬──────────────┬──────────────┤
│SIDEBAR   │ PDF VIEWER   │ REFERENCES   │
│          │              │              │
│Search:   │   📄         │ Related:     │
│ ______   │              │              │
│          │  PDF Page    │ • 1A-12      │
│1A-51 ✓   │  ▲ 1/5 ▼    │ • 1A-41      │
│1A-55     │              │ • 1A-60      │
│1A-60     │              │              │
│1A-100    │              │              │
│...       │              │              │
│          │              │              │
└──────────┴──────────────┴──────────────┘
```

#### Tương Tác:

1. **Tìm Kiếm (Sidebar)**
   - Gõ mã tài liệu → Danh sách filter
   - Click item → PDF hiển thị ở giữa

2. **Xem PDF (Giữa)**
   - Nút "◀ Previous" → Trang trước
   - Nút "Next ▶" → Trang sau
   - Hiển thị "Trang 1 / 5"

3. **Tham Khảo (Phải)**
   - Danh sách tài liệu liên quan
   - Click → Jump đến tài liệu đó

---

## 🔄 Quy Trình Tạo Dự Án (Tóm Tắt)

### 📅 Timeline Điển Hình

```
Tuần 1:
  - Thu thập & organize dữ liệu (PDF, refs.json)
  - Thiết kế mockup / wireframe giao diện

Tuần 2:
  - Xây dựng Backend (Express API)
  - Test API endpoints

Tuần 3:
  - Xây dựng Frontend components
  - Kết nối Frontend + Backend

Tuần 4:
  - Test toàn bộ
  - Deploy lên server
```

### 👥 Nhân Sự Cần Thiết

| Vai Trò             | Công Việc               | Kỹ Năng                |
| ------------------- | ----------------------- | ---------------------- |
| **Product Manager** | Định nghĩa requirements | Giao tiếp, logic       |
| **UI/UX Designer**  | Thiết kế mockup         | Figma, Design          |
| **Frontend Dev**    | Code giao diện          | React, CSS             |
| **Backend Dev**     | Code API                | Node.js, Databases     |
| **QA Tester**       | Test lỗi                | Testing, Documentation |
| **DevOps**          | Deploy, infrastructure  | Docker, AWS, Vercel    |

> **Trong dự án này**: 1 người có thể làm tất cả (Full-stack)

### 💰 Chi Phí Ước Tính

| Item          | Chi Phí                | Ghi Chú                     |
| ------------- | ---------------------- | --------------------------- |
| **Server**    | Free - $50/tháng       | Vercel free tier, hoặc AWS  |
| **Database**  | Free - $20/tháng       | Firebase free, hoặc MongoDB |
| **Domain**    | $10-15/năm             | Optional                    |
| **Công nhân** | Tùy vào giá địa phương | 2-4 tuần, 1-2 dev           |

---

## ❓ Câu Hỏi Thường Gặp

### Q1: Tôi không biết code, tôi có thể tạo dự án được không?

**A:** Có! Bạn có thể:

- ✅ Chuẩn bị dữ liệu (PDF, refs.json)
- ✅ Thiết kế giao diện (Figma, Wireframe)
- ✅ Prompt AI để code
- ✅ Test ứng dụng

Bạn không cần viết code, nhưng cần **communication skills** tốt.

---

### Q2: Dự án này mất bao lâu để tạo?

**A:** Tùy vào kinh nghiệm:

- **Developer có kinh nghiệm**: 1-2 tuần
- **Developer mới**: 3-4 tuần
- **Sử dụng AI (Copilot/ChatGPT)**: 1 tuần

---

### Q3: Làm sao để thêm tài liệu mới?

**A:** Rất đơn giản:

1. Tạo folder: `public/output_sections/1A-NEW_Tên/`
2. Copy PDF file vào
3. Tạo file `refs.json` với danh sách references
4. Reload ứng dụng → Tài liệu mới xuất hiện tự động

**Ví dụ**:

```
public/output_sections/1A-NEW_Tài_liệu_mới/
├── 1A-NEW_Tài_liệu_mới.pdf
└── refs.json
   ["1A-51", "1A-55"]
```

---

### Q4: Làm sao để thay đổi giao diện?

**A:** Chỉnh sửa các file:

- **Màu sắc**: `tailwind.config.ts`
- **Layout**: `src/components/admin/DTCViewer.tsx`
- **CSS**: Chỉnh `className` trong components
- **Icon**: Chọn từ [lucide-react.com](https://lucide-react.com)

---

### Q5: Dự án này có thể scale được không (chạy với nhiều người)?

**A:** Có, nhưng cần optimize:

```
Frontend Hiện Tại (1 server Vite)
├─ OK cho: 10-100 users
└─ Problem: Server gặp vấn đề nếu quá tải

Để Scale:
├─ Dùng CDN (Cloudflare, Akamai)
├─ Dùng Database thực (MongoDB, PostgreSQL)
├─ Implement caching (Redis)
├─ Load balancing (Nginx, AWS ALB)
└─ Monitoring (DataDog, New Relic)
```

---

### Q6: Tôi muốn tạo dự án tương tự cho ngành khác?

**A:** Perfect! Bạn chỉ cần:

1. **Thay dữ liệu**:
   - Thay PDF & refs.json
   - Đổi tên folder

2. **Thay theme**:
   - Đổi màu (tailwind.config.ts)
   - Đổi logo & tên ứng dụng
   - Đổi text

3. **Thêm tính năng**:
   - Database nếu cần lưu dữ liệu
   - Authentication nếu cần login
   - Notifications nếu cần thông báo

**Ví dụ**:

- 🏥 Y học: Lưu danh sách bệnh + triệu chứng
- 🏫 Giáo dục: Lưu tài liệu học tập
- 🎯 Marketing: Lưu template, campaign

---

### Q7: Làm sao để backup dữ liệu?

**A:** 2 cách:

**Cách 1: Git (Khuyến Nghị)**

```bash
git add .
git commit -m "Backup ngày 14/5/2026"
git push origin main
```

**Cách 2: Thủ công**

```
Sao chép folder: public/output_sections/
Lưu vào External HDD hoặc Cloud (Google Drive, OneDrive)
```

---

### Q8: Làm sao để hợp tác nhóm?

**A:** Sử dụng Git + GitHub:

```
1. Tạo repository trên GitHub
2. Mỗi người clone về
3. Mỗi người làm branch riêng
4. Khi xong → Pull Request
5. Review → Merge vào main
```

**Ví dụ**:

```bash
git checkout -b feature/add-sensor-viewer
# ... làm việc ...
git push origin feature/add-sensor-viewer
# Tạo PR trên GitHub → Review → Merge
```

---

### Q9: Ứng dụng chạy offline được không?

**A:** Hiện tại: **Không**, vì cần backend.

Để chạy offline, bạn cần:

1. Build ứng dụng: `npm run build`
2. Copy toàn bộ `dist/` folder
3. Mở file `dist/index.html` (nhưng mất features API)

---

### Q10: Chi phí để deploy lên internet bao nhiêu?

**A:** Tùy tuỳ:

| Platform         | Chi Phí                 | Nhận Xét                        |
| ---------------- | ----------------------- | ------------------------------- |
| **Vercel**       | Free                    | Tốt cho học tập, small projects |
| **Netlify**      | Free - $20/tháng        | Tương tự Vercel                 |
| **AWS**          | Free tier - $100+/tháng | Flexible, mạnh                  |
| **DigitalOcean** | $4-30/tháng             | Rẻ, dễ dùng                     |
| **Heroku**       | $7-50+/tháng            | Simple, nhưng đắt               |

**Khuyến Nghị**: Bắt đầu với **Vercel** (free + tự động deploy)

---

## 📚 Tài Liệu Tham Khảo

### 📖 Để Học Thêm

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **TailwindCSS**: https://tailwindcss.com/
- **Express.js**: https://expressjs.com/
- **Node.js**: https://nodejs.org/

### 🎓 Khóa Học Online

- **freeCodeCamp** - Free, YouTube
- **Udemy** - Trả phí, giá rẻ
- **Coursera** - Miễn phí + Có chứng chỉ
- **React Official Docs** - Best resource

### 🤖 AI Tools

- **GitHub Copilot** - Tích hợp VS Code
- **ChatGPT / Claude** - General AI assistant
- **Cursor** - AI-powered IDE

---

## 🎯 Kết Luận

### 📋 Điều Cần Nhớ

1. ✅ **Công nghệ không phải là magic** - Nó là tools để giải quyết problem
2. ✅ **Bắt đầu từ nhỏ** - Không cần hoàn hảo ban đầu
3. ✅ **Learn by doing** - Thực hành lướt hơn lý thuyết
4. ✅ **Community support** - Có nhiều người giúp online
5. ✅ **AI assists** - ChatGPT/Copilot là bạn của bạn

### 🚀 Next Steps

1. **Chạy dự án này** → Hiểu cách hoạt động
2. **Thay đổi nhỏ** → Đổi màu, text
3. **Thêm tính năng** → Search, filter
4. **Tạo dự án mới** → Áp dụng kiến thức

### 💪 Lời Khuyên

> **"Không ai sinh ra đã biết code. Ai cũng bắt đầu từ 0. Chìa khóa là kiên trì và học hỏi."**

---

**Chúc bạn xây dựng dự án thành công! 🚀**

_Tài liệu này được viết cho người mới, vì vậy nếu có gì khó hiểu, hãy hỏi AI hoặc Google search. Mọi câu hỏi đều hợp lệ!_
