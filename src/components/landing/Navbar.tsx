import { useEffect, useState } from "react";
import { Menu, X, Wrench, Cpu, Activity, Bug } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
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
          <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            TORQUE
            <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
              X
            </span>
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="group relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-teal-500 transition"
            >
              {l.label}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
            </button>
          ))}

          <div className="relative group font-semibold">
            <button className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-teal-500 transition font-semibold">
              Sơ đồ
            </button>

            <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-slate-900 shadow-xl border rounded-xl min-w-[240px] z-50 p-2">
              {diagrams.map((d, i) => (
                <button
                  key={i}
                  onClick={() => goToDiagram(d)}
                  className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center ml-3 gap-2 ">
            <Button
              onClick={() => navigate("/dtc-explorer")}
              className=" font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Bug className="w-4 h-4" />
              DTC
            </Button>

            <Button
              onClick={() => navigate("/sensor-explorer")}
              className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Cpu className="w-4 h-4" />
              Sensor
            </Button>
          </div>
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
        <div className="container flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-4 py-3 text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {l.label}
            </button>
          ))}

          {/* Divider */}
          <div className="border-t my-2" />

          <p className="px-4 text-xs text-muted-foreground uppercase tracking-wide">
            Sơ đồ
          </p>

          {diagrams.map((d, i) => (
            <button
              key={i}
              onClick={() => goToDiagram(d)}
              className="px-4 py-2 text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {d.name}
            </button>
          ))}

          {/* Actions */}
          <div className="mt-3 px-4 space-y-2">
            <Button
              onClick={() => {
                navigate("/dtc-explorer");
                setOpen(false);
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
            >
              <Bug className="w-4 h-4 mr-2" />
              DTC
            </Button>

            <Button
              onClick={() => {
                navigate("/sensor-explorer");
                setOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Sensor
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
