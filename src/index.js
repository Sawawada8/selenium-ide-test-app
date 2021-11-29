const {exec} = require('child_process')
exec('npm run exec tests/helloworld.spec.js', (err, stdout, stderr) => {
    console.log({err})
    console.log({stdout})
    console.log({stderr})
})