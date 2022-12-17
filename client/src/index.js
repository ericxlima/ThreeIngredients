import { createRoot } from "react-dom/client";

import UrlRoutes from "./routes";

const container = document.getElementById("root");

const root = createRoot(container);

console.log("hereee");

root.render(<UrlRoutes />);
