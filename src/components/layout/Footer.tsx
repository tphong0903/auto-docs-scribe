import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20 py-12 px-4 lg:px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* University Information */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
              Trường Đại Học
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">
                Đại học Bách Khoa TP.HCM
              </p>
              <p>Khoa Kỹ thuật Giao thông</p>
              <p>Bộ môn Kỹ thuật Ô tô · Máy động lực</p>
            </div>
          </div>

          {/* Students Information */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
              Sinh Viên Thực Hiện
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-medium text-foreground">
                  Phan Võ Trường Vũ
                </span>{" "}
                · MSSV 2214005
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Đinh Tiến Đức
                </span>{" "}
                · MSSV 2210784
              </p>
              <p className="pt-1">
                <span className="font-medium text-foreground">GVHD:</span>{" "}
                Nguyễn Đình Hùng
              </p>
            </div>
          </div>

          {/* Academic Year & Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
              Năm Học
            </h3>
            <p className="text-sm font-medium text-foreground mb-4">
              2025 – 2026
            </p>
            <nav className="flex gap-3 text-sm text-muted-foreground justify-center md:justify-start">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground/50">·</span>
              <Link
                to="/category/all"
                className="hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <span className="text-muted-foreground/50">·</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">
                Admin
              </span>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 AutoDocs Scribe · Internal Use Only
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Đề tài: Tự động tạo tài liệu kỹ thuật từ dữ liệu cảm biến
          </p>
        </div>
      </div>
    </footer>
  );
}
