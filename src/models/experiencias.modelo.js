const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql');

const experienciasM = sequelize.define(
    'experiencias',
    {

        id_experiencia: {
            type: DataTypes.INTEGER
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

    }
)



