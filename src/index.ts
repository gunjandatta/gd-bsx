import * as BS_LIB from "gd-bs";
import * as Components from "./components";

// Update the global variable
export const GD = { ...Components, ...BS_LIB }
window["GD"] = GD;