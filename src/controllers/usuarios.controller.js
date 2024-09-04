const mysql = require('mysql');
require('dotenv').config();
let db;
const info = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.KEY,
    database: process.env.DATABASE
};

class General {

    //funcion para verificar usuario
    async veriUsu(req, res) {
        let respuesta = { "Respuesta": [] };
        try {
            let nombre = req.params.nombre;
            let key = req.params.key;

            console.log(nombre);
            console.log(key);
            res.send({nom:nombre, key:key});

            //validamos si el campo no esta vacio
            if (nombre == "" || key == "") throw new Error("Campos no validos");

            db = await mysql.createConnection(info);
            await db.connect();
            // console.log(req.query);
            // let colores;
            await db.query("select * from usuarios where usuario = "+nombre, (e, response) => {
                // console.log(res2);
                let respuesta = { "Response": response };
                db.end();
                res.send(respuesta);
            });
        } catch (e) {
            respuesta.Respuesta = "Error: " + e.message;
            db.end();
            res.send(respuesta);

        }

        // console.log("los colores");
        // await res.send(req.query);
    }

    // funcion para obtener un color en especifico
    async test(req, res) {
        try {
            let name = req.query.name;
            let key = req.query.key;


            let datos = {name: name.trim(),key: key.trim()};
            res.send(datos);

            
        } catch (e) {
            let response = { "Error": e.message };
            // db.end();
            res.send(response);
        }

        // console.log("los colores");
        // await res.send(req.query);
    }

    async saludo3(req, res) {
        try {
            let secreto = req.query.secreto;
            console.log(secreto);
            if (secreto != "123") {
                throw new Error("sin datos")
            }

            res.send({ "estatus": "200", "datos": secreto });
        }
        catch (err) {
            console.log("error atrapado");
            // console.log(err);
            res.send({ "estatus": "error", "respuesta": err.message });

        }
    }

}

const generalC = new General();

module.exports = generalC;