// const {express} = require('express');
import express from 'express'
const app = express()
const port = 3001


// test section all exec path
app.get('/exec/:project', (req, res) => {
  console.log(req.params.project)
  res.send(JSON.stringify({aa: req.params.project}))
})

// 所定のセクションのみ実行
app.get('/exec/:project/:section', (req, res) => {
    // res.send(req.params.name)
    let a = getTestfileFromS3('helo')
    a.data.name = req.params.project
    a.data.sec = req.params.section
    res.send(JSON.stringify(a))
})

// project 生成
app.post('/cerate', (req, res) => {
  // create S3 baket
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
