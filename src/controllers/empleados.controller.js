const { query } = require('express');

const { sequelize } = require('../db/conection.js');
const { empleadoM } = require('../models/empleados.modelo.js');
const { idiomasM } = require('../models/idiomas.modelo.js');
const { experienciasM } = require('../models/experiencias.modelo.js');
const { habilidadesBM } = require('../models/habilidadesB.modelo.js');
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

      let habilidadesBlandas = await habilidadesBM.findAll();

      // let educacion = await educacionM.findAll(condicion);

      let certificaciones = await certificacionesM.findAll(condicion);

      let puestos = await puestosM.findAll(condicion);

      let cursos = await cursosM.findAll(condicion);


      let respuesta = {
        'empleado': empleado,
        'idiomas': idiomas,
        'experiencias': experiencias,
        'habilidadesB': habilidadesBlandas,
        // 'educacion': educacion,
        'certificaciones': certificaciones,
        'puestos': puestos,
        'cursos': cursos
      }
      // console.log(respuesta);


      res.send({ 'data': respuesta });

    } catch (error) {
      console.error("error en la consulta");
      
      console.error(error);

    }
  })();
};

// actualizar datos del empleado
exports.updateDataEmpleado = (req, res) => {
  (async () => {
    try {
      console.log(req.body);

      const id_empleado = req.body.id_empleado;
      const correo = req.body.correo;
      const descripcion = req.body.descripcion;
      const edad = req.body.edad;
      const puesto = req.body.puesto;
      const telefono = req.body.telefono;

      await sequelize.sync();

      await empleadoM.update({
        id_empleado: id_empleado,
        puesto: puesto,
        telefono: telefono,
        descripcion: descripcion,
        edad: edad,
        correo: correo
      }, {
        where: {
          id_empleado: id_empleado
        }
      })

      // const empleado = await empleadoM.findAll({ where: { id_empleado: id_empleado } });

      res.send({ 'respuesta': 'Cambio exitoso' })

    } catch (error) {
      console.error(error);

    }
  })();
};

// actualizar experiencia del empleado
exports.updateXpEmpleado = (req, res) => {
  (async () => {
    try {
      // console.log(req.body);

      const nom_organizacion = req.body.nom_organizacion;
      const puesto = req.body.puesto;
      const periodo = req.body.periodo;
      const tecnologias = req.body.tecnologias;
      const actividades = req.body.actividades;
      const id_experiencia = req.body.id_experiencia;


      await sequelize.sync();

      await experienciasM.update({
        nom_organizacion: nom_organizacion,
        periodo: periodo,
        puesto: puesto,
        actividades: actividades,
        tecnologias: tecnologias
      }, {
        where: {
          id_experiencia: id_experiencia
        }
      })

      // const empleado = await empleadoM.findAll({ where: { id_empleado: id_empleado } });

      res.send({ 'respuesta': 'Cambio exitoso' })

    } catch (error) {
      console.error(error);

    }
  })();
};

// actualizar certificacion del empleado
exports.updateCertiEmpleado = (req, res) => {
  (async () => {
    try {
      console.log(req.body);

      const id_certificacion = req.body.id_certificacion;
      const nom_certificacion = req.body.nom_certificacion;
      const periodo = req.body.periodo;
      const institucion = req.body.institucion;
      const vigencia = req.body.vigencia;


      await sequelize.sync();

      await certificacionesM.update({
        nom_certificacion: nom_certificacion,
        periodo: periodo,
        institucion: institucion,
        vigencia: vigencia
      }, {
        where: {
          id_certificacion: id_certificacion
        }
      })

      // const empleado = await empleadoM.findAll({ where: { id_empleado: id_empleado } });

      res.send({ 'respuesta': 'Cambio exitoso' })

    } catch (error) {
      console.error(error);

    }
  })();
};

// actualizar de curso del empleado
exports.updateCursoEmpleado = (req, res) => {
  (async () => {
    try {
      console.log(req.body);

      const id_curso = req.body.id_curso;
      const nom_curso = req.body.nom_curso;
      const periodo = req.body.periodo;
      const institucion = req.body.institucion;
      const vigencia = req.body.vigencia;

      await sequelize.sync();

      await cursosM.update({
        nom_curso: nom_curso,
        periodo: periodo,
        institucion: institucion,
        vigencia: vigencia
      }, {
        where: {
          id_curso: id_curso
        }
      })

      res.send({ 'respuesta': 'Cambio exitoso' })

    } catch (error) {
      console.error(error);

    }
  })();
};

// actualizar idiomas del empleado
exports.updateIdiomaEmpleado = (req, res) => {
  (async () => {
    try {
      // console.log(req.body);

      const institucion = req.body.institucion;
      const nivel = req.body.nivel;
      const idioma = req.body.idioma;
      const id_idioma = req.body.id_idioma;

      await sequelize.sync();

      await idiomasM.update({
        idioma: idioma,
        nivel: nivel,
        institucion: institucion,
      }, {
        where: {
          id_idioma: id_idioma
        }
      })

      res.send({ 'respuesta': 'Cambio exitoso' })

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
