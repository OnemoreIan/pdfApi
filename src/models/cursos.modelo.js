const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');


const cursosM = sequelize.define(
    'cursos',
    {
        id_curso: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nom_curso: {
            type: DataTypes.STRING
        },
        periodo: {
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
    cursosM
}

