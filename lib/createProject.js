<<<<<<< HEAD
=======
'use strict';

>>>>>>> d2f46dbbfc37764733db66c785a60b9661ad7816
const fs = require('fs');
const path = require('path');

class Structure {
    
    static createDirectory(appName, folderPath) {
<<<<<<< HEAD
        if(fs.existsSync(appName)) {
            console.log("ERROR! Directory already exists!");
        } else {
            fs.mkdirSync(appName);
            console.log("Created: " + folderPath);
        }
=======

        fs.mkdirSync(appName + folderPath, function(err){
            if(err){ 
                console.log(err);
                console.log("ERROR! The directory already exists! \n");
            }
        });
            
        console.log("Created: " + folderPath);
>>>>>>> d2f46dbbfc37764733db66c785a60b9661ad7816
    }
}

module.exports = Structure;