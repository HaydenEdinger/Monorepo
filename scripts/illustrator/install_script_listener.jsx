// @target illustrator

function installScriptListener() {
    try {
        // First, find the ScriptListener.aip file
        var sourceFile = File.openDialog("Select ScriptListener.aip file", "*.aip");
        if (!sourceFile) {
            alert("No file selected. Installation cancelled.");
            return;
        }

        // Define the target directory
        var pluginsPath = Folder(app.path + "/Plug-ins");
        if (!pluginsPath.exists) {
            alert("Cannot find Plug-ins folder at: " + pluginsPath.fsName);
            return;
        }

        // Create the target file path
        var targetFile = File(pluginsPath + "/ScriptListener.aip");
        
        // Copy the file
        if (sourceFile.copy(targetFile)) {
            alert("ScriptListener successfully installed!\n\n" +
                  "Please restart Illustrator to complete installation.\n\n" +
                  "After restart, your actions will be logged to:\n" +
                  "~/Desktop/ScriptingListenerJS.log");
        } else {
            alert("Failed to copy ScriptListener.\n" +
                  "You may need to run Illustrator as administrator.");
        }
        
    } catch(e) {
        alert("Error during installation: " + e);
    }
}

installScriptListener(); 