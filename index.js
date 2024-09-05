const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 6060;

// const general = require('../router/general.js');
const direcciones = require('./src/router/direcciones.js');
const general = require('./src/router/general.js');
// const test = require('../router/test.js');
const test = require('./src/router/test.js');

const pdf = require('./src/router/generarPDF.js');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

//uso de rutas
app.use(direcciones);

//api
app.use('/api',test);
app.use(general);
app.use(pdf);

app.listen(port, () => {
    console.log('Ejecutando servidor en ' + port);
});
