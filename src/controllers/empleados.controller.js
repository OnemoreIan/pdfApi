const { query } = require('express');
const { Sequelize } = require('sequelize');
const mysql = require('mysql');

var connection; //variable para todas las interacciones

// Configuración de la conexión MySQL
function inicioConexion() {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });

}

// validar conexion
/* function establecerConexion(res) {
  connection.connect(err => {
    if (err) {
      res.status(500).send(JSON({ "Problemas al conectar": conexion.respuesta }));
    }

  });

} */

// Funciónes para obtener datos de la base de datos


//obtener un solo usuario
exports.getOneUser = (req, res) => {

  try {
    inicioConexion();

    let { id } = req.query;
    if (!id || id.trim === "") {
      const error = new Error("No se especifico el empleado");
      throw new Error(error);
    }

    const consulta = `Select * from user WHERE idUser = ${id}`;


    connection.query(consulta, (err, resultado) => {

      // if(err) throw new Error("no se especifica el empleado");

      let respuesta = {
        "data": resultado
      }

      res.send(respuesta);

    });

  } catch (error) {
    console.log(error);

    let respuesta = {
      "Hubo un problema": error.query
    };

    res.status(500).send(respuesta);
  }

  connection.end();

};

//obtener todos los resultados
exports.getAllUsers = (req, res) => {
  try {
    let consulta = "SELECT * from empleados";

    inicioConexion();

    connection.query(consulta, (err, resultado) => {

      if (err) throw error;

      let respuesta = {
        "data": resultado
      };

      res.send(respuesta);

    });


  } catch (error) {
    res.status(500).send({ "Problemas durante la consulta": error });
  }

  connection.end();

};

// obtener todos los datos del empleado
exports.getFullDataUser = (req, res) => {
  try {
    let { id } = req.query;
    let consulta;

    let empleado;

    let respuesta = {
      'empleado' : empleado,
      'idomas': empleado,
    }

    inicioConexion();

    // empleado
    consulta = `SELECT * FROM empleados WHERE empleados.id_empleado = ${id};`;
    connection.query(consulta, (err,resultado) => {

      respuesta.empleado = resultado[0];
      
      respuesta.idomas = connection.query(consulta);

      consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
      connection.query(consulta,(err,resultado) => respuesta.idomas = resultado);

      console.log(respuesta);
      

      res.send(respuesta);
    });

    console.log(empleado);
    
    /* await connection.query(consulta, (err, resultado) => {
      console.log(resultado);
      
      empleado = resultado;
      // res.send(respuesta);
    }); */

    // idiomas
    /* consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
    await connection.query(consulta, (err, resultado) => {
      // console.log(resultado);
      
      idiomas = resultado;
    });

    // certificaciones
    consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
    await connection.query(consulta, (err, resultado) => {
      // console.log(resultado);
      
      certificaciones = resultado;
    });

    // educacion
    consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
    await connection.query(consulta, (err, resultado) => {
      // console.log(resultado);
      
      educacion = resultado;
    });

    // experiencia
    consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
    await connection.query(consulta, (err, resultado) => {
      // console.log(resultado);
      
      experiencia = resultado;
    });


    // puestos
    consulta = `SELECT idiomas.* FROM empleados, idiomas WHERE empleados.id_empleado = idiomas.id_empleado AND empleados.id_empleado = ${id};`;
    await connection.query(consulta, (err, resultado) => {
      // console.log(resultado);
      
      puestos = resultado;
    }); */

    

    // respuesta.json();
    console.log("raw");
    // console.log(respuesta);
    
    

    







  } catch (error) {
    console.log(error);

    let respuesta = {
      "Hubo un problema": error.query
    };

    res.status(500).send(respuesta);
  }

  connection.end();
};




exports.getUserData = (req, res) => {

  //creamos la consulta
  const query = 'SELECT * FROM user WHERE idUser = 1';

  try {

    inicioConexion();
    // establecerConexion(res);

    connection.query(query, (error, results) => {

      if (error) throw error;

      console.log("resultados => " + results);
      // console.log(results);

      let respuesta = {
        "data": results
      }

      res.send(respuesta);


    });
    console.log("Coneccion cerrada");
    connection.end();



  } catch (error) {
    res.status(500).send({ "Problemas durante la consulta": error });
  }




};

// Función para obtener los usuarios registrados
exports.getUsers = (req, res) => {
  inicioConexion();
  const query = 'SELECT * FROM user';
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios: ", err);
      res.status(500).send("Error al obtener usuarios");
    } else {
      res.json(results);
    }
  });

  console.log("conexion cerrada");

  connection.end();
};

// Inserción de un usuario nuevo
exports.registerUser = (req, res) => {
  const { nameUser, phone, old, emailUser, photo, description } = req.body;

  if (!nameUser || !emailUser) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const query = 'INSERT INTO user (nameUser, phone, old, emailUser, photo, description) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(query, [nameUser, phone, old, emailUser, photo, description], (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ error: 'Error al registrar el usuario' });
    } else {
      return res.json({ success: 'Usuario registrado con éxito', id: result.insertId });
    }
  });
};
