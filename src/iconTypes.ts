import { IconTypes } from "gd-bs";

// Ensure the Icon Types reference exists
if (IconTypes == null) {
    // Update it to the global variable
    console.log("[Dev] The icon types variable is null. Defaulting to the global variable.");
    (IconTypes as any) = window["GD"] && window["GD"].IconTypes;
}

// This will ensure the export occurs at the end of the compiled file
export default IconTypes;