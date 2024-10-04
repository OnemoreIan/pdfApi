const { Sequelize, DataTypes } = require('sequelize');

const { conectarse } = require('../db/conection.js');

const sequelize = new Sequelize('mysql');

const empleadoM = sequelize.define(
    'empleados',
    {

        id_empleado: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        puesto:{
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        }

    }
)



module.exports = {
    empleadoM
}