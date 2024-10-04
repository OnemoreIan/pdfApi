const express = require('express');
const path = require('path');
const test = express.Router();

// const { sequelize } = require('../db/conection.js');

// const { CursoM } = require('../models/cursos.modelo.js');

// const { empleadoM } = require('../models/empleados.modelo.js');
// const { Sequelize, DataTypes, Model } = require('sequelize');
const { idiomasM } = require('../models/idiomas.modelo.js');
const { sequelize } = require('../db/conection.js');
// const host = process.env.DB_HOST;
// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_DATABASE;
// const port = process.env.DB_PORT;

// var sequelize = new Sequelize(database, user, password, {
//     host: host,
//     dialect: 'mysql',
//     logging: false,
//     port: port
// });

/* let Idiomas = sequelize.define(
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
); */



/* const cursosM = sequelize.define(
    'cursos',
    {
        id_curso: DataTypes.INTEGER,
        nom_cruso: DataTypes.STRING,
        periodo: DataTypes.STRING,
        institucion: DataTypes.STRING,
        vigencia: DataTypes.STRING,
        id_empleados: DataTypes.INTEGER
    }
) */

test.get('/img', (req, res) => {

    res.sendFile(path.join(__dirname, "../assets/perro.jpg"));

})

test.get("/test", (req, res) => {
    res.send({ "respuesta": "servicio funcionando" });
});

test.get('/ping', (req, res) => {
    res.send({ "Respuesta": "Pong" });
})

test.post("/test", (req, res) => {

    console.log(req.query);

    let respuesta = { "datos enviados": req.query };

    res.send(respuesta);

});

test.get('/conectar', async (req, res) => {
    // await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    (async () => {
        try {

            await sequelize.sync(); // Sincronizar modelo con la base de datos

            // Consultar usuarios
            // const idiomasA = await nuevoIdioma.findAll();
            // console.log('Usuarios encontrados:', idiomasA.map(u => u.toJSON()));

            // Actualizar usuario
            // await Usuario.update({ edad: 30 }, { where: { nombre: 'Juan' } });

            // Eliminar usuario
            // await Usuario.destroy({ where: { nombre: 'Juan' } });

            const consulta = await idiomasM.findAll();
            let datos = consulta.map(i => i.toJSON());

            respuesta = datos;


            // console.log(respuesta);
            // console.log('Usuario encontrado => ' + consulta.map(item => item.toJSON()));

            res.send({ "contenido": respuesta });



        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        // Crear un nuevo usuario
        /* let lIdiomas = ['', 'Español', 'Aleman', 'Ingles'];
        let lintitucion = ['', 'Freecode camp', 'Celex', 'Upiccsa'];
        for (let index = 1; index <= 3; index++) {

            const nuevoIdioma = await Idiomas.create({
                id_idioma: index,
                idioma: lIdiomas[index],
                nivel: 'Avanzado',
                institucion: lintitucion[index],
                id_empleado: 2
            });
        } */

        // console.log('Usuario creado:', nuevoIdioma.toJSON());



    })();
    // try {

    // const lEmpleados = await empleadoM.findAll()
    // const cursos = await cursoM.findAll();

    // console.log(cursos);


    // let db = sequelize;


    // db.authenticate();









    // console.log(cursos);


    // const contenido = await CursoM.findAll();

    // console.log(contenido);


    // sequelize.close();
    // } catch (error) {

    // }

});


module.exports = test;