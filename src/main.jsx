import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error(
    'No se encontró el elemento con id="app" en index.html.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);