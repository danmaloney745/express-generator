#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const jsonpkg = require('./package.json');
const directory = require('./lib/createProject');

program
    .version('-v, --version', jsonpkg.version)
    .description('An express generator')
    .usage('-n, <project name>')
    .option('-n, --name <name>', 'Project Name')
    .option('-u, --username <username>', 'Authentication')
    .option('p, --password <password>', 'The user\'s password')

program.parse(process.argv);

//name of the directory
let appName = './' + program.name;

let packageJson = {
    name: appName.substring(2),
    version: '0.0.1',
    scripts: {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    dependencies: {
        "express": "^4.14.0",
        "body-parser": "^1.15.2",
        "ejs": "^2.5.5"
    }
}

directory.createDirectory(appName);
directory.createDirectory(appName, '/controllers');
directory.createDirectory(appName, '/routes');
directory.createDirectory(appName, '/views');
directory.createDirectory(appName, '/models');
directory.createDirectory(appName, '/public');
directory.createDirectory(appName, '/public/js');
directory.createDirectory(appName, '/public/css');
directory.createDirectory(appName, '/public/js/materialize');
directory.createDirectory(appName, '/public/css/materialize');
directory.createDirectory(appName, '/public/fonts');
directory.createDirectory(appName, '/public/imgs');

let appjs = directory.loadFromTemplate('/app.js');
let env = directory.loadFromTemplate('.env');
let proc = directory.loadFromTemplate('Procfile');
let pageController = directory.loadFromTemplate('/controllers/pageController.js');
let customCss = directory.loadFromTemplate('/public/css/style.css');
let customJs = directory.loadFromTemplate('/public/js/init.js');
let materializeCss = directory.loadFromTemplate('/public/css/materialize/materialize.min.css');
let materializeJs = directory.loadFromTemplate('/public/js/materialize/materialize.min.js');
let routes = directory.loadFromTemplate('/routes/routes.js');
let indexEjs = directory.loadFromTemplate('/views/index.ejs');


directory.writeLoadedContent(appName + '/app.js', appjs);
directory.writeLoadedContent(appName + "/.env", env);
directory.writeLoadedContent(appName + "/Procfile", proc);
directory.writeLoadedContent(appName + "/controllers/pageController.js", pageController);
directory.writeLoadedContent(appName + "/public/css/style.css", customCss);
directory.writeLoadedContent(appName + "/public/js/init.js", customJs);
directory.writeLoadedContent(appName + "/public/css/materialize/materialize.min.css", materializeCss);
directory.writeLoadedContent(appName + "/public/js/materialize/materialize.min.js", materializeJs);
directory.writeLoadedContent(appName + "/routes/routes.js", routes);
directory.writeLoadedContent(appName + "/views/index.ejs", indexEjs);