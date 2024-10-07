const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');


const puestosM = sequelize.define(
    'puestos',
    {

        id_puestos: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre_puesto: {
            type: DataTypes.STRING
        },
        id_empleado:{
            type: DataTypes.INTEGER
        }

    },{
        timestamps: false
    }
);

module.exports = {
    puestosM
}


