import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootScreen from "./screens/root-screen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootScreen />
  </StrictMode>,
);
