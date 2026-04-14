import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import DocPage from "./pages/DocPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { AdminLayout } from "@/components/admin/AdminHeader.tsx";
import AdminDashboard from "@/pages/admin/AdminDashboard.tsx";
import AdminArticles from "@/pages/admin/AdminArticles.tsx";
import AdminArticleEditor from "./pages/admin/AdminArticaleEditor.tsx";
import AdminCategories from "./pages/admin/AdminCategories.tsx";
import AdminMedia from "./pages/admin/AdminMedia.tsx";
import AdminSettings from "./pages/admin/AdminSettings.tsx";
import DiagnosticViewer from "./components/admin/DiagnosticViewer.tsx";
import DTCDisplay from "@/components/admin/DTCDisplay.tsx";
import DTCCreator from "./components/admin/DTCCreator.tsx";
import Viewer from "./components/admin/Viewer.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/docs/:slug" element={<DocPage />} />
          <Route path="/diagnostic" element={<DiagnosticViewer />} />
          <Route path="/dtc" element={<DTCDisplay />} />
          <Route path="/dtc-creator" element={<DTCCreator />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="articles" element={<AdminArticles />} />
            <Route path="viewer" element={<Viewer />} />
            <Route path="articles/new" element={<AdminArticleEditor />} />
            <Route path="articles/:id/edit" element={<AdminArticleEditor />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="dtc-display" element={<DTCDisplay />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
