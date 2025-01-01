import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster />
        <div className="max-w-screen-lg mx-auto">
          <RouterProvider router={routes} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
