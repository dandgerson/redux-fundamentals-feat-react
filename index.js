import "./src/main.scss";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "/src/App";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
