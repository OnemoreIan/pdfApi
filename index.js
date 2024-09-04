const express = require('express');
const cors = require('cors');
const app = express();
const port = 6060;

// const general = require('../router/general.js');
const general = require('./src/router/general.js');
// const test = require('../router/test.js');
const test = require('./src/router/test.js');

const pdf = require('./src/router/generarPDF.js');

app.use(cors());

//uso de rutas
app.use(test);
app.use(general);
app.use(pdf);

app.listen(port, () => {
    console.log('Ejecutando servidor en ' + port);
});
