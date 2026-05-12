# 📚 Auto Docs Scribe - Hệ Thống Tra Cứu Tài Liệu Kỹ Thuật

> Ứng dụng web React hiện đại để tra cứu tài liệu sửa chữa ô tô (DTC - Diagnostic Trouble Code) với giao diện trực quan 3 phần, xem PDF, tìm kiếm nâng cao và điều hướng thông minh.

---

## 📋 Mục Lục

- [🛠️ Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [📁 Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [🎯 Ý Nghĩa Các Folder](#-ý-nghĩa-các-folder)
- [🚀 Hướng Dẫn Khởi Động](#-hướng-dẫn-khởi-động)
- [⚙️ Cấu Hình & Tùy Chỉnh](#️-cấu-hình--tùy-chỉnh)
- [🔌 API Endpoints](#-api-endpoints)
- [🎨 Components Chính](#-components-chính)
- [📊 Tính Năng & Chức Năng](#-tính-năng--chức-năng)
- [🧪 Testing & Build](#-testing--build)
- [💡 Thông Tin Bổ Sung](#-thông-tin-bổ-sung)

---

## 🛠️ Công Nghệ Sử Dụng

### Frontend Stack

| Công Nghệ           | Phiên Bản | Mục Đích                |
| ------------------- | --------- | ----------------------- |
| **React**           | 18.3.1    | Framework UI chính      |
| **TypeScript**      | Latest    | Type-safe development   |
| **Vite**            | Latest    | Build tool & dev server |
| **TailwindCSS**     | 3.4.0+    | Styling utilities       |
| **shadcn/ui**       | Latest    | Pre-built UI components |
| **React Router**    | 6.30.1    | Client-side routing     |
| **React Hook Form** | 7.61.1    | Form management         |
| **TanStack Query**  | 5.83.0    | Data fetching & caching |
| **react-pdf**       | 10.4.1    | PDF viewer component    |
| **react-dom**       | 18.3.1    | DOM rendering           |
| **Framer Motion**   | 12.38.0   | Smooth animations       |
| **Lucide React**    | 0.462.0   | Icon library            |
| **Sonner**          | 1.7.4     | Toast notifications     |

### Backend Stack

| Công Nghệ      | Phiên Bản | Mục Đích               |
| -------------- | --------- | ---------------------- |
| **Express.js** | 4.18.2    | Web server framework   |
| **Node.js**    | 16+       | Runtime environment    |
| **TypeScript** | Latest    | Type-safe backend code |
| **CORS**       | 2.8.5     | Cross-origin requests  |

### Development Tools

| Công Nghệ           | Mục Đích                             |
| ------------------- | ------------------------------------ |
| **ESLint**          | Code linting & analysis              |
| **Vitest**          | Unit testing                         |
| **Testing Library** | Component testing                    |
| **Concurrently**    | Run multiple processes               |
| **Bun**             | Package manager (alternative to npm) |

### UI Libraries & Components

- **@radix-ui** - Headless UI components (dialogs, menus, tabs, etc.)
- **@hookform/resolvers** - Form validation resolvers
- **zod** - TypeScript-first schema validation
- **class-variance-authority** - CSS class composition
- **tailwind-merge** - Merge tailwind classes efficiently
- **react-resizable-panels** - Resizable panel layout
- **date-fns** - Date manipulation
- **recharts** - Chart visualization
- **next-themes** - Dark mode management

---

## 📁 Cấu Trúc Dự Án

```
auto-docs-scribe/
│
├── 📄 Tệp Cấu Hình
│   ├── package.json              # Dependencies & scripts
│   ├── vite.config.ts            # Vite configuration
│   ├── vitest.config.ts          # Testing configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tsconfig.app.json         # App-specific TS config
│   ├── tsconfig.node.json        # Node-specific TS config
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── eslint.config.js          # ESLint configuration
│   └── vercel.json               # Vercel deployment config
│
├── 📚 Tài Liệu
│   ├── README.md                 # Main README
│   ├── COMPREHENSIVE_README.md   # Tài liệu chi tiết này
│   ├── DTC_VIEWER_README.md      # DTC Viewer documentation
│   ├── IMPLEMENTATION_SUMMARY.md # Implementation notes
│   ├── OPERATIONAL_GUIDE.md      # User guide
│   ├── SETUP-GUIDE.md            # Setup instructions
│   ├── QUICKSTART.md             # Quick start guide
│   └── START_HERE.md             # Getting started
│
├── 🚀 Scripts & Automation
│   ├── SETUP.bat                 # Windows setup script
│   ├── SETUP.sh                  # Linux/Mac setup script
│   ├── server.cjs                # Compiled server (Node.js)
│   ├── server.ts                 # Express API server
│   ├── check-dtc.cjs             # DTC validation script
│   ├── test-api-logic.cjs        # API testing utility
│   └── test-path.cjs             # Path testing utility
│
├── 📦 Dependencies Lock
│   └── bun.lockb                 # Bun lock file
│
├── 🎨 Frontend - src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Main App component
│   ├── App.css                   # Global app styles
│   ├── index.css                 # Global styles
│   ├── vite-env.d.ts            # Vite TypeScript definitions
│   │
│   ├── components/               # React components
│   │   ├── admin/                # Admin/Viewer components
│   │   │   ├── Viewer.tsx        # 🔑 Entry point for DTC Viewer
│   │   │   ├── DTCViewer.tsx     # 🔑 Main DTC viewer component
│   │   │   ├── DTCSidebar.tsx    # DTC list sidebar with search
│   │   │   ├── DTCPDFViewer.tsx  # PDF viewer with pagination
│   │   │   ├── DTCReferencePanel.tsx    # Reference links panel
│   │   │   ├── DTCTroubleshootingWizard.tsx # Wizard for troubleshooting
│   │   │   ├── SensorViewer.tsx  # Sensor viewer component
│   │   │   ├── SensorPDFViewer.tsx      # Sensor PDF viewer
│   │   │   ├── SensorSidebar.tsx        # Sensor sidebar
│   │   │   └── SensorDetailView.tsx     # Sensor detail view
│   │   │
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ... (30+ UI components)
│   │   │
│   │   ├── layout/               # Layout components
│   │   ├── landing/              # Landing page components
│   │   ├── canva/                # Canvas/diagram components
│   │   ├── Breadcrumbs.tsx       # Navigation breadcrumbs
│   │   ├── NavLink.tsx           # Navigation links
│   │   ├── TableOfContents.tsx   # TOC component
│   │   └── Youtube.tsx           # YouTube integration
│   │
│   ├── pages/                    # Page components
│   │   ├── Landing.tsx           # Landing/home page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── hooks/                    # Custom React hooks
│   │
│   ├── lib/                      # Utility functions & helpers
│   │
│   ├── data/                     # Static data
│   │   └── data.tsx
│   │
│   ├── assets/                   # Static assets (images, etc)
│   │
│   └── test/                     # Test files
│
├── 📊 Public Files - public/
│   ├── robots.txt                # SEO robots file
│   │
│   ├── image_sensor/             # Sensor images
│   │   ├── 1/, 2/, 3/, 7/, 8/, 9/, 10/  # Sensor image folders
│   │
│   └── output_sections/          # 🔑 DTC documentation data
│       ├── 00-1_Bien_phap_phong_ngua_chung/
│       ├── 00-1_Phong_ngua/
│       ├── 1A-51_DTC_P0010_P2088/
│       │   ├── 1A-51_DTC_P0010_P2088.pdf
│       │   └── refs.json         # Reference links
│       ├── 1A-55_DTC_P0016/
│       └── ... (500+ DTC folders)
│
├── 📄 Data Files
│   ├── dtc-data.json             # DTC database
│   ├── components.json           # Component library config
│   └── check-dtc.cjs             # DTC validation
│
└── 🔧 Configuration Files
    └── Other config files
```

---

## 🎯 Ý Nghĩa Các Folder

### 🔑 Folder Quan Trọng

#### `src/components/admin/`

**Mục đích**: Chứa tất cả các component liên quan đến giao diện xem và quản lý DTC/Sensor

**Components chính**:

- **DTCViewer.tsx** - Component chính quản lý state, fetch data từ API
- **DTCSidebar.tsx** - Danh sách DTC với tìm kiếm, scroll area
- **DTCPDFViewer.tsx** - Xem file PDF với điều hướng trang
- **DTCReferencePanel.tsx** - Hiển thị các tài liệu tham khảo liên quan
- **SensorViewer.tsx** - Tương tự nhưng cho dữ liệu cảm biến

#### `src/components/ui/`

**Mục đích**: Thư viện các component UI có sẵn từ shadcn/ui

**Chứa**: Button, Input, Dialog, Tabs, Dropdown, Tooltip, Accordion, v.v.

#### `public/output_sections/`

**Mục đích**: 🔑 **Database chính của ứng dụng** - Lưu trữ tất cả tài liệu DTC

**Cấu trúc**:

```
output_sections/
├── 1A-51_DTC_P0010_P2088/           ← Tên folder = DTC code
│   ├── 1A-51_DTC_P0010_P2088.pdf    ← File PDF tài liệu
│   └── refs.json                    ← References (["1A-12", "1A-41"])
├── 1A-55_DTC_P0016/
│   ├── 1A-55_DTC_P0016.pdf
│   └── refs.json
└── ... (500+ folders)
```

#### `src/pages/`

**Mục đích**: Route pages (Landing, NotFound, etc.)

#### `src/hooks/`

**Mục đích**: Custom React hooks (useWindowSize, useFetch, v.v.)

#### `src/lib/`

**Mục đích**: Utility functions (cn() for class merging, formatters, validators, etc.)

#### `src/data/`

**Mục đích**: Static data files và constants

---

## 🚀 Hướng Dẫn Khởi Động

### 📋 Yêu Cầu Hệ Thống

- **Node.js**: v16 hoặc cao hơn
- **npm** hoặc **bun** package manager
- **Git** (optional, nếu clone từ repository)
- **Trình duyệt web**: Modern browser (Chrome, Firefox, Safari, Edge)

### ✅ Bước 1: Clone & Chuẩn Bị

```bash
# Windows
cd d:\TAI_LIEU_DAI_HOC\Code\PhanVu\auto-docs-scribe

# macOS/Linux
cd ~/path/to/auto-docs-scribe
```

### 📦 Bước 2: Cài Đặt Dependencies

```bash
# Option 1: Sử dụng npm
npm install

# Option 2: Sử dụng bun
bun install

# Option 3: Nếu gặp lỗi peer dependencies
npm install --legacy-peer-deps
```

### 🎯 Bước 3: Chạy Ứng Dụng

#### **Cách 1: Chạy Cùng Lúc (Recommended)**

```bash
npm run dev
```

Lệnh này sẽ chạy đồng thời:

- **Vite dev server** trên `http://localhost:8080`
- **Express API server** trên `http://localhost:3001`

#### **Cách 2: Chạy Riêng Biệt (Trong 2 terminal)**

**Terminal 1 - Frontend:**

```bash
npm run dev:vite
# Hoặc: vite
```

**Terminal 2 - Backend:**

```bash
npm run dev:server
# Hoặc: node server.cjs
```

### 🌐 Bước 4: Truy Cập Ứng Dụng

1. Mở trình duyệt
2. Truy cập: **`http://localhost:8080`**
3. Bạn sẽ thấy landing page với các tuỳ chọn:
   - 📖 DTC Explorer - Tra cứu tài liệu sửa chữa
   - 📡 Sensor Explorer - Thông tin cảm biến
   - 🎨 Diagram - Canvas vẽ sơ đồ
   - 🎬 YouTube - Tích hợp YouTube

### ✨ Bước 5: Sử Dụng DTC Viewer

1. Click "DTC Explorer" từ landing page
2. Danh sách DTC sẽ hiển thị ở sidebar trái
3. Tìm kiếm bằng mã DTC (1A-51, 1A-55, v.v.)
4. Click item để xem PDF
5. Panel bên phải hiển thị tài liệu tham khảo liên quan
6. Click reference tags để jump đến DTC khác

---

## ⚙️ Cấu Hình & Tùy Chỉnh

### 🔧 File Cấu Hình Chính

#### `vite.config.ts`

```typescript
// Dev server
server: {
  port: 8080,           // Frontend port
  hmr: { overlay: false }
}

// API Proxy
proxy: {
  "/api": {
    target: "http://localhost:3001",  // API server
    changeOrigin: true
  }
}
```

#### `tailwind.config.ts`

```typescript
// Theme configuration
// Colors, spacing, typography
```

#### `tsconfig.json`

```typescript
// Path aliases
paths: {
  "@/*": ["./src/*"]  // Import từ @/components thay vì ../../../
}
```

### 🔄 Script Commands

| Command              | Mục Đích                      |
| -------------------- | ----------------------------- |
| `npm run dev`        | Chạy dev mode (Vite + Server) |
| `npm run dev:vite`   | Chạy chỉ Vite dev server      |
| `npm run dev:server` | Chạy chỉ Express server       |
| `npm run build`      | Build production              |
| `npm run build:dev`  | Build development mode        |
| `npm run preview`    | Preview production build      |
| `npm run lint`       | ESLint code checking          |
| `npm run test`       | Run Vitest once               |
| `npm run test:watch` | Run Vitest in watch mode      |
| `npm run check`      | Validate DTC data             |

### 🌍 Environment Variables

Tạo file `.env.local` (nếu cần):

```env
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=Auto Docs Scribe
```

---

## 🔌 API Endpoints

### Backend Server: `http://localhost:3001`

#### 1️⃣ GET `/api/dtc-list`

**Mô tả**: Lấy danh sách tất cả DTC

**Query Parameters**: Không có

**Response (Success)**:

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
    {
      "code": "1A-55",
      "name": "DTC_P0016",
      "folder": "1A-55_DTC_P0016",
      "displayName": "1A-55 - DTC_P0016"
    }
  ]
}
```

**Response (Error)**:

```json
{
  "success": false,
  "error": "Lỗi khi đọc danh sách thư mục"
}
```

#### 2️⃣ GET `/api/dtc-refs/:folder`

**Mô tả**: Lấy danh sách references của một DTC cụ thể

**Path Parameters**:

- `:folder` - Tên folder DTC (e.g., `1A-51_DTC_P0010_P2088`)

**Response (Success)**:

```json
{
  "success": true,
  "data": ["1A-12_DTC_P0001", "1A-41_DTC_P0020"]
}
```

**Response (No refs)**:

```json
{
  "success": true,
  "data": []
}
```

#### 3️⃣ GET `/api/dtc-find/:code`

**Mô tả**: Tìm folder bằng mã DTC

**Path Parameters**:

- `:code` - Mã DTC (e.g., `1A-51`)

**Response (Success)**:

```json
{
  "success": true,
  "data": {
    "folder": "1A-51_DTC_P0010_P2088"
  }
}
```

**Response (Not found)**:

```json
{
  "success": false,
  "error": "Không tìm thấy DTC"
}
```

### 📡 API Usage Example

```typescript
// Fetch DTC list
const response = await fetch("http://localhost:3001/api/dtc-list");
const { data } = await response.json();

// Get references
const refsResponse = await fetch(
  `http://localhost:3001/api/dtc-refs/${folder}`,
);
const { data: refs } = await refsResponse.json();

// Find by code
const findResponse = await fetch(`http://localhost:3001/api/dtc-find/1A-51`);
const { data: found } = await findResponse.json();
```

---

## 🎨 Components Chính

### 🔑 DTCViewer.tsx

**Chức năng chính**:

- Quản lý state toàn bộ ứng dụng (dtcList, selected, refs, loading, error)
- Fetch data từ API (`/api/dtc-list`, `/api/dtc-refs`)
- Xử lý tìm kiếm/filter DTC
- Error handling với toast notifications
- Layout 3 phần (Sidebar, PDF Viewer, Reference Panel)

**Props**: Không có (component đứng độc lập)

**State**:

```typescript
const [dtcList, setDtcList] = useState<DTC[]>([]);
const [selectedDTC, setSelectedDTC] = useState<DTC | null>(null);
const [refs, setRefs] = useState<string[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [searchQuery, setSearchQuery] = useState("");
```

### DTCSidebar.tsx

**Chức năng**:

- Hiển thị danh sách DTC trong ScrollArea
- Search/filter DTC
- Highlight selected item
- Click để select DTC

**Props**:

```typescript
interface Props {
  items: DTC[];
  selected: DTC | null;
  onSelect: (dtc: DTC) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}
```

### DTCPDFViewer.tsx

**Chức năng**:

- Render PDF từ `public/output_sections/{folder}/{file}.pdf`
- Page navigation (Previous, Next)
- Display current page / total pages
- Loading spinner
- Error state

**Props**:

```typescript
interface Props {
  folder: string;
  fileName: string;
}
```

### DTCReferencePanel.tsx

**Chức năng**:

- Hiển thị danh sách reference tags
- Clickable tags để navigate
- Hover effects
- Empty state handling

**Props**:

```typescript
interface Props {
  refs: string[];
  onRefClick: (refCode: string) => void;
  loading?: boolean;
}
```

---

## 📊 Tính Năng & Chức Năng

### ✅ Tính Năng Chính

| Tính Năng            | Mô Tả                                    | Status |
| -------------------- | ---------------------------------------- | ------ |
| **DTC Explorer**     | Danh sách 500+ tài liệu sửa chữa         | ✅     |
| **PDF Viewer**       | Xem PDF với pagination                   | ✅     |
| **Search/Filter**    | Tìm kiếm DTC theo mã/tên                 | ✅     |
| **References**       | Tài liệu tham khảo liên quan             | ✅     |
| **Smart Navigation** | Click reference → Jump đến DTC           | ✅     |
| **Sensor Viewer**    | Thông tin cảm biến (parallel feature)    | ✅     |
| **Responsive UI**    | Hoạt động tốt trên mobile/tablet/desktop | ✅     |
| **Dark Mode**        | Hỗ trợ dark theme                        | ✅     |
| **Error Handling**   | Toast notifications & error UI           | ✅     |
| **Performance**      | React Query caching & optimization       | ✅     |

### 🎨 UI/UX Features

- **Smooth Animations**: Framer Motion cho transitions
- **Accessibility**: ARIA labels, keyboard navigation
- **Toast Notifications**: Sonner for user feedback
- **Responsive Layout**: TailwindCSS responsive classes
- **Component Library**: 30+ shadcn/ui components

---

## 🧪 Testing & Build

### 🧪 Run Tests

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### 🔨 Build for Production

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### 📝 Linting

```bash
npm run lint
```

### ✔️ Check DTC Data

```bash
npm run check
```

---

## 💡 Thông Tin Bổ Sung

### 📂 Cấu Trúc Data

#### Folder Naming Convention

```
{CODE}_{NAME}_...

Examples:
- 1A-51_DTC_P0010_P2088
- 1A-55_DTC_P0016
- 0A-1_Thong_tin_chung
```

#### refs.json Format

```json
["1A-12_DTC_P0001", "1A-41_DTC_P0020", "1A-55_DTC_P0016"]
```

### 🔐 Security

- ✅ Input validation trên API
- ✅ CORS enabled only for localhost
- ✅ Directory traversal prevention (`..` validation)
- ✅ TypeScript type safety
- ✅ No sensitive data in frontend

### 📈 Performance

- ✅ React Query caching
- ✅ Code splitting (Vite)
- ✅ Lazy loading components
- ✅ Image optimization
- ✅ CSS optimization (TailwindCSS purging)

### 🚀 Deployment

#### Vercel (Recommended)

```bash
# Connect your GitHub repo
# Vercel auto-detects Vite config
# Deploy automatically on push
```

**vercel.json**:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

#### Docker (Alternative)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080 3001
CMD ["npm", "run", "dev"]
```

### 📚 Tài Liệu Thêm

- [START_HERE.md](START_HERE.md) - Hướng dẫn nhanh
- [QUICKSTART.md](QUICKSTART.md) - Quick start 30 giây
- [DTC_VIEWER_README.md](DTC_VIEWER_README.md) - Tài liệu kỹ thuật
- [OPERATIONAL_GUIDE.md](OPERATIONAL_GUIDE.md) - Hướng dẫn sử dụng
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Ghi chú phát triển

### 🆘 Troubleshooting

#### Problem: Port 8080 already in use

```bash
# Change port in vite.config.ts
# server.port = 3000
```

#### Problem: API server not responding

```bash
# Check if server is running
# Verify http://localhost:3001/api/dtc-list responds
# Check port 3001 in vite.config.ts proxy
```

#### Problem: PDF not loading

```bash
# Ensure PDF files exist in public/output_sections/{folder}/
# Check file names match exactly
# Verify refs.json is valid JSON
```

#### Problem: Dependencies conflicts

```bash
# Use legacy-peer-deps flag
npm install --legacy-peer-deps

# Or update all packages
npm update
```

### 📞 Support & Contribution

- 🐛 Bug reports: Check existing issues
- 💬 Questions: Open an issue
- 🔄 Pull requests: Welcome!

### 📄 License

MIT License - Free for personal & commercial use

---

## 🎯 Quick Reference

### Common Commands

```bash
# Setup
npm install --legacy-peer-deps

# Development
npm run dev                 # Run both frontend & backend
npm run dev:vite           # Frontend only
npm run dev:server         # Backend only

# Production
npm run build              # Build for production
npm run preview            # Preview production build

# Testing & Linting
npm run test               # Run tests
npm run lint               # Check code style
npm run check              # Validate DTC data

# Ports
Frontend:  http://localhost:8080
Backend:   http://localhost:3001
```

### Folder Navigation Map

```
📁 Want to modify UI?
   → src/components/

📁 Want to add features?
   → src/pages/ (new page)
   → src/hooks/ (new hook)
   → src/lib/ (utilities)

📁 Want to change API?
   → server.ts

📁 Want to add DTC data?
   → public/output_sections/

📁 Want to style?
   → src/App.css
   → tailwind.config.ts
```

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Maintainer**: Auto Docs Scribe Team

_Tài liệu này cung cấp thông tin toàn diện về dự án. Nếu có câu hỏi, hãy kiểm tra các tệp tài liệu khác hoặc mở issue._
