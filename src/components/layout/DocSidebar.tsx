import { ChevronRight, FileText, FolderOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

function NavTree({ items, depth = 0 }: { items: NavItem[]; depth?: number }) {
  const location = useLocation();

  return (
    <ul className={cn("space-y-0.5", depth > 0 && "ml-3 border-l border-sidebar-border pl-3")}>
      {items.map((item) => (
        <NavItemComponent key={item.title} item={item} depth={depth} currentPath={location.pathname} />
      ))}
    </ul>
  );
}

function NavItemComponent({ item, depth, currentPath }: { item: NavItem; depth: number; currentPath: string }) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === currentPath;
  const isParentActive = hasChildren && item.children!.some(
    (c) => c.href === currentPath || c.children?.some((gc) => gc.href === currentPath)
  );
  const [open, setOpen] = useState(isParentActive || depth === 0);

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-sidebar-accent",
            isParentActive ? "text-sidebar-primary font-medium" : "text-sidebar-foreground"
          )}
        >
          <ChevronRight className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-90")} />
          <FolderOpen className="h-3.5 w-3.5 shrink-0 opacity-60" />
          <span className="truncate">{item.title}</span>
        </button>
        {open && <NavTree items={item.children!} depth={depth + 1} />}
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.href || "/"}
        className={cn(
          "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-sidebar-accent",
          isActive
            ? "bg-sidebar-accent text-sidebar-primary font-medium"
            : "text-sidebar-foreground"
        )}
      >
        <FileText className="h-3.5 w-3.5 shrink-0 opacity-60" />
        <span className="truncate">{item.title}</span>
      </Link>
    </li>
  );
}

export function DocSidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r bg-sidebar overflow-y-auto scrollbar-thin">
      <div className="p-4">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60 mb-3">
          Documentation
        </h2>
        <NavTree items={navigation} />
      </div>
    </aside>
  );
}
