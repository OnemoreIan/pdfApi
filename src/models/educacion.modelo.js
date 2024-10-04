const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql');

const educacionM = sequelize.define(
    'educacion',
    {

        id_educacion: {
            type: DataTypes.INTEGER
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

    }
)



