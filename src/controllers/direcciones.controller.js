const path = require('path');
class Direcciones{

    //funcion para obtener todos los colores
    main(req,res){

        res.sendFile(path.join(__dirname, "../public/html/index.html"));

    }

    pagPdf(req,res){

        res.sendFile(path.join(__dirname, "../public/html/pdf.html"));

    }

}

const direccionesC = new Direcciones();

module.exports = direccionesC;