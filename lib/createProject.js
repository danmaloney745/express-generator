'use strict';

const fs = require('fs');
const path = require('path');

class Structure {
    
    static createDirectory(appName, folderPath) {

        fs.mkdirSync(appName + folderPath, function(err){
            if(err){ 
                console.log(err);
                console.log("ERROR! The directory already exists! \n");
            }
        });
            
        console.log("Created: " + folderPath);
    }
}

module.exports = Structure;