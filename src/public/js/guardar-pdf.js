//buscar los datos
async function obtenerDatos(id) {
    let ruta = "http://localhost:6060/api/dataEmpleado?id=" + id;

    let datos;
    await fetch(ruta)
        .then(data => data.json())
        .then(data => {
            console.log(data);

            datos = data.data;
            return data

        })
        .catch(err => {
            console.error(err);

        })

    return datos;
}

// preparacion del pdf
async function convertirPDF(divId) {

    let parametros = new URLSearchParams(window.location.search);

    let id = parametros.get("id");

    // let datos = obtenerDatos(id);
    // console.log(datos);

    // console.log(datos["empleado"]);

    let ruta = "http://localhost:6060/api/dataEmpleado?id=" + id;


    //creamos el contenido
    // datosGenerales();

    await fetch(ruta)
        .then(data => data.json())
        .then(data => {
            let informacion = data.data;

            const nombre = informacion.empleado.nombre;

            datosGenerales(informacion.empleado);

            experiencia(informacion.experiencias);

            // educacion(informacion.educacion);

            certificaciones(informacion.certificaciones);

            cursos(informacion.cursos);

            idiomas(informacion.idiomas);


            console.log(informacion);

            let contenedor = document.getElementById(divId);

            let opciones = {
                filename: `cv de ${nombre}`,
                image: { type: "pdf", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'portrait',
                    margin: {
                        top: 2,
                        rigth: 3,
                        left: 3,
                        bottom: 2
                    }
                }
            };

            var worked = html2pdf().set(opciones).from(contenedor).save();

        })
        .catch(err => console.error(err))


}




// creacion dinamica

function datosGenerales(empleado) {
    // console.log(empleado);
    
    const div = document.createElement("div");
    div.classList.add("mx-3");

    // const div = document.getElementById('principal');

    const p1 = document.createElement("p");
    p1.classList.add("Nombre");
    p1.textContent = empleado.nombre;

    div.appendChild(p1);

    const p2 = document.createElement("p");
    const b = document.createElement("b");
    b.textContent = "puesto";
    p2.appendChild(b);

    div.appendChild(p2);


    // const p3 = document.createElement("p");
    // p3.textContent = `Cuentas en las que ha colaborado en NTT Data: ${cuentas}`;
    /* cuentas.map(item => {

    }); */

    const p4 = document.createElement("p");
    p4.textContent = `Telefono: ${empleado.telefono}`;

    div.appendChild(p4)

    document.getElementById("princial").appendChild(div);

}

// experiencia
function experiencia(experiencia) {
    
    experiencia.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("mx-3");


        const p1 = document.createElement('p');
        p1.textContent = `Nombre de organizacion: ${item.nom_organizacion}`;

        const p2 = document.createElement('p');
        p2.textContent = `Periodo: ${item.periodo}`;

        const p3 = document.createElement('p');
        p3.textContent = `Puesto: ${item.puesto}`;

        const p4 = document.createElement('p');
        p4.textContent = `Actividades: ${item.actividades}`;

        const p5 = document.createElement('p');
        p5.textContent = `Tecnologias: ${item.tecnologias}`;


        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);

        document.getElementById("Experiencia").appendChild(div);

    });
}

//educacino
function educacion(educacion) {
    educacion.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("mx-3");


        const p1 = document.createElement('p');
        p1.textContent = `Nombre del programa: ${item.program}`;

        const p2 = document.createElement('p');
        p2.textContent = `Periodo: ${item.periodo}`;

        const p3 = document.createElement('p');
        p3.textContent = `Institucion: ${item.insti}`;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        document.getElementById("Educacion").appendChild(div);

    });
}

// certificaciones
function certificaciones(certificaciones) {
    // console.log(certificaciones[0]);
    
    certificaciones.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("mx-3");

        const p1 = document.createElement('p');
        p1.textContent = `Nombre de las certificaciones: ${item.nom_certificacion}`;

        const p2 = document.createElement('p');
        p2.textContent = `Periodo: ${item.periodo}`;

        const p3 = document.createElement('p');
        p3.textContent = `Institucion: ${item.institucion}`;

        const p4 = document.createElement('p');
        p3.textContent = `Vigencia: ${item.vigencia}`;


        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);

        document.getElementById("Certificaciones").appendChild(div);

    });
}

// cursos
function cursos(cursos) {
    // console.log(cursos[0]);
    
    cursos.forEach(item => {

        const tr = document.createElement("tr");

        const td1 = document.createElement('td');
        td1.setAttribute('scope', 'row');
        td1.textContent = `${item.nom_curso}`;

        const td2 = document.createElement('td');
        td2.textContent = `${item.institucion}`;

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById("Cursos").appendChild(tr);

    });
}

// idiomas
function idiomas(idiomas) {
    // console.log(idiomas[0]);
    
    idiomas.forEach(item => {

        const tr = document.createElement("tr");

        const td1 = document.createElement('td');
        td1.setAttribute('scope', 'row');
        td1.textContent = `${item.idioma}`;

        const td2 = document.createElement('td');
        td2.textContent = `${item.nivel}`;

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById("Idiomas").appendChild(tr);

    });
}





window.addEventListener('load', function () {
    // Este código se ejecuta cuando la página completa ha cargado, incluidas imágenes y otros recursos
    console.log('Todos los recursos han terminado de cargarse.');

    convertirPDF("plan-id");
});
