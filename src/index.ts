// Export the react components
export * from "./components";

// Export the components
import Components from "./lib";
export { Components }

// Update the global variable
import * as ReactComponents from "./components";
window["GD"] = { ...window["GD"], ...ReactComponents };