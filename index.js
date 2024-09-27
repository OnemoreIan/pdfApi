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

//obtenemos las rutas
const direcciones = require('./src/router/direcciones.js');
const consultaEmpleados = require('./src/router/consulta-empleados.js');
const test = require('./src/router/test.js');
const pdf = require('./src/router/generarPDF.js');

// const general = require('../router/general.js');
// const general = require('./src/router/general.js');
// const test = require('../router/test.js');


app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')))

//midelware para el manejo de rutas
app.use(express.static(path.join(__dirname, 'src', 'public')));
// Middleware de manejo de errores



//direcciones html
app.use(direcciones);
app.use(pdf);

//end points api
app.use('/api',test);//probar conexion
app.use('/api',consultaEmpleados);

app.listen(port, () => {
    console.log('Ejecutando servidor en ' + port);
});
