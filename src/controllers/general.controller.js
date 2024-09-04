const mysql = require('mysql');
require('dotenv').config();
let db;
const info = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.KEY,
    database: process.env.DATABASE
};

class General{

    //funcion para obtener todos los colores
    async todosColores(req,res){
        let respuesta = {"Respuesta":[]};
        try{
            let id = req.params.id;
            if (id <= 0)throw new Error("Id invalido");

            db = await mysql.createConnection(info);
            await db.connect();
            // console.log(req.query);
            // let colores;
            await db.query("select * from colores",(err2, res2) => {
                // console.log(res2);
                let respuesta = {"Response":res2};
                db.end();
                res.send(respuesta);
            });
        }catch(e){
            respuesta.Respuesta = "Error: " + e.message;
            db.end();
            res.send(respuesta);

        }
        
        // console.log("los colores");
        // await res.send(req.query);
    }

    // funcion para obtener un color en especifico
    async color(req,res){
        try{
            let id = req.query.id;
            // if (id <= 0)throw new Error("Id invalido");

            db = await mysql.createConnection(info);
            await db.connect();
            // console.log(req.query);
            await db.query(`SELECT * FROM colores WHERE id_color = ${id}`,(err2, res2) => {
                // if (err2) {
                //     console.log(err2);
                //     throw new Error("Error en la respuesta");
                // }
                let response = {"data": res2};
                db.end();
                res.send(response);
            });
        }catch(e){
            let response = { "Error": e.message };
            db.end();
            res.send(response);
        }
        
        // console.log("los colores");
        // await res.send(req.query);
    }

    async saludo3(req,res){
        try{
            let secreto = req.query.secreto;
            console.log(secreto);
            if (secreto != "123") {
                throw new Error("sin datos")
            }

            res.send({"estatus": "200", "datos": secreto});
        }
        catch(err){
            console.log("error atrapado");
            // console.log(err);
            res.send({"estatus": "error","respuesta" : err.message});

        }
    }

}

const generalC = new General();

module.exports = generalC;