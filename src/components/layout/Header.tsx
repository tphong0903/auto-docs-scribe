import { Search, Moon, Sun, User, Wrench } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-14 items-center px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-4 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Wrench className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="hidden font-heading text-sm font-bold tracking-tight text-foreground sm:inline-block">
            AutoDocs
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search procedures, trouble codes, systems..."
              className="pl-9 bg-muted/50 border-border focus:bg-card"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 ml-4 shrink-0">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-muted-foreground">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
