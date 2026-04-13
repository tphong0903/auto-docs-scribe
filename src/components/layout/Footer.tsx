import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-card py-6 px-4 lg:px-6">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 AutoDocs. Internal use only.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/category/all" className="hover:text-foreground transition-colors">Documentation</Link>
          <span className="hover:text-foreground transition-colors cursor-pointer">Admin</span>
        </nav>
      </div>
    </footer>
  );
}
