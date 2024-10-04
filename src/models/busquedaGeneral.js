export const busquedas = {

    busquedaN : function busquedaNormal(consulta) {
        connection.query(consulta, (err, resultado) => {
    
    
            console.log(resultado[0]);
    
            return resultado
    
    
            res.send(respuesta);
        });
    }
}