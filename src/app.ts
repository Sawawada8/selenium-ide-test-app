// const {express} = require('express');
import express from 'express'
const app = express()
const port = 3000


app.get('/:name', (req, res) => {
    // res.send(req.params.name)
    let a = getTestfileFromS3('helo')
    a.data.name = req.params.name
    res.send(JSON.stringify(a))
})


app.listen(port, () => {
    console.log('start 3000')
})


interface testFile {
    name: string;
    data: any;
}
function getTestfileFromS3(testfileName: string): testFile {
    const testFile: testFile = {
        name: 'testfile',
        data: {}
    }
    return testFile
}