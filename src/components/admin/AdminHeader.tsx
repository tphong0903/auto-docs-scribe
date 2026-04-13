import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { Wrench } from "lucide-react";

export function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-admin-header px-4 gap-3 shrink-0">
            <SidebarTrigger className="text-admin-header-foreground hover:text-accent" />
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-accent" />
              <span className="font-semibold text-admin-header-foreground text-sm">
                AutoDocs Admin
              </span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <a
                href="/"
                target="_blank"
                className="text-xs text-admin-header-foreground/70 hover:text-accent transition-colors"
              >
                View Site →
              </a>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6 bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
