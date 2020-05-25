export * from "./components";

import * as BS_LIB from "gd-bs";
import * as BS_React from "./components";

// Update the global variable
const GD = { ...BS_React, ...BS_LIB }
window["GD"] = GD;