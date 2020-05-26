// Export the JS components
import Components from "./lib";
export { Components }

// Export the react components
import * as ReactComponents from "./components";
export * from "./components";

// Update the global variable
window["GD"] = { ...window["GD"], ...ReactComponents };

export default ReactComponents;