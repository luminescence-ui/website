import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./pages/DocsPage";
import NotFound from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
