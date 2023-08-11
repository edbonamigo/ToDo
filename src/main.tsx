import React from "react";
import ReactDOM from "react-dom/client";
import ToDoApp from "./AppToDo.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
