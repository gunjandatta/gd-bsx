// Export the react components
export * from "./components";

// Export the components
import Components from "./lib";
export { Components }

// Export the icons
import Icons from "./icons";
export { Icons }

// Export the icon types
import IconTypes from "./iconTypes";
export { IconTypes }

// Update the global variable
import * as ReactComponents from "./components";
window["GD"] = { ...window["GD"], ...ReactComponents };