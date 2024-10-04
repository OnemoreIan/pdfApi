const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/conection.js');
const db = sequelize;

const CursoM = db.define(
    'Curso',
    {
        id_curso: {
            type: DataTypes.INTEGER
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

    }
)


module.exports = {
    CursoM
}


/* class Cursos extends Model {
    id;

}
User.init(
    {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    },
    { sequelize, modelName: 'user' },
);

(async () => {
    await sequelize.sync();
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    });
    console.log(jane.toJSON());
})(); */

