import { createRoot } from "react-dom/client";
import { Fragment } from "react";

import App from "./App";

const d = document;
const root = createRoot(d.getElementById("root"));

root.render(<App />);
