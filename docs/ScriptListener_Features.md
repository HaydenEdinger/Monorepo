# ScriptListener Features Guide

## Overview
ScriptListener is a powerful debugging and script generation tool that records all actions performed in Adobe Illustrator and converts them into ExtendScript code.

## Core Features

### 1. Action Recording
- Records **all** manipulations made to objects
- Captures property changes (color, size, position)
- Records tool usage and effects
- Logs selection changes and document modifications

### 2. Code Generation
- Generates JavaScript/ExtendScript code in real-time
- Creates reusable functions and variables
- Maintains object references and relationships
- Captures exact parameter values used in operations

### 3. Object Types Recorded

#### Document Operations
```javascript
// New document creation
var idoc = app.documents.add();
// Document property changes
doc.defaultFillColor = new RGBColor();
// Document size modifications
doc.artboards[0].artboardRect = [0, 0, 800, 600];
```

#### Path and Shape Operations
```javascript
// Rectangle creation
var rect = doc.pathItems.rectangle(top, left, width, height);
// Circle/ellipse creation
var circle = doc.pathItems.ellipse(top, left, width, height);
// Custom path creation
var path = doc.pathItems.add();
path.setEntirePath([[0,0], [100,100], [200,0]]);
```

#### Text Operations
```javascript
// Point text
var pointText = doc.textFrames.add();
pointText.contents = "Hello World";
// Area text
var areaText = doc.textFrames.areaText(rectangleRef);
// Text on path
var pathText = doc.textFrames.pathText(pathRef);
```

#### Style and Appearance
```javascript
// Fill colors
shape.fillColor = new RGBColor();
shape.fillColor.red = 255;
// Strokes
shape.strokeWidth = 2;
shape.strokeColor = new CMYKColor();
// Effects and appearances
shape.opacity = 50;
```

### 4. Special Features

#### Layer Management
```javascript
// Layer creation
var newLayer = doc.layers.add();
// Layer properties
newLayer.name = "My Layer";
newLayer.locked = false;
```

#### Group Operations
```javascript
// Group creation
var group = doc.groupItems.add();
// Moving items to group
shape.move(group, ElementPlacement.INSIDE);
```

#### Transform Operations
```javascript
// Rotation
shape.rotate(45);
// Scaling
shape.resize(200, 200); // percentage
// Position
shape.position = [100, 100];
```

## Best Practices

### 1. Recording Clean Actions
- Close all panels except essential ones
- Work in a clean document
- Perform actions deliberately and slowly
- Avoid unnecessary selections/deselections

### 2. Optimizing Recorded Code
- Remove redundant operations
- Group related actions
- Use meaningful variable names
- Add error handling
- Include progress indicators for long operations

### 3. Common Patterns to Watch For

#### Selection Management
```javascript
// ScriptListener often records:
app.selection = null;
// Replace with:
doc.selection = null;
```

#### Color Definitions
```javascript
// ScriptListener records individual components:
shape.fillColor = new RGBColor();
shape.fillColor.red = 255;
shape.fillColor.green = 0;
shape.fillColor.blue = 0;

// Optimize to:
var redColor = new RGBColor();
redColor.red = 255;
shape.fillColor = redColor;
```

#### Position and Size
```javascript
// ScriptListener records absolute positions:
shape.position = [234.5, 567.8];

// Consider making relative:
var centerX = doc.width / 2;
var centerY = doc.height / 2;
shape.position = [centerX, centerY];
```

## Troubleshooting

### Common Issues

1. **Missing Actions**
   - Ensure ScriptListener is properly installed
   - Check if log file is being updated
   - Verify write permissions on desktop

2. **Incorrect Code Generation**
   - Check for selection issues
   - Verify object references
   - Look for missing parent-child relationships

3. **Performance Issues**
   - Large log files can slow down Illustrator
   - Regular clearing of log file recommended
   - Use selective recording for complex documents

### Debug Tips

1. **Add Logging**
```javascript
$.writeln("Operation started");
try {
    // Your recorded code here
    $.writeln("Operation successful");
} catch(e) {
    $.writeln("Error: " + e);
}
```

2. **Check Object Existence**
```javascript
if (doc.pathItems.length > 0) {
    // Operate on path items
}
```

3. **Verify Properties**
```javascript
$.writeln("Position: " + shape.position);
$.writeln("Size: " + shape.width + " x " + shape.height);
```

## Advanced Usage

### 1. Batch Processing
- Record actions on one item
- Modify script to loop through multiple items
- Add progress indicators
- Include error handling

### 2. Custom Functions
- Extract common operations
- Create reusable utility functions
- Build libraries of frequently used code

### 3. Integration with Other Tools
- Combine with Actions panel
- Use with batch processing
- Integrate with other scripts

## Resources

1. **Adobe Documentation**
   - ExtendScript Toolkit Reference
   - Illustrator Scripting Guide
   - JavaScript Tools Guide

2. **Community Resources**
   - Adobe Forums
   - GitHub repositories
   - Script sharing platforms

3. **Development Tools**
   - ExtendScript Toolkit CC
   - VS Code with ExtendScript debug
   - Script panels and utilities 