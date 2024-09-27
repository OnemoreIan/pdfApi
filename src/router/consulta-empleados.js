const express = require('express');
const general = express.Router();

const usuariosController = require("../controllers/usuarios.controller.js");
const empleadosController = require('../controllers/empleados.controller.js');

// const usuario = require('../models/usuario.js');



// obtener datos generales
general.get('/usuario', empleadosController.getOneUser);
general.get('/usuarios', empleadosController.getAllUsers);

general.get('/userdata', empleadosController.getUserData);
general.get('/userdata2', empleadosController.getUsers);

//usuarios
// general.get('/user',usuariosController.veriUsu);
// general.get('/error',usuariosController.test);

module.exports = general;