#! /usr/bin/env node

'use strict';

const program = require('commander');
const fs = require('fs');
const exec = require('child_process').exec;
const jsonpkg = require('./package.json');

let appName ="./" + program.name;

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

program
    .version('-v, --version', jsonpkg.version)
    .description('An express generator')
    .usage('-n, <project name>')
    .option('-n, --name <name>', 'Project Name')
    .option('-u, --username <username>', 'Authentication')
    .option('p, --password <password>', 'The user\'s password')

program.parse(process.argv);
  
console.log('This is the filesearch script.');