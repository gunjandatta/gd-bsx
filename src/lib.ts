import { Components } from "gd-bs";

// Ensure the Components reference exists
if (Components == null) {
    // Update it to the global variable
    console.log("[Dev] The components variable is null. Defaulting to the global variable.");
    (Components as any) = window["GD"] && window["GD"].Components;
}

// This will ensure the export occurs at the end of the compiled file
export default Components;