// Export the bootstrap library
export * from "gd-bs";

// Export the react components
export * from "./components";

// Update the global variable
import * as ReactComponents from "./components";
window["GD"] = { ...window["GD"], ...ReactComponents };