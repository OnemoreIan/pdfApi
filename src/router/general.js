const express = require('express');
const general = express.Router();
const generalC = require("../controllers/general.controller.js");
const usuariosController = require("../controllers/usuarios.controller.js");
// const usuario = require('../models/usuario.js');

// obtener datos generales

// obtener los usuarios

general.get('/colores',generalC.todosColores);
general.post('/color',generalC.color);
general.post('/error',generalC.saludo3);


//usuarios

general.get('/user',usuariosController.veriUsu);
general.get('/error',usuariosController.test);

module.exports = general;