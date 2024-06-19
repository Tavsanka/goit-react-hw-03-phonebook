import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);