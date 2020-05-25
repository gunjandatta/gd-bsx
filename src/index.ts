export * from "./components";

import * as GD from "gd-bs";
import * as Components from "./components";

// Update the global variable
const global_var = { ...Components, ...GD }
window["GD"] = global_var;

export default global_var;