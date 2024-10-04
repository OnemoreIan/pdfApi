const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql');

const certificacionesM = sequelize.define(
    'certificaciones',
    {

        id_certificacion: {
            type: DataTypes.INTEGER
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

    }
)
