const {exec} = require('child_process');
const { realpath } = require('fs');
// const express = require('express')

console.log(realpath(__dirname))
// createProjectDir("projectname", 3)
/*
exec('mkdir '+__dirname+'/../testStorage/demomo', (err, stdout, stderr) => {
// exec( 'ls', (err, stdout, stderr) => {
    console.log({err})
    console.log({stdout})
    console.log({stderr})
})
*/


function createCommand(projectName) {
    return 'npm run exec testStorage/'+projectName;
}

function createProjectDir(dirname, id) {
    exec('mkdir '+realpath(__dirname+'/../testStorage/' + id + '/' + dirname), 
        (err, stdout, stderr) => {
            console.log(err);
            console.log(stdout);
            console.log(stderr);
        }
    )
}
