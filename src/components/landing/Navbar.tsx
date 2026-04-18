import { useEffect, useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { id: "hero", label: "Trang chủ" },
  { id: "specs", label: "Thông số" },
  { id: "tech", label: "Công nghệ" },
  { id: "gallery", label: "Thư viện" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-2" : "bg-transparent py-5",
      )}
    >
      <nav className="container flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
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
            onClick={() => scrollTo("specs")}
            className="ml-4 bg-gradient-to-r from-teal to-teal-light hover:opacity-90 text-primary-foreground"
          >
            Khám phá ngay
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mt-2 py-4 animate-fade-in">
          <div className="container flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="px-4 py-3 text-left text-foreground/80 hover:text-teal-light hover:bg-secondary rounded-md transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
