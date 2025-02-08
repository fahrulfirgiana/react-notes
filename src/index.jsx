import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/react-notes">
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
