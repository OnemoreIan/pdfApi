const mysql = require('mysql');

// Configuración de la conexión MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cv_online",
  password: "",
  port: 3000

  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.KEY,
  // database: process.env.DATABASE
});

// Función para obtener datos de la base de datos
exports.getUserData = (req, res) => {
  const query = 'SELECT * FROM user WHERE idUser = 1';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json(results[0]);
    }
  });
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