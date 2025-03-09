// @target illustrator

/**
 * Collection of color utility functions
 */

function createRGBColor(r, g, b) {
    var color = new RGBColor();
    color.red = r;
    color.green = g;
    color.blue = b;
    return color;
}

function createCMYKColor(c, m, y, k) {
    var color = new CMYKColor();
    color.cyan = c;
    color.magenta = m;
    color.yellow = y;
    color.black = k;
    return color;
}

function createSpotColor(name, colorType, values) {
    var doc = app.activeDocument;
    var spot = doc.spots.add();
    spot.name = name;
    
    switch(colorType.toLowerCase()) {
        case 'rgb':
            spot.color = createRGBColor(values[0], values[1], values[2]);
            break;
        case 'cmyk':
            spot.color = createCMYKColor(values[0], values[1], values[2], values[3]);
            break;
        default:
            throw new Error('Unsupported color type: ' + colorType);
    }
    
    return spot;
} 