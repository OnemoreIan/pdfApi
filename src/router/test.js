const express = require('express');
const path = require('path');

const test = express.Router();

test.get('/img',(req,res) => {

    res.sendFile(path.join(__dirname,"../img/perro.jpg"))
    
})

test.get("/test", (req,res) => {
    res.send({"respuesta": "servicio funcionando"});
});

test.get('/ping', (req, res) => {
    res.send({"Respuesta": "Pong"});
})

test.post("/test",(req,res) => {

    console.log(req.query);
    
    let respuesta = {"datos enviados" : req.query};

    res.send(respuesta);

});


module.exports = test;