const fs = require('fs');
const path = require('path');

class Structure {
    
    static createDirectory(appName, folderPath) {
        if(fs.existsSync(appName)) {
            console.log("ERROR! Directory already exists!");
        } else {
            fs.mkdirSync(appName);
            fs.mkdirSync(appName + folderPath);
            console.log("Created: " + folderPath);
        }
    }

    static loadFromTemplate() {
        
    }
}

module.exports = Structure;