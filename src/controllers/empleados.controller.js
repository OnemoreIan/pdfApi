const { query } = require('express');

const { sequelize } = require('../db/conection.js');
const { empleadoM } = require('../models/empleados.modelo.js');
const { idiomasM } = require('../models/idiomas.modelo.js');
const { experienciasM } = require('../models/experiencias.modelo.js');
const { educacionM } = require('../models/educacion.modelo.js');
const { certificacionesM } = require('../models/certificaciones.modelo.js');
const { puestosM } = require('../models/puestos.modelo.js');
const { cursosM } = require('../models/cursos.modelo.js');

// Funciónes para obtener datos de la base de datos


//obtener un solo usuario
exports.getOneUser = (req, res) => {

  (async () => {

    try {

      let id = req.query.id;
      await sequelize.sync();

      const consutla = await empleadoM.findOne({
        where: {
          id_empleado: id
        }
      })

      res.send({ 'data': consutla });
    } catch (error) {
      console.error(error);

    }

  })();

};

//obtener todos los resultados
exports.getAllUsers = (req, res) => {
  (async () => {
    try {

      await sequelize.sync();

      const consulta = await empleadoM.findAll();

      res.send({ 'data': consulta });

    } catch (error) {
      console.error(error);

    }
  })();

};

// obtener todos los datos del empleado
exports.getFullDataUser = (req, res) => {
  (async () => {
    try {
      let id = req.query.id;

      await sequelize.sync();

      let condicion = await { where: { id_empleado: id } };


      // obtenemos todos los datos del empleado
      let empleado = await empleadoM.findOne(condicion);

      let idiomas = await idiomasM.findAll(condicion);

      let experiencias = await experienciasM.findAll(condicion);

      let educacion = await educacionM.findAll(condicion);

      let certificaciones = await certificacionesM.findAll(condicion);

      let puestos = await puestosM.findAll(condicion);

      let cursos = await cursosM.findAll(condicion);


      let respuesta = {
        'empleado': empleado,
        'idiomas': idiomas,
        'experiencias': experiencias,
        'educacion': educacion,
        'certificaciones': certificaciones,
        'puestos': puestos,
        'cursos': cursos
      }
      // console.log(respuesta);


      res.send({ 'data': respuesta });

    } catch (error) {
      console.error(error);

    }
  })();
};

// actualizar los datos del empleado
exports.updateDataUser = (req, res) => {
  (async () => {
    try {
      const id_empleado = req.query.id_empleado;
      const correo = req.query.correo;
      const descripcion = req.query.descripcion;
      const edad = req.query.edad;
      const puesto = req.query.puesto;
      const telefono = req.query.telefono;

      


      await sequelize.sync();

      await empleadoM.update({
        id_empleado: id_empleado,
        puesto: puesto,
        telefono: telefono,
        descripcion: descripcion,
        edad: edad,
        correo: correo
      }, {
        where:{ 
          id_empleado: id_empleado
        }
      })

      const empleado = await empleadoM.findAll({where: {id_empleado:id_empleado}});

      res.send({'data': empleado})

    } catch (error) {
      console.error(error);

    }
  })();
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
