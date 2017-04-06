#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
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

directory.createDirectory(appName, '/routes');
directory.createDirectory(appName, '/views');
directory.createDirectory(appName, '/models');
directory.createDirectory(appName, '/controllers');
directory.createDirectory(appName, '/public');
directory.createDirectory(appName, '/public/js');
directory.createDirectory(appName, '/public/css');
directory.createDirectory(appName, '/public/font');
directory.createDirectory(appName, '/public/img');
