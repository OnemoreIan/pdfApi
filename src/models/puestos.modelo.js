const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql');

const puestosM = sequelize.define(
    'puestos',
    {

        id_puestos: {
            type: DataTypes.INTEGER
        },
        nombre_puesto: {
            type: DataTypes.STRING
        },
        id_empleado:{
            type: DataTypes.STRING
        }

    }
)
