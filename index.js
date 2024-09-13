const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.APP_PORT || 6060;

// Middleware para procesar el cuerpo de las solicitudes POST en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const general = require('../router/general.js');
const direcciones = require('./src/router/direcciones.js');
const general = require('./src/router/general.js');
const consulUsuarios = require('./src/router/consulta-usuarios.js');
// const test = require('../router/test.js');
const test = require('./src/router/test.js');

const pdf = require('./src/router/generarPDF.js');

app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src', 'public')));



//uso de rutas
app.use(direcciones);

//api
app.use('/api',test);
app.use('/api',consulUsuarios);
app.use(pdf);

app.listen(port, () => {
    console.log('Ejecutando servidor en ' + port);
});
