import React from "react";
import router from "./utilities/AppRoutes.tsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { PromotionProvider } from "./contexts/PromotionContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PromotionProvider>
      <RouterProvider router={router} />
    </PromotionProvider>
  </React.StrictMode>
);
