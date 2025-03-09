// Utility functions for Illustrator scripts

/**
 * Gets the active artboard's dimensions
 * @returns {Object} Object containing width and height of active artboard
 */
function getArtboardDimensions() {
    var doc = app.activeDocument;
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    var rect = artboard.artboardRect;
    
    return {
        width: rect[2] - rect[0],
        height: rect[1] - rect[3]
    };
}

/**
 * Centers an item on the active artboard
 * @param {PageItem} item - The item to center
 */
function centerOnArtboard(item) {
    var doc = app.activeDocument;
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    
    item.position = [
        (artboard.artboardRect[2] - artboard.artboardRect[0]) / 2,
        (artboard.artboardRect[1] - artboard.artboardRect[3]) / 2
    ];
}

/**
 * Safely executes a function with error handling
 * @param {Function} fn - Function to execute
 * @param {string} errorMessage - Custom error message
 */
function safeExecute(fn, errorMessage) {
    try {
        fn();
    } catch(e) {
        alert(errorMessage + "\n" + e);
    }
} 