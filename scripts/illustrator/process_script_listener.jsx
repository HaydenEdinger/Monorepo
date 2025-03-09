// @target illustrator

function cleanupScriptListener() {
    try {
        // Get the log file
        var logFile = File("~/Desktop/ScriptingListenerJS.log");
        
        if (!logFile.exists) {
            alert("No ScriptListener log file found on desktop!");
            $.writeln("Log file not found at: " + logFile.absoluteURI);
            return;
        }
        
        // Read the log file
        logFile.open('r');
        var content = logFile.read();
        logFile.close();
        
        // Create a new script file
        var scriptFile = File("~/Desktop/processed_script.jsx");
        scriptFile.open('w');
        
        // Write the template start
        scriptFile.writeln("// @target illustrator");
        scriptFile.writeln("// Script generated from ScriptListener log");
        scriptFile.writeln("// " + new Date().toISOString());
        scriptFile.writeln("\ntry {");
        scriptFile.writeln("    if (app.documents.length > 0) {");
        scriptFile.writeln("        var doc = app.activeDocument;");
        scriptFile.writeln("");
        
        // Process and write the log content
        var lines = content.split("\n");
        var processedLines = [];
        var currentObject = null;
        var skipNextLine = false;
        
        for (var i = 0; i < lines.length; i++) {
            if (skipNextLine) {
                skipNextLine = false;
                continue;
            }
            
            var line = lines[i].trim();
            
            // Skip empty lines and common redundant code
            if (line === "" || 
                line.indexOf("app.activeDocument") !== -1 ||
                line.indexOf("selection = null") !== -1 ||
                line.indexOf("redraw()") !== -1) {
                continue;
            }
            
            // Clean up variable names
            if (line.indexOf("var ") === 0) {
                line = cleanupVariableName(line);
            }
            
            // Group related operations
            if (line.indexOf("pathItem") !== -1 && line.indexOf("var ") === 0) {
                currentObject = line.split("var ")[1].split("=")[0].trim();
            }
            
            // Add comments for new operations
            if (line.indexOf("var ") === 0) {
                processedLines.push("\n        // " + getOperationComment(line));
            }
            
            // Clean up the line
            line = cleanupLine(line, currentObject);
            
            // Add the processed line
            processedLines.push("        " + line);
        }
        
        // Write processed content
        scriptFile.writeln(processedLines.join("\n"));
        
        // Write the template end
        scriptFile.writeln("\n    } else {");
        scriptFile.writeln('        alert("Please open a document first!");');
        scriptFile.writeln("    }");
        scriptFile.writeln("} catch(e) {");
        scriptFile.writeln('    alert("An error occurred: " + e);');
        scriptFile.writeln("}");
        
        scriptFile.close();
        
        alert("Script processed and saved to Desktop as 'processed_script.jsx'");
        
    } catch(e) {
        alert("An error occurred while processing the script: " + e);
    }
}

function cleanupVariableName(line) {
    // Replace generic names with more meaningful ones
    if (line.indexOf("pathItem") !== -1) return line.replace(/pathItem\d+/g, "shape");
    if (line.indexOf("textFrame") !== -1) return line.replace(/textFrame\d+/g, "text");
    if (line.indexOf("groupItem") !== -1) return line.replace(/groupItem\d+/g, "group");
    return line;
}

function getOperationComment(line) {
    // Add descriptive comments based on the operation
    if (line.indexOf("rectangle") !== -1) return "Create rectangle";
    if (line.indexOf("ellipse") !== -1) return "Create circle/ellipse";
    if (line.indexOf("textFrame") !== -1) return "Create text frame";
    if (line.indexOf("groupItems") !== -1) return "Create group";
    return "New operation";
}

function cleanupLine(line, currentObject) {
    // Remove unnecessary parts and improve formatting
    line = line.replace(/app\.activeDocument\./g, "doc.");
    
    // Combine color settings
    if (line.indexOf("fillColor") !== -1 && currentObject) {
        if (line.indexOf("new RGBColor") !== -1) {
            return line;
        }
        // Collect color components for combining later
        if (line.indexOf("red") !== -1) return "// " + line + " // Color component";
        if (line.indexOf("green") !== -1) return "// " + line + " // Color component";
        if (line.indexOf("blue") !== -1) return "// " + line + " // Color component";
    }
    
    return line;
}

cleanupScriptListener(); 