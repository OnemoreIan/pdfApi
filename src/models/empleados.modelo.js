const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');

const empleadoM = sequelize.define(
    'empleados',
    {
        id_empleado: {
            type: DataTypes.INTEGER,
            primaryKey: true
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

    },{
        timestamps: false
    }
)


module.exports = {
    empleadoM
}