// Export the react components
export * from "./components";

// Update the global variable
import * as Components from "./components";
window["GD"] = { ...window["GD"], ...Components };