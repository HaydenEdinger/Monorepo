// @target illustrator

$.writeln("Script starting...");

// Basic script to demonstrate Illustrator automation
try {
    // Check if Illustrator is running
    if (typeof app !== "undefined") {
        $.writeln("Illustrator is available");
        
        // Check for open documents
        if (app.documents.length > 0) {
            $.writeln("Document is open");
            var doc = app.activeDocument;
            
            // Create a simple red rectangle
            var rect = doc.pathItems.rectangle(100, 100, 200, 150);
            rect.fillColor = new RGBColor();
            rect.fillColor.red = 255;
            rect.fillColor.green = 0;
            rect.fillColor.blue = 0;
            
            $.writeln("Rectangle created!");
            alert("Rectangle created successfully!");
        } else {
            alert("Please open a document first!");
        }
    } else {
        alert("Could not connect to Illustrator!");
    }
} catch(e) {
    $.writeln("Error: " + e);
    alert("An error occurred: " + e);
} 