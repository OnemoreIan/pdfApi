const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conection.js');


const habilidadesBM = sequelize.define(
    'habilidadesblandas',
    {
        id_habilidad: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nom_habilidad: {
            type: DataTypes.STRING
        },
        desc_habilidad:{
            type: DataTypes.STRING
        }

    },{
        timestamps: false
    }
)

module.exports ={
    habilidadesBM
}
