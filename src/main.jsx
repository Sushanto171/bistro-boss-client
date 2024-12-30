import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-lg mx-auto">
        <RouterProvider router={routes} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
