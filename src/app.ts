// const {express} = require('express');
import express from 'express'
const app = express()
const port = 3000


app.get('/:name', (req, res) => {
    res.send(req.params.name)
})


app.listen(port, () => {
    console.log('start 3000')
})
