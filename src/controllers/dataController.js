const { query } = require('express');
const mysql = require('mysql');

// Configuración de la conexión MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cv_online",
  password: "",
  port: 3000
});

// Obtención del primer usuario
exports.getUserDefault = (req, res) => {
  const query = 'SELECT * FROM user where idUser = 1'; // Selecciona el primer usuario como predeterminado
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json(results[0]);
    }
  });
};

// Obtención de registros de datos con el Id del usuario
exports.getWorksWithId = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM experience WHERE idUser = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else if (results.length > 0) {
      res.json(results); // Enviar todos los resultados
    } else {
      res.status(404).json({ error: 'No se encontraron datos para este usuario' });
    }
  });
};

// Obtención de datos por Id de usuario
exports.getUserId = (req, res) => {
  const { id } = req.params; // Obtén el id del usuario de los parámetros
  const query = 'SELECT * FROM user WHERE idUser = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json(results[0]);
    }
  });
};

// Obtención de todos los usuarios registrados
exports.getAllUsers = (req, res) => {
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
