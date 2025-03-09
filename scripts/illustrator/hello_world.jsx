// @target illustrator

// Enable debugging
$.level = 2; // Enable debugging output
$.writeln("Script started");

// Basic script to demonstrate Illustrator automation
try {
    // Check if Illustrator is running
    if (typeof app !== "undefined") {
        $.writeln("Illustrator is available");
        
        // Check for open documents
        if (app.documents.length > 0) {
            $.writeln("Document is open");
            var doc = app.activeDocument;
            
            // Create a new text frame
            var textFrame = doc.textFrames.add();
            textFrame.contents = "Hello, Illustrator!";
            
            // Position the text frame in the center of the artboard
            var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
            textFrame.position = [
                (artboard.artboardRect[2] - artboard.artboardRect[0]) / 2,
                (artboard.artboardRect[1] - artboard.artboardRect[3]) / 2
            ];
            
            $.writeln("Text frame created successfully!");

            // Create a rectangle
            var rect = doc.pathItems.rectangle(100, 100, 200, 150); // top, left, width, height

            // Style it
            rect.fillColor = new RGBColor();
            rect.fillColor.red = 255;
            rect.fillColor.green = 0;
            rect.fillColor.blue = 0;
        } else {
            alert("Please open a document first!");
            $.writeln("No document open");
        }
    } else {
        alert("Could not connect to Illustrator!");
        $.writeln("Could not connect to Illustrator");
    }
} catch(e) {
    alert("An error occurred: " + e + "\nLine: " + e.line);
    $.writeln("Error: " + e + " on line " + e.line);
} 