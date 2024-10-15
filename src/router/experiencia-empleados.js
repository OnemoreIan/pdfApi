const express = require('express');
const general = express.Router();

const empleadosController = require('../controllers/empleados.controller.js');

// obtener datos generales
// general.get('/empleado', empleadosController.getOneUser);

general.post('/actualizar/experiencia',empleadosController.updateXpEmpleado);


module.exports = general;