import { Menu, X, ChevronRight, FileText, FolderOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Toyota",
    children: [
      {
        title: "Engine Systems",
        children: [
          { title: "Diagnosing Misfires", href: "/docs/toyota-misfires" },
          { title: "Timing Chain Inspection", href: "/docs/toyota-timing" },
          { title: "VVT-i System Testing", href: "/docs/toyota-vvti" },
        ],
      },
      {
        title: "Fuel System",
        children: [
          { title: "Injector Testing", href: "/docs/toyota-injectors" },
          { title: "Fuel Pump Diagnostics", href: "/docs/toyota-fuel-pump" },
        ],
      },
    ],
  },
  {
    title: "Honda",
    children: [
      {
        title: "Engine Systems",
        children: [
          { title: "VTEC Diagnostics", href: "/docs/honda-vtec" },
          { title: "Ignition Coil Testing", href: "/docs/honda-ignition" },
        ],
      },
    ],
  },
  {
    title: "Ford",
    children: [
      {
        title: "EcoBoost",
        children: [
          { title: "Turbo System Check", href: "/docs/ford-turbo" },
          { title: "Intercooler Inspection", href: "/docs/ford-intercooler" },
        ],
      },
    ],
  },
  {
    title: "Common Trouble Codes",
    children: [
      { title: "P0300 - Random Misfire", href: "/docs/p0300" },
      { title: "P0171 - System Too Lean", href: "/docs/p0171" },
      { title: "P0420 - Catalyst Efficiency", href: "/docs/p0420" },
    ],
  },
];

function MobileNavTree({ items, depth = 0, onNavigate }: { items: NavItem[]; depth?: number; onNavigate: () => void }) {
  const location = useLocation();
  return (
    <ul className={cn("space-y-0.5", depth > 0 && "ml-3 border-l border-border pl-3")}>
      {items.map((item) => (
        <MobileNavItem key={item.title} item={item} depth={depth} currentPath={location.pathname} onNavigate={onNavigate} />
      ))}
    </ul>
  );
}

function MobileNavItem({ item, depth, currentPath, onNavigate }: { item: NavItem; depth: number; currentPath: string; onNavigate: () => void }) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === currentPath;
  const [open, setOpen] = useState(depth === 0);

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
        >
          <ChevronRight className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-90")} />
          <FolderOpen className="h-3.5 w-3.5 shrink-0 opacity-60" />
          <span>{item.title}</span>
        </button>
        {open && <MobileNavTree items={item.children!} depth={depth + 1} onNavigate={onNavigate} />}
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.href || "/"}
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted",
          isActive && "bg-muted text-primary font-medium"
        )}
      >
        <FileText className="h-3.5 w-3.5 shrink-0 opacity-60" />
        <span>{item.title}</span>
      </Link>
    </li>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-4">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Documentation
        </h2>
        <MobileNavTree items={navigation} onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
