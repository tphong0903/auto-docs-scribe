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

const diagrams = [
  {
    name: "Rung giật động cơ",
    url: "https://www.canva.com/design/DAHHNrdJRs0/L0Zucq5O3Nwzy8tlUmVNWA/view?embed",
  },
  {
    name: "Động cơ quá nhiệt",
    url: "https://www.canva.com/design/DAHHN5GL54Q/oJhB1mCwfihmW4VjCwA5qg/view?embed",
  },
  {
    name: "Khói đen, hôi xăng",
    url: "https://www.canva.com/design/DAHHNypNvnk/7H6SfcboER8wUQPMYUxbLA/view?embed",
  },
  {
    name: "Khó khởi động",
    url: "https://www.canva.com/design/DAHHN6JVuXI/u3CjgSYdHISXNNMQeegvTg/view?embed",
  },
  {
    name: "Cầm chừng kém/ mất cầm chừng",
    url: "https://www.canva.com/design/DAHHNyuPqCw/8uieCILjE-zozFKV42nfSw/view?embed",
  },
  {
    name: "Mất công suất",
    url: "https://www.canva.com/design/DAHHN3DBZZI/ShHQ0Gvosb3I9HJsLEDvag/view?embed",
  },
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goToDiagram = (diagram) => {
    navigate(
      `/diagram?src=${encodeURIComponent(diagram.url)}&name=${encodeURIComponent(diagram.name)}`,
    );
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-background border-b border-transparent py-4",
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-teal to-teal-light">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            TORQUE<span className="text-gradient">X</span>
          </span>
        </button>

        {/* Desktop menu */}
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

          <div className="relative group">
            <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-teal-light">
              Sơ đồ
            </button>

            <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg border rounded-md min-w-[220px] z-50">
              {diagrams.map((d, i) => (
                <button
                  key={i}
                  onClick={() => goToDiagram(d)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => navigate("/dtc-explorer")}
            className="ml-4 bg-gradient-to-r from-teal to-teal-light hover:opacity-90 text-primary-foreground"
          >
            DTC Explorer
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b shadow-lg mt-2 py-4 absolute w-full left-0">
          <div className="container flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="px-4 py-3 text-left hover:bg-secondary rounded-md"
              >
                {l.label}
              </button>
            ))}

            <div className="border-t pt-2">
              <p className="px-4 text-sm text-muted-foreground mb-1">Sơ đồ</p>
              {diagrams.map((d, i) => (
                <button
                  key={i}
                  onClick={() => goToDiagram(d.url)}
                  className="px-4 py-2 text-left w-full hover:bg-secondary rounded-md"
                >
                  {d.name}
                </button>
              ))}
            </div>

            <div className="px-4 mt-2 pt-2 border-t">
              <Button
                onClick={() => {
                  navigate("/dtc-explorer");
                  setOpen(false);
                }}
                className="w-full bg-gradient-to-r from-teal to-teal-light text-primary-foreground"
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
