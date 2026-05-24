import {
  GraduationCap,
  Users,
  Calendar,
  Wrench,
  BookOpen,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const LandingFooter = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-background via-background to-muted/30 pt-16 pb-8 px-4 lg:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Column 1: University Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div>
              <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-sm uppercase tracking-widest text-primary mb-4">
                <GraduationCap className="w-4 h-4" />
                Trường Đại Học
              </h3>

              {/* Thêm flex để logo và text nằm ngang hàng */}
              <div className="flex items-center justify-center md:justify-start gap-4 text-left">
                <img
                  src="/01_logobachkhoatoi.png"
                  alt="BK TP.HCM Logo"
                  className="w-16 h-16 object-contain drop-shadow-sm shrink-0 bg-white/10 p-1 rounded-lg ring-1 ring-border/50"
                />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground text-base">
                    Đại học Bách Khoa TP.HCM
                  </p>
                  <p>Khoa Kỹ thuật Giao thông</p>
                  <p>Bộ môn Kỹ thuật Ô tô · Máy động lực</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Students Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-sm uppercase tracking-widest text-primary mb-5">
              <Users className="w-4 h-4" />
              Nhóm Thực Hiện
            </h3>
            <div className="text-sm space-y-4 w-full">
              <div className="group flex flex-col space-y-1 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                <p className="font-semibold text-foreground">
                  Phan Võ Trường Vũ
                </p>
                <p className="text-muted-foreground text-xs font-mono bg-muted inline-block w-fit px-2 py-0.5 rounded">
                  MSSV: 2214005
                </p>
              </div>
              <div className="group flex flex-col space-y-1 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                <p className="font-semibold text-foreground">Đinh Tiến Đức</p>
                <p className="text-muted-foreground text-xs font-mono bg-muted inline-block w-fit px-2 py-0.5 rounded">
                  MSSV: 2210784
                </p>
              </div>
              <div className="pt-2 border-t border-border/50 px-3">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground mr-2">
                    GVHD:
                  </span>
                  ThS. Nguyễn Đình Hùng
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Academic Year & Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-sm uppercase tracking-widest text-primary mb-5">
              <Calendar className="w-4 h-4" />
              Năm Học
            </h3>
            <div className="mb-6">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Niên khóa: 2025 – 2026
              </span>
            </div>

            <nav className="flex flex-col gap-3 text-sm text-muted-foreground w-full">
              {/* <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Liên hệ hỗ trợ</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors group"
              >
                <ShieldCheck className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Chính sách bảo hành</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors group"
              >
                <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Tài liệu hướng dẫn</span>
              </a> */}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Project Title Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/30 text-sm font-medium text-foreground shadow-sm">
            <Wrench className="w-4 h-4 text-primary" />
            Đề tài: Tự động tạo tài liệu kỹ thuật từ dữ liệu cảm biến
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Khoa Kỹ thuật Giao thông - Đại học Bách
            Khoa TP.HCM. All rights reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
};
