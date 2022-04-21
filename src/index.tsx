import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Explorer from "./context/ExplorerContext";
import { default as config } from "./data/explorer.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Explorer config={config}>
      <App />
    </Explorer>
  </React.StrictMode>
);
