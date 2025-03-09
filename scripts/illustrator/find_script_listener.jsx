// @target illustrator

function findScriptListener() {
    // Possible locations for ScriptListener files
    var possibleLocations = [
        "/Applications/Adobe Illustrator 2024/Presets.localized/en_US/Scripts/ScriptListener.jsx",
        "/Applications/Adobe Illustrator 2024/Plug-ins/ScriptListener.aip",
        "/Applications/Adobe Illustrator 2024/Required/Plug-ins/ScriptListener.aip",
        // Add more potential paths if needed
    ];
    
    $.writeln("Searching for ScriptListener files...");
    
    var found = false;
    for (var i = 0; i < possibleLocations.length; i++) {
        var file = File(possibleLocations[i]);
        if (file.exists) {
            $.writeln("Found at: " + file.fsName);
            alert("ScriptListener found at:\n" + file.fsName);
            found = true;
        }
    }
    
    if (!found) {
        var message = "ScriptListener files not found in common locations.\n\n" +
                     "Please check Adobe's website or your Illustrator installation files " +
                     "for ScriptListener.aip or ScriptListener.jsx";
        alert(message);
        $.writeln(message);
    }
}

findScriptListener(); 