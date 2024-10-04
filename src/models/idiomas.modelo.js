const { sequelize } = require('../db/conection.js');
const { DataTypes } = require('sequelize');


/* const idiomasM = sequelize.define(
    'idiomas',
    {

        id_idioma: {
            type: DataTypes.INTEGER
        },
        idioma: {
            type: DataTypes.STRING
        },
        nivel: {
            type: DataTypes.STRING
        },
        institucion: {
            type: DataTypes.STRING
        },
        id_empleado: {
            type: DataTypes.STRING
        }

    }
) */

const idiomasM = sequelize.define(
    'idiomas',
    {
        id_idioma: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        idioma: {
            type: DataTypes.STRING,
        },
        nivel: {
            type: DataTypes.STRING
        },
        institucion: {
            type: DataTypes.STRING
        },
        id_empleado: {
            type: DataTypes.INTEGER
        }

    }
);

module.exports = {
    idiomasM
}
