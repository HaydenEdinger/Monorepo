// @target illustrator

/**
 * Collection of basic shape creation snippets
 */

function createRectangle(x, y, width, height, fillColor) {
    var doc = app.activeDocument;
    var rect = doc.pathItems.rectangle(y, x, width, height);
    
    if (fillColor) {
        rect.fillColor = fillColor;
    }
    
    return rect;
}

function createCircle(centerX, centerY, radius, fillColor) {
    var doc = app.activeDocument;
    var circle = doc.pathItems.ellipse(
        centerY + radius,  // top
        centerX - radius,  // left
        radius * 2,       // width
        radius * 2        // height
    );
    
    if (fillColor) {
        circle.fillColor = fillColor;
    }
    
    return circle;
}

function createPolygon(centerX, centerY, radius, sides, fillColor) {
    var doc = app.activeDocument;
    var polygon = doc.pathItems.polygon(
        centerX,
        centerY,
        radius,
        sides
    );
    
    if (fillColor) {
        polygon.fillColor = fillColor;
    }
    
    return polygon;
} 