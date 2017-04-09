const fs = require('fs');
const path = require('path');

class Structure {
    
    static createDirectory(appName, folderPath) {
        if(!fs.existsSync(appName)) {
            fs.mkdirSync(appName);
            console.log("Created: " + appName.substring(1));
        } else {
            fs.mkdirSync(appName + folderPath);
            console.log("Created: " + folderPath);
        }
        //console.log("ERROR! Directory already exists!");
    }

    static loadFromTemplate(folderPath) {
        return fs.readFileSync(path.join(__dirname, '..', 'templates', folderPath), "utf8");
        //console.log(data);
    }

    //writeFileSync method only accepts two areguments.
    static writeLoadedContent(appName, data) { 
        fs.writeFileSync(appName, data);
    }
}

module.exports = Structure;