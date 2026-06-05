import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "./pages/NotFound.tsx";
import Viewer from "./components/admin/Viewer.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import DiagramViewer from "./components/canva/DiagramViewer.tsx";
import SensorViewer from "./components/admin/SensorViewer.tsx";
import { CreatePostWithYouTube } from "./components/Youtube.tsx";
import Quiz from "./components/Quiz.tsx";
import LessonViewer from "./pages/LessonViewer";

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
    path: "/quiz/:symptomId?",
    element: <Quiz />,
  },
  {
    path: "/lesson/:id?",
    element: <LessonViewer />,
  },
  {
    path: "/diagram",
    element: <DiagramViewer folder="" title="" />,
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
