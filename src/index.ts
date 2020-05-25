export * from "./components";

import * as GD from "gd-bs";
import * as Components from "./components";

// Update the global variable
window["GD"] = { ...Components, ...GD }