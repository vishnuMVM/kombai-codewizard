import React, { createRoot } from "react-dom/client";
import DisplayProductInformation from "./components/DisplayProductInformation";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1840px", background: "#f7f9fd" }} data-ignore="used only for top most containter width">
    <DisplayProductInformation {...mockData} />
  </div>
);
