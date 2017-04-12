const fs = require('fs');
const path = require('path');

class Structure {
    
    static createDirectory(appName, folderPath) {
        return new Promise((resolve, reject) => {
            if(!fs.existsSync(appName)) {
                fs.mkdirSync(appName);
                console.log("Created: " + appName.substring(1));
                for(let i in folderPath){
                    fs.mkdirSync(appName + folderPath[i]);
                    console.log("Created: " + folderPath[i]);
                }
                resolve();

            } else {
                reject();
            }
        })
    }

    static loadAndWrite(fileToLoad, appName) {
        let fileData = [];
        let dataPromise = new Promise(
            (resolve) => {
                for(let i in fileToLoad){
                    fileData[i] = fs.readFileSync(path.join(__dirname, '..', 'templates', fileToLoad[i]), "utf8");
                }
                resolve(fileData);
            }
        )
        dataPromise.then(data => {
            for(let i in fileToLoad){
                let fileToWrite = appName + fileToLoad[i];
                fs.writeFileSync(fileToWrite, data[i]);
            }
        });
    }
}    

module.exports = Structure;