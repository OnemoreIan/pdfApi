const express = require('express');
const path = require('path');
const mipdf = require('jspdf');

const generarPDF = express.Router();

generarPDF.get('/img', (req, res) => {

    res.sendFile(path.join(__dirname, "../img/perro.jpg"))

})

generarPDF.get('/ping', (req, res) => {
    res.send({ "Respuesta": "Pong" });
})

generarPDF.get('/pdf', (req, res) => {
    const doc = new mipdf.jsPDF();

    doc.text("hola estoy funcionando", 10, 10);

    doc.autoTable({
        head:[
            ['hola','tabla','saludo']
        ],
        body:[
            [
                'inicio de tabala',
                'hectaria',
                'sin sentido'
            ]
        ]
    });

    doc.text("de manera excelente", 10, 10);
    // doc.save("cv creado.pdf");

    // const respuesta = doc.output();

    // Generar el PDF en formato base64
    const respuesta = doc.output('datauristring');

    // Extraer el contenido base64 después de la coma
    const pdfData = respuesta.split(',')[1];

    // Convertir el contenido base64 a un buffer
    const pdfBuffer = Buffer.from(pdfData, 'base64');

    // Establecer el encabezado Content-Type para indicar un archivo PDF
    res.setHeader('Content-Type', 'application/pdf');

    // Adjuntar el archivo con un nombre de archivo sugerido
    res.setHeader('Content-Disposition', 'attachment; filename=CVempleado.pdf');

    // Enviar el archivo PDF como respuesta
    res.send(pdfBuffer);


    // res.sendFile(doc);
});


module.exports = generarPDF;