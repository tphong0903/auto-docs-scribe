import { Wrench } from "lucide-react";

export const LandingFooter = () => {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-teal to-teal-light">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">
                TORQUE<span className="text-gradient">X</span>
              </p>
              <p className="text-xs text-foreground/50 font-mono">High-Performance Engineering</p>
            </div>
          </div>

          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} TorqueX Engines. Built for performance.
          </p>

          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-teal-light transition-colors">Liên hệ</a>
            <a href="#" className="hover:text-teal-light transition-colors">Bảo hành</a>
            <a href="#" className="hover:text-teal-light transition-colors">Tài liệu</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
