# 🚀 DTC Viewer - Quick Start Guide

## What's Fixed

### 1. ✅ PDF Worker Loading

- **Issue**: PDF worker failed to load from CDN with dynamic import error + missing CSS styles
- **Fix**: Changed to use CDN worker matching react-pdf version + added required CSS imports
- **File**: `src/components/admin/DTCPDFViewer.tsx`
- **Status**: READY

### 2. ✅ Server Configuration (CommonJS)

- **Issue**: ES Module conflicts when running TypeScript with `ts-node-dev`
- **Fix**: Converted to CommonJS (`server.cjs`)
- **File**: `server.cjs`
- **Status**: READY

### 3. ✅ API Server Validation

- **Issue**: Empty DTC list was potentially due to path resolution + needed optimization
- **Fix**: Verified path resolution works correctly, added extensive logging + optimized API calls
- **Files**: `server.cjs` with enhanced debugging + metadata inclusion
- **Status**: VERIFIED - API returns 1,562 DTCs with full metadata and refs

### 4. ✅ Vite Proxy Configuration

- **Issue**: Frontend needs to access both API and PDF files from backend
- **Fix**: Added proxy for both `/api/*` and `/output_sections/*` routes
- **File**: `vite.config.ts`
- **Status**: READY

### 5. ✅ Both Dev Servers

- **Issue**: Need to run both Vite (frontend) and Express (backend) simultaneously
- **Fix**: Using `concurrently` to run both
- **Command**: `npm run dev`
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3001 (proxied through frontend)
- **Status**: READY

---

## 🎯 How to Run

### Step 1: Install Dependencies

```bash
npm install
```

Dependencies already listed in package.json:

- React 18 + TypeScript
- Vite (bundler)
- TailwindCSS (styling)
- shadcn/ui (components)
- react-pdf (PDF viewing)
- Express (API server)
- CORS enabled for cross-origin requests

### Step 2: Check Your Setup (Optional)

```bash
npm run check
```

This will verify:

- ✓ Folder structure is correct
- ✓ DTC directories exist (1,562 found)
- ✓ API server can start

### Step 3: Start the Application

```bash
npm run dev
```

This starts both:

- **Vite Dev Server** (port 8080) - React frontend with hot reload
- **Express API** (port 3001) - Serves DTC metadata and PDFs

### Step 4: Open in Browser

Navigate to: **http://localhost:8080**

---

## 📋 Features

### Sidebar (Left)

- Lists all 1,562 DTC codes from the database
- Search/filter functionality
- Click to select any DTC

### PDF Viewer (Center)

- Shows PDF documentation for selected DTC
- Displays **all pages** at once (no pagination)
- Scrollable view with proper page separation
- Zoom controls (if using full features)

### References Panel (Right)

- Displays clickable reference links
- **Smart navigation**: Auto-selects if 1 result, shows dialog if multiple results
- Links to related DTCs
- Automatically loads when DTC is selected

---

## 🔧 Available Scripts

| Command              | What it does                                  |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Start both frontend (8080) and backend (3001) |
| `npm run dev:vite`   | Start only Vite frontend                      |
| `npm run dev:server` | Start only Express API server                 |
| `npm run build`      | Build for production                          |
| `npm run check`      | Verify setup before running                   |

---

## 🐛 Troubleshooting

### PDF not loading?

→ Check browser console for errors. The PDF worker should load from `pdfjs-dist` package.
→ If you see "TextLayer styles not found" warning, the CSS imports are missing
→ Make sure both AnnotationLayer.css and TextLayer.css are imported

### Empty DTC list (sidebar blank)?

→ Make sure both servers are running (`npm run dev`)
→ Check terminal output for both `✓ DTC API Server is running!` and Vite startup
→ If needed, refresh the browser (Ctrl+R)

### Port conflicts?

- **Port 8080 in use**: Change in `vite.config.ts` → `server.port`
- **Port 3001 in use**: Change `PORT = 3001` in `server.cjs`

### CORS errors?

→ CORS is configured in server.cjs and Vite proxy handles cross-origin requests for both API and PDF files

---

## 📁 Project Structure

```
├── src/
│   ├── components/admin/
│   │   ├── DTCViewer.tsx          ← Main component
│   │   ├── DTCSidebar.tsx         ← DTC list & search
│   │   ├── DTCPDFViewer.tsx       ← PDF display
│   │   ├── DTCReferencePanel.tsx  ← References
│   │   └── Viewer.tsx             ← Entry point
│   └── ...
├── public/
│   └── output_sections/           ← 1,562 DTC directories
├── server.cjs                      ← Express API server
├── package.json                    ← Dependencies & scripts
├── vite.config.ts                 ← Frontend config
└── ...
```

---

## 💡 Quick Reference

**API Endpoints:**

- `GET /api/dtc-list` - Returns all DTC folders (containing "DTC" in name) with metadata + refs data
- `GET /api/search?q=keyword` - Search DTCs by code, name, or references
- `GET /api/dtc-find/:code` - Find folder by DTC code

**Frontend Points:**

- Main component coordinates everything
- Sidebar displays filtered list
- PDF viewer shows documentation
- **References panel with smart navigation** (auto-select or dialog for multiple results)

---

**Ready to go!** Run `npm run dev` and open http://localhost:8080 🎉
