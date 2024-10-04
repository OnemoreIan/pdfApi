//buscar los datos
async function obtenerDatos(id) {
    let ruta = "http://localhost:6060/api/dataEmpleado?id=" + id;

    let datos;
    await fetch(ruta)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            datos = data.data;
        })
        .catch(err => {
            console.error(err);

        })

    return datos;
}

// preparacion del pdf
function convertirPDF(divId) {

    let parametros = new URLSearchParams(window.location.search);

    let id = parametros.get("id");

    let datos = obtenerDatos(id);
    console.log(datos);
    


    //creamos el contenido
    // datosGenerales();



    let contenedor = document.getElementById(divId);

    let opciones = {
        filename: `cv de ${name}`,
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
}




// creacion dinamica

function datosGenerales() {
    const div = document.createElement("div");
    div.classList.add("mx-3");

    const p1 = document.createElement("p");
    p1.classList.add("Nombre");
    p1.textContent = nombre;

    const p2 = document.createElement("p");
    const b = document.createElement("b");
    b.textContent = "puesto";
    p2.appendChild(b);


    const p3 = document.createElement("p");
    p3.textContent = `Cuentas en las que ha colaborado en NTT Data: ${cuentas}`;

    const p4 = document.createElement("p");
    p4.textContent = `Telefono: ${telefono}`;

}

// experiencia
function experiencia(experiencia) {
    experiencia.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("mx-3");


        const p1 = document.createElement('p');
        p1.textContent = `Nombre de organizacion: ${item.nomOrg}`;

        const p2 = document.createElement('p');
        p2.textContent = `Periodo: ${item.periodo}`;

        const p3 = document.createElement('p');
        p3.textContent = `Puesto: ${item.puesto}`;

        const p4 = document.createElement('p');
        p4.textContent = `Actividades: ${item.actividades}`;

        const p5 = document.createElement('p');
        p5.textContent = `Tecnologias: ${item.tecno}`;


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
    certificaciones.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("mx-3");

        const p1 = document.createElement('p');
        p1.textContent = `Nombre de las certificaciones: ${item.nomCerti}`;

        const p2 = document.createElement('p');
        p2.textContent = `Periodo: ${item.periodo}`;

        const p3 = document.createElement('p');
        p3.textContent = `Institucion: ${item.insti}`;

        const p4 = document.createElement('p');
        p3.textContent = `Vigencia: ${item.vigencia}`;


        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        document.getElementById("Certificaciones").appendChild(div);

    });
}

// cursos
function cursos(cursos) {
    cursos.forEach(item => {

        const tr = document.createElement("tr");

        const td1 = document.createElement('td');
        td1_1.setAttribute('scope', 'row');
        td1_1.textContent = `${item.nombre}`;

        const td2 = document.createElement('td');
        td1_2.textContent = `${item.plataforma}`;

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById("Cursos").appendChild(div);

    });
}

// idiomas
function idiomas(idiomas) {
    idiomas.forEach(item => {

        const tr = document.createElement("tr");

        const td1 = document.createElement('td');
        td1_1.setAttribute('scope', 'row');
        td1_1.textContent = `${item.nombre}`;

        const td2 = document.createElement('td');
        td1_2.textContent = `${item.nivel}`;

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById("Idiomas").appendChild(div);

    });
}





window.addEventListener('load', function () {
    // Este código se ejecuta cuando la página completa ha cargado, incluidas imágenes y otros recursos
    console.log('Todos los recursos han terminado de cargarse.');

    convertirPDF("plan-id");
});
