import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "./pages/NotFound.tsx";
import Viewer from "./components/admin/Viewer.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Canva from "./components/canva/Canva.tsx";
import SensorViewer from "./components/admin/SensorViewer.tsx";
import { CreatePostWithYouTube } from "./components/Youtube.tsx";
import Quiz from "./components/Quiz.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/youtube",
    element: <CreatePostWithYouTube />,
  },
  {
    path: "/dtc-explorer",
    element: <Viewer />,
  },
  {
    path: "/sensor-explorer",
    element: <SensorViewer />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/diagram",
    element: <Canva />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
