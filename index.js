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
        "express": "^4.14.0"
    }
}

directory.createDirectory(appName);
directory.createDirectory(appName, '/routes');
  
console.log('This is the filesearch script.');