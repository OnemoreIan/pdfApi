const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');


const experienciasM = sequelize.define(
    'experiencias',
    {
        id_experiencia: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nom_organizacion: {
            type: DataTypes.STRING
        },
        periodo:{
            type: DataTypes.STRING
        },
        puesto: {
            type: DataTypes.STRING
        },
        actividades: {
            type: DataTypes.STRING
        },
        tecnologias: {
            type: DataTypes.STRING
        },
        id_empleado: {
            type: DataTypes.STRING
        }

    },{
        timestamps: false
    }
)

module.exports ={
    experienciasM
}



