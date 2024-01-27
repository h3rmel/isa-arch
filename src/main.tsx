// #region Imports

import { createRoot } from "react-dom/client";

import { App } from "./app";

import "@/styles/globals.css";

// #endregion

// App Instance
const root = createRoot(document.getElementById("root")!);

root.render(<App />);