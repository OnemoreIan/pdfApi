const { sequelize } = require('../db/conection.js');
const { DataTypes } = require('sequelize');

const educacionM = sequelize.define(
    'educacion',
    {

        id_educacion: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nom_programa: {
            type: DataTypes.STRING
        },
        periodo:{
            type: DataTypes.STRING
        },
        fechaInicio:{
            type: DataTypes.STRING
        },
        fechaFin:{
            type: DataTypes.STRING
        },
        institucion: {
            type: DataTypes.STRING
        },
        id_empleado: {
            type: DataTypes.INTEGER
        }

    },{
        timestamps: false
    }
)

module.exports = {
    educacionM
}

