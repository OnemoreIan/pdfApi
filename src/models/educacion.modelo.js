const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');

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

