const express = require('express');
const general = express.Router();

const direccionesC = require("../controllers/direcciones.controller");
// const usuario = require('../models/usuario.js');

// obtener datos generales

// obtener los usuarios

general.get('/',direccionesC.main);
general.get('/pdf',direccionesC.pagPdf);

module.exports = general;