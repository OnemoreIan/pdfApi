const express = require('express');
const path = require('path');

const test = express.Router();

test.get('/img',(req,res) => {

    res.sendFile(path.join(__dirname,"../img/perro.jpg"))
    
})

test.get('/ping', (req, res) => {
    res.send({"Respuesta": "Pong"});
})


module.exports = test;