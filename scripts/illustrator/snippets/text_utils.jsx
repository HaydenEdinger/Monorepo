// @target illustrator

/**
 * Collection of text utility functions
 */

function createTextFrame(content, x, y, fontName, fontSize) {
    var doc = app.activeDocument;
    var textFrame = doc.textFrames.add();
    
    textFrame.contents = content;
    textFrame.position = [x, y];
    
    if (fontName) {
        textFrame.textRange.characterAttributes.textFont = 
            app.textFonts.getByName(fontName);
    }
    
    if (fontSize) {
        textFrame.textRange.characterAttributes.size = fontSize;
    }
    
    return textFrame;
}

function createParagraphText(content, x, y, width, height, fontName, fontSize) {
    var doc = app.activeDocument;
    var textFrame = doc.textFrames.areaText(
        doc.pathItems.rectangle(y, x, width, height)
    );
    
    textFrame.contents = content;
    
    if (fontName) {
        textFrame.textRange.characterAttributes.textFont = 
            app.textFonts.getByName(fontName);
    }
    
    if (fontSize) {
        textFrame.textRange.characterAttributes.size = fontSize;
    }
    
    return textFrame;
}

function createPathText(content, pathItem, fontName, fontSize) {
    var doc = app.activeDocument;
    var textFrame = doc.textFrames.pathText(pathItem);
    
    textFrame.contents = content;
    
    if (fontName) {
        textFrame.textRange.characterAttributes.textFont = 
            app.textFonts.getByName(fontName);
    }
    
    if (fontSize) {
        textFrame.textRange.characterAttributes.size = fontSize;
    }
    
    return textFrame;
} 