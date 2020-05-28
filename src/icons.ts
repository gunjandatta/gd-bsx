import { Icons } from "gd-bs";

// Ensure the Icon Types reference exists
if (Icons == null) {
    // Update it to the global variable
    console.log("[Dev] The icons variable is null. Defaulting to the global variable.");
    (Icons as any) = window["GD"] && window["GD"].Icons;
}

// This will ensure the export occurs at the end of the compiled file
export default Icons;