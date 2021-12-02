const {exec} = require('child_process')
exec('npm run exec testStorage/helloworld.spec.js', (err, stdout, stderr) => {
    console.log({err})
    console.log({stdout})
    console.log({stderr})
})


function createCommand(projectName) {
    return 'npm run exec testStorage/'+projectName;
}