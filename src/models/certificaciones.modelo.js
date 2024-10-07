const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');

const certificacionesM = sequelize.define(
    'certificaciones',
    {

        id_certificacion: {
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        nom_certificacion: {
            type: DataTypes.STRING
        },
        periodo:{
            type: DataTypes.STRING
        },
        institucion: {
            type: DataTypes.STRING
        },
        vigencia: {
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
    certificacionesM
}