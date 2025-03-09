# Using Script Listener with Illustrator

Script Listener is a powerful tool that records your actions in Illustrator and converts them into ExtendScript code.

## Setup

1. **Enable Script Listener**:
   - Close Illustrator if it's open
   - Copy `ScriptListener.aip` to:
     - Mac: `/Applications/Adobe Illustrator [version]/Plug-ins/`
     - Windows: `C:\Program Files\Adobe\Adobe Illustrator [version]\Plug-ins\`

2. **The Log File**:
   - Script Listener creates a log file at:
     - Mac: `/Users/[username]/Desktop/ScriptingListenerJS.log`
     - Windows: `C:\Users\[username]\Desktop\ScriptingListenerJS.log`

## Using Script Listener

1. Start Illustrator
2. The Script Listener will automatically begin recording your actions
3. Perform the actions you want to automate in Illustrator
4. Check the ScriptingListenerJS.log file on your desktop
5. The log file contains the JavaScript code for your actions

## Tips for Better Recording

1. **Start Fresh**:
   - Delete or rename any existing ScriptingListenerJS.log file
   - This ensures you're only capturing the actions you want

2. **Clean Recording**:
   - Perform actions deliberately and in order
   - Avoid unnecessary clicks or operations
   - Work with simple documents to reduce noise

3. **After Recording**:
   - The log file can be verbose
   - Copy relevant code sections to your script
   - Clean up unnecessary operations
   - Add error handling and user feedback

## Converting Log to Script

1. **Basic Template**:
```javascript
// @target illustrator

try {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        
        // Paste your recorded actions here
        
    } else {
        alert("Please open a document first!");
    }
} catch(e) {
    alert("An error occurred: " + e);
}
```

2. **Clean Up Tips**:
   - Remove redundant selections
   - Combine similar operations
   - Add meaningful variable names
   - Add comments explaining the actions
   - Test incrementally as you clean up

## Example

Original log entry:
```javascript
var doc = app.activeDocument;
var pathItem1 = doc.pathItems.rectangle(100, 100, 200, 150);
pathItem1.fillColor.red = 255;
pathItem1.fillColor.green = 0;
pathItem1.fillColor.blue = 0;
```

Cleaned up version:
```javascript
// Create a red rectangle
var redRect = doc.pathItems.rectangle(100, 100, 200, 150);
redRect.fillColor = new RGBColor();
redRect.fillColor.red = 255;
redRect.fillColor.green = 0;
redRect.fillColor.blue = 0;
```

## Troubleshooting

1. **If Log File Isn't Created**:
   - Verify ScriptListener.aip is in the correct location
   - Check write permissions on your desktop
   - Restart Illustrator

2. **If Actions Aren't Recorded**:
   - Make sure you're working in the active document
   - Try simpler actions first
   - Check if the log file is being updated

3. **If Code Doesn't Work**:
   - Test small sections at a time
   - Add $.writeln() statements for debugging
   - Compare with Illustrator's JavaScript Reference 