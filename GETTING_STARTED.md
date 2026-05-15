# Hướng dẫn cho người mới (Onboarding)

Mục tiêu: Giúp lập trình viên mới nhanh nắm được công nghệ, quy trình phát triển và cách thiết lập dự án trên máy cá nhân.

1. Tổng quan dự án

- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- Server dev nhẹ: `server.cjs` (Express) để cung cấp API hoặc phục vụ tĩnh khi cần
- Build và dev server: `vite`
- Test runner: `vitest`

2. Công nghệ chính

- Node.js (sử dụng Node 18+ khuyến nghị)
- npm
- TypeScript
- Vite, TailwindCSS, React

3. Chuẩn bị môi trường (Windows)

- Cài đặt Node.js (18.x LTS hoặc mới hơn): https://nodejs.org/
- Git: https://git-scm.com/

4. Clone & chạy dự án

```powershell
git clone <repo-url>
cd auto-docs-scribe
npm install
# Chạy đồng thời Vite và server dev
npm run dev
```

Các script hữu ích (xem `package.json`):

- `npm run dev` — chạy đồng thời `vite` và `node server.cjs`
- `npm run dev:vite` — chỉ chạy Vite
- `npm run dev:server` — chỉ chạy server.cjs
- `npm run build` — build cho production
- `npm run preview` — preview build tĩnh
- `npm run lint` — chạy ESLint trên mã nguồn
- `npm run test` — chạy Vitest

5. Quy trình phát triển (gợi ý)

- Tạo branch theo tính năng: `git checkout -b feat/your-feature`
- Viết code, chạy `npm run dev` để kiểm tra giao diện
- Chạy lint: `npm run lint` và test: `npm run test`
- Mở PR vào branch `main`/`develop` tùy quy ước

6. Cấu trúc mã nguồn nhanh

- `src/` — mã nguồn frontend (React + TS)
  - `src/components/` — UI components tái sử dụng
  - `src/pages/` — views/pages
  - `src/data/` — dữ liệu tĩnh, fixtures
  - `src/hooks/`, `src/lib/` — helpers và hooks
- `public/` — tài nguyên tĩnh (hình ảnh, output xuất sẵn)
  - `public/output_sections/` — các tài liệu xuất sẵn dùng để phục vụ tĩnh
- `output_sections/` — bản xuất nội bộ (kết quả sinh tự động)

7. Cách thêm một output/document mới

- Tạo thư mục mới trong `output_sections/` hoặc `public/output_sections/` theo cấu trúc đã có.
- Mỗi mục con chứa JSON, hình ảnh và tài liệu cần thiết.

8. Tự động hoá & scripts quan trọng

- `check-dtc.cjs` — script kiểm tra/tiền xử lý (sử dụng `npm run check` để chạy)

9. Thông tin liên hệ & bước tiếp theo

- Nếu bạn muốn tôi mở rộng phần nào (ví dụ: quy tắc commit, hướng dẫn chi tiết cho `src/components` hoặc cách xuất tài liệu), nói rõ phần cần mở rộng.

---

Ghi chú: Tài liệu này là bản tóm tắt nhanh. Tôi có thể mở rộng thành `CONTRIBUTING.md` với quy tắc code style, branching, PR template, và checklist review nếu bạn muốn.
