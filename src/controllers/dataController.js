const { query } = require('express');
const mysql = require('mysql');

// Configuración de la conexión MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

function establecerConexion(res) {
  connection.connect( err => {
    if (err) {
      res.status(500).send(JSON({"Problemas al conectar" : conexion.respuesta}));
    }

  });

}

// Función para obtener datos de la base de datos
exports.getUserData = (req, res) => {

  //creamos la consulta
  const query = 'SELECT * FROM user WHERE idUser = 1';

  try {

    establecerConexion(res);

    connection.query(query, (error, results) => {

      if (error) throw error;
  
      console.log("resultados => "+results);
      console.log(results);
      


      let respuesta = {
        "data":results
      }

      res.send(respuesta);
      
  
    });
    console.log("Coneccion cerrada");
    connection.end();
  
    
    
  } catch (error) {
    res.status(500).send({"Problemas durante la consulta" : error});
  }
  


  
};

// Función para obtener los usuarios registrados
exports.getUsers = (req, res) => {
  const query = 'SELECT * FROM user';
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios: ", err);
      res.status(500).send("Error al obtener usuarios");
    } else {
      res.json(results);
    }
  });
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
