# Mô tả cấu trúc thư mục

Tài liệu này liệt kê mục đích các thư mục và file chính trong dự án.

- **public/**: Tài nguyên tĩnh hiển thị cho ứng dụng (hình ảnh, robots.txt, v.v.).
  - **public/output_sections/**: Các đầu ra tài liệu đã được sinh, tổ chức theo chương/mục.
  - **public/dtc_image/**, **public/image_sensor/**: Hình ảnh tham chiếu cho hướng dẫn và dữ liệu chẩn đoán.

- **src/**: Mã nguồn ứng dụng frontend (React + Vite/TypeScript).
  - **src/components/**: Thành phần giao diện tái sử dụng.
  - **src/pages/**: Các trang (views) chính của ứng dụng.
  - **src/data/**: Dữ liệu tĩnh, mẫu hoặc fixtures dùng trong app.
  - **src/hooks/**: Custom React hooks.
  - **src/lib/**: Hàm trợ giúp, logic chung, utilities.
  - **src/test/**: Các bài kiểm thử đơn vị hoặc file test mẫu.

- **output_sections/**: Phiên bản xuất tài liệu (kết quả sinh tự động). Mỗi thư mục con là một mục/tập tài liệu.

- Root files quan trọng:
  - `package.json`: Quản lý phụ thuộc và script npm.
  - `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`: Cấu hình dev/build/TypeScript.
  - `server.ts`, `server.cjs`: Mã backend hoặc server dev (nếu có).
  - `README.md`, `QUICKSTART.md`, `SETUP-GUIDE.md`: Hướng dẫn sử dụng và cài đặt dự án.

- Cấu trúc bổ sung:
  - `components.json`, `dtc-data.json`: Dữ liệu cấu hình/danh mục dùng để sinh tài liệu.
  - `public/output_sections/` vs `output_sections/`: `public/output_sections/` có thể là bản xuất dành cho phục vụ tĩnh; `output_sections/` là kho lưu trữ nội bộ kết quả sinh.

Ghi chú: Nếu bạn muốn tôi mở rộng mô tả chi tiết cho từng thư mục con (ví dụ `src/components` hoặc một thư mục trong `output_sections` cụ thể), hãy chỉ ra các đường dẫn bạn muốn chi tiết hoá.
