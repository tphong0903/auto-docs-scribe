import { useEffect, useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const links = [
  { id: "hero", label: "Trang chủ" },
  { id: "specs", label: "Thông số" },
  { id: "tech", label: "Công nghệ" },
  { id: "gallery", label: "Thư viện" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // FIX: Bỏ bg-transparent, dùng nền solid kết hợp kính mờ để luôn dễ đọc
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-background border-b border-transparent py-4",
      )}
    >
      <nav className="container flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-teal to-teal-light glow-primary">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            TORQUE<span className="text-gradient">X</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-teal-light transition-colors relative group"
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-teal-light transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
            </button>
          ))}
          <Button
            onClick={() => navigate("/dtc-explorer")}
            className="ml-4 bg-gradient-to-r from-teal to-teal-light hover:opacity-90 text-primary-foreground"
          >
            DTC Explorer
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        // FIX: Đổi class "glass" thành nền màu đồng nhất (bg-background) để mobile menu không bị nhiễu
        <div className="md:hidden bg-background border-b shadow-lg mt-2 py-4 animate-fade-in absolute w-full left-0">
          <div className="container flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-teal-light hover:bg-secondary rounded-md transition-colors"
              >
                {l.label}
              </button>
            ))}
            <div className="px-4 mt-2 pt-2 border-t border-border">
              <Button
                onClick={() => {
                  navigate("/dtc-explorer");
                  setOpen(false);
                }}
                className="w-full bg-gradient-to-r from-teal to-teal-light hover:opacity-90 text-primary-foreground"
              >
                DTC Explorer
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
