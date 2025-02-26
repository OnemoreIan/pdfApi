const { createApp } = Vue;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
// Toast.fire({
//     icon: "success",
//     title: "Signed in successfully"
// });




createApp({

    data() {
        return {
            urlConsulta: '',
            data: null,
            empleado: {},
            editEmpleado: {
                'puesto': '',
                'telefono': '',
                'edad': '',
                'correo': '',
                'descripcion': '',
                'id_empleado': 0
            },

            experiencias: [],
            editExperiencia: {
                'actividades': '',
                'nom_organizacion': '',
                'periodo': '',
                'puesto': '',
                'tecnologias': '',
                'id_experiencia': 0
            },

            certificaciones: [],
            editCertificaciones: {

            },

            cursos: [],
            editCursos: {

            },

            idiomas: [],
            editIdioma: {

            }

        };
    },
    methods: {
        async cargaContenido() {
            let ruta = await this.urlConsulta;
            await fetch(ruta)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.data = res.data;
                    this.empleado = res.data.empleado;
                    this.experiencias = res.data.experiencias;
                    this.certificaciones = res.data.certificaciones;
                    this.cursos = res.data.cursos;
                    this.idiomas = res.data.idiomas;


                })
                .catch(err => console.error(err))
        },

        saludar() {
            console.log("profecional");

        },

        mandar() {
            console.log(this.editEmpleado);

            alert('Enviado')
        },

        editarDatosEmpleado(datos) {
            let origen = datos;
            Swal.fire({
                icon: "question",
                confirmButtonColor: '#2cba2c',
                confirmButtonText: 'Guardar',
                showDenyButton: true,
                denyButtonText: 'Cancelar',
                html: `
                        <h4>Datos generales de ${datos.nombre}</h4>

                        <div class="text-start mb-1">
                            <p>Puesto</p>
                            <input id="puesto" class="form-control" type="text" placeholder="${datos.puesto}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Telefono</p>
                            <input id="telefono" class="form-control" minlength="10" maxlength="10" type="number" placeholder="${datos.telefono}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Edad</p>
                            <input id="edad" class="form-control" type="number" placeholder="${datos.edad}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Correo</p>
                            <input id="correo" class="form-control" type="email" placeholder="${datos.correo}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Descripcion</p>
                            <input id="descripcion" maxlength="300" class="form-control" type="text" placeholder="${datos.descripcion}">
                        </div>
                        

                        <input id="id_empleado" type="number" value="${datos.id_empleado}" hidden>
                    `,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {

                        const url = `http://localhost:6060/api/actualizar/empleado`;

                        let puesto = await document.getElementById('puesto').value;
                        let telefono = await document.getElementById('telefono').value;
                        let edad = await document.getElementById('edad').value;
                        let correo = await document.getElementById('correo').value;
                        let descripcion = await document.getElementById('descripcion').value;
                        let id_empleado = await document.getElementById('id_empleado').value;

                        let dataEnviar = {
                            'puesto': null,
                            'telefono': null,
                            'edad': null,
                            'correo': null,
                            'descripcion': null,
                            'id_empleado': null
                        };


                        (puesto.length == 0) ? dataEnviar.puesto = origen.puesto : dataEnviar.puesto = puesto;
                        (telefono.length == 0) ? dataEnviar.telefono = origen.telefono : dataEnviar.telefono = telefono;
                        (edad.length == 0) ? dataEnviar.edad = origen.edad : dataEnviar.edad = edad;
                        (correo.length == 0) ? dataEnviar.correo = origen.correo : dataEnviar.correo = correo;

                        (descripcion.length == 0) ? dataEnviar.descripcion = origen.descripcion : dataEnviar.descripcion = descripcion;


                        dataEnviar.id_empleado = id_empleado;
                        console.log(dataEnviar);



                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(dataEnviar)
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res);

                                Toast.fire({
                                    icon: "success",
                                    title: res.respuesta
                                });
                                this.cargaContenido();
                            })

                        // console.log(response.json());
                        // console.log(datos);


                        /* if (!response.ok) {
                            return Swal.showValidationMessage(`
                            ${JSON.stringify(await response.json())}
                          `);
                        } */
                        // return response.json();
                    } catch (error) {
                        Toast.fire({
                            icon: "error",
                            title: "Hubo un problema"
                        });
                    }
                }
            });
        },

        editarExperiencias(experiencia) {
            let origen = experiencia;
            Swal.fire({
                icon: "question",
                confirmButtonColor: '#2cba2c',
                confirmButtonText: 'Guardar',
                showDenyButton: true,
                denyButtonText: 'Cancelar',
                html: `
                        <h4>Editar experiencia</h4>

                        <div class="text-start mb-1">
                            <p>Organizacion</p>
                            <input id="xp_nom_org" class="form-control" type="text" placeholder="${origen.nom_organizacion}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Puesto</p>
                            <input id="xp_puesto" class="form-control" type="text" placeholder="${origen.puesto}">
                        </div>
                        
                        <div class="text-start mb-2">
                            <span>Periodo</span>

                            <div class="row">
                                <div class="col-md-6">
                                    <span>Inicio</span>
                                    <input id="xp_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>
                                    
                                <div class="col-md-6">
                                    <span>Fin</span>
                                    <input id="xp_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>

                            </div>

                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Tecnologias</p>
                            <input id="xp_tecno" class="form-control" type="email" placeholder="${origen.tecnologias}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Actividades</p>
                            <input id="xp_acti" maxlength="300" class="form-control" type="text" placeholder="${origen.actividades}">
                        </div>
                        

                        <input id="id_experiencia" type="number" value="${origen.id_experiencia}" hidden>
                    `,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {

                        const url = `http://localhost:6060/api/actualizar/experiencia`;

                        let nom_organizacion = await document.getElementById('xp_nom_org').value;
                        let puesto = await document.getElementById('xp_puesto').value;
                        let periodo = await document.getElementById('xp_periodo').value;
                        let tecnologias = await document.getElementById('xp_tecno').value;
                        let actividades = await document.getElementById('xp_acti').value;
                        let id_experiencia = await document.getElementById('id_experiencia').value;

                        let dataEnviar = {
                            'nom_organizacion': null,
                            'puesto': null,
                            'periodo': null,
                            'tecnologias': null,
                            'actividades': null,
                            'id_experiencia': null
                        };


                        (nom_organizacion.length == 0) ? dataEnviar.nom_organizacion = origen.nom_organizacion : dataEnviar.nom_organizacion = nom_organizacion;
                        (puesto.length == 0) ? dataEnviar.puesto = origen.puesto : dataEnviar.puesto = puesto;
                        (periodo.length == 0) ? dataEnviar.periodo = origen.periodo : dataEnviar.periodo = periodo;
                        (tecnologias.length == 0) ? dataEnviar.tecnologias = origen.tecnologias : dataEnviar.tecnologias = tecnologias;
                        (actividades.length == 0) ? dataEnviar.actividades = origen.actividades : dataEnviar.actividades = actividades;


                        dataEnviar.id_experiencia = id_experiencia;
                        console.log(dataEnviar);



                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(dataEnviar)
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res);

                                Toast.fire({
                                    icon: "success",
                                    title: res.respuesta
                                });
                                this.cargaContenido();
                            })

                        // console.log(response.json());
                        // console.log(datos);


                        /* if (!response.ok) {
                            return Swal.showValidationMessage(`
                            ${JSON.stringify(await response.json())}
                          `);
                        } */
                        // return response.json();
                    } catch (error) {
                        Toast.fire({
                            icon: "error",
                            title: "Hubo un problema"
                        });
                    }
                }
            });
        },

        editarCertificacion(certificacion) {
            let origen = certificacion;
            Swal.fire({
                icon: "question",
                confirmButtonColor: '#2cba2c',
                confirmButtonText: 'Guardar',
                showDenyButton: true,
                denyButtonText: 'Cancelar',
                html: `
                        <h4>Editar certificacion</h4>

                        <div class="text-start mb-1">
                            <p>Institucion</p>
                            <input id="cer_institucion" class="form-control" type="text" placeholder="${origen.institucion}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Nombre</p>
                            <input id="cer_nombre" class="form-control" type="text" placeholder="${origen.nom_certificacion}">
                        </div>
                        
                        <div class="text-start mb-2">
                            <span>Periodo</span>

                            <div class="row">
                                <div class="col-md-6">
                                    <span>Inicio</span>
                                    <input id="cer_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>
                                    
                                <div class="col-md-6">
                                    <span>Fin</span>
                                    <input id="cer_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>

                            </div>

                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Vigencia</p>
                            <input id="cer_vigencia" class="form-control" type="text" placeholder="${origen.vigencia}">
                        </div>
                        
                        <input id="id_certificacion" type="number" value="${origen.id_certificacion}" hidden>
                    `,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {

                        const url = `http://localhost:6060/api/actualizar/certificacion`;

                        let institucion = await document.getElementById('cer_institucion').value;
                        let nom_certificacion = await document.getElementById('cer_nombre').value;
                        let periodo = await document.getElementById('cer_periodo').value;
                        let vigencia = await document.getElementById('cer_vigencia').value;
                        let id_certificacion = await document.getElementById('id_certificacion').value;

                        let dataEnviar = {
                            'nom_certificacion': null,
                            'periodo': null,
                            'institucion': null,
                            'vigencia': null,
                            'id_certificacion': null
                        };


                        (institucion.length == 0) ? dataEnviar.institucion = origen.institucion : dataEnviar.institucion = institucion;
                        (nom_certificacion.length == 0) ? dataEnviar.nom_certificacion = origen.nom_certificacion : dataEnviar.nom_certificacion = nom_certificacion;
                        (periodo.length == 0) ? dataEnviar.periodo = origen.periodo : dataEnviar.periodo = periodo;
                        (vigencia.length == 0) ? dataEnviar.vigencia = origen.vigencia : dataEnviar.vigencia = vigencia;


                        dataEnviar.id_certificacion = id_certificacion;
                        console.log(dataEnviar);



                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(dataEnviar)
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res);

                                Toast.fire({
                                    icon: "success",
                                    title: res.respuesta
                                });
                                this.cargaContenido();
                            })

                        // console.log(response.json());
                        // console.log(datos);


                        /* if (!response.ok) {
                            return Swal.showValidationMessage(`
                            ${JSON.stringify(await response.json())}
                          `);
                        } */
                        // return response.json();
                    } catch (error) {
                        Toast.fire({
                            icon: "error",
                            title: "Hubo un problema"
                        });
                    }
                }
            });
        },

        editarCursos(curso) {
            console.log(curso);
            let origen = curso;
            Swal.fire({
                icon: "question",
                confirmButtonColor: '#2cba2c',
                confirmButtonText: 'Guardar',
                showDenyButton: true,
                denyButtonText: 'Cancelar',
                html: `
                        <h4>Editar experiencia</h4>

                        <div class="text-start mb-1">
                            <p>Institucion</p>
                            <input id="cur_insti" class="form-control" type="text" placeholder="${origen.institucion}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Nombre curso</p>
                            <input id="cur_nom_cur" class="form-control" type="text" placeholder="${origen.nom_curso}">
                        </div>
                        
                        <div class="text-start mb-2">
                            <span>Periodo</span>

                            <div class="row">
                                <div class="col-md-6">
                                    <span>Inicio</span>
                                    <input id="cur_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>
                                    
                                <div class="col-md-6">
                                    <span>Fin</span>
                                    <input id="xp_periodo" class="form-control" type="date" placeholder="${origen.periodo}">
                                </div>

                            </div>

                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Vigencia</p>
                            <input id="cur_vigen" class="form-control" type="email" placeholder="${origen.vigencia}">
                        </div>
                        

                        <input id="id_curso" type="number" value="${origen.id_curso}" hidden>
                    `,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {

                        const url = `http://localhost:6060/api/actualizar/curso`;

                        let institucion = await document.getElementById('cur_insti').value;
                        let nom_curso = await document.getElementById('cur_nom_cur').value;
                        let periodo = await document.getElementById('cur_periodo').value;
                        let vigencia = await document.getElementById('cur_vigen').value;
                        let id_curso = await document.getElementById('id_curso').value;

                        let dataEnviar = {
                            'id_curso': null,
                            'nom_curso': null,
                            'periodo': null,
                            'institucion': null,
                            'vigencia': null,
                        };

                        (vigencia.length == 0) ? dataEnviar.vigencia = origen.vigencia : dataEnviar.vigencia = vigencia;
                        (institucion.length == 0) ? dataEnviar.institucion = origen.institucion : dataEnviar.institucion = institucion;
                        (periodo.length == 0) ? dataEnviar.periodo = origen.periodo : dataEnviar.periodo = periodo;
                        (nom_curso.length == 0) ? dataEnviar.nom_curso = origen.nom_curso : dataEnviar.nom_curso = nom_curso;


                        dataEnviar.id_curso = id_curso;
                        console.log(dataEnviar);



                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(dataEnviar)
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res);

                                Toast.fire({
                                    icon: "success",
                                    title: res.respuesta
                                });
                                this.cargaContenido();
                            })

                        // console.log(response.json());
                        // console.log(datos);


                        /* if (!response.ok) {
                            return Swal.showValidationMessage(`
                            ${JSON.stringify(await response.json())}
                          `);
                        } */
                        // return response.json();
                    } catch (error) {
                        Toast.fire({
                            icon: "error",
                            title: "Hubo un problema"
                        });
                    }
                }
            });
        },

        editarIdiomas(idioma) {
            let origen = idioma;
            Swal.fire({
                icon: "question",
                confirmButtonColor: '#2cba2c',
                confirmButtonText: 'Guardar',
                showDenyButton: true,
                denyButtonText: 'Cancelar',
                html: `
                        <h4>Editar idioma</h4>

                        <div class="text-start mb-1">
                            <p>Institucion</p>
                            <input id="idi_idioma" class="form-control" type="text" placeholder="${origen.idioma}">
                        </div>
                        
                        <div class="text-start mb-1">
                            <p>Nombre curso</p>
                            <input id="idi_institucion" class="form-control" type="text" placeholder="${origen.institucion}">
                        </div>
                        
                        
                        <div class="text-start mb-1">
                            <p>Vigencia</p>
                            <input id="idi_nivel" class="form-control" type="email" placeholder="${origen.nivel}">
                        </div>
                        

                        <input id="id_idioma" type="number" value="${origen.id_idioma}" hidden>
                    `,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {

                        const url = `http://localhost:6060/api/actualizar/idiomas`;

                        let idioma = await document.getElementById('idi_idioma').value;
                        let institucion = await document.getElementById('idi_institucion').value;
                        let nivel = await document.getElementById('idi_nivel').value;
                        let id_idioma = await document.getElementById('id_idioma').value;

                        let dataEnviar = {
                            'idioma': null,
                            'nivel': null,
                            'institucion': null,
                            'id_idioma': null,
                        };

                        (idioma.length == 0) ? dataEnviar.idioma = origen.idioma : dataEnviar.idioma = idioma;
                        (institucion.length == 0) ? dataEnviar.institucion = origen.institucion : dataEnviar.institucion = institucion;
                        (nivel.length == 0) ? dataEnviar.nivel = origen.nivel : dataEnviar.nivel = nivel;

                        dataEnviar.id_idioma = id_idioma;
                        console.log(dataEnviar);



                        await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(dataEnviar)
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res);

                                Toast.fire({
                                    icon: "success",
                                    title: res.respuesta
                                });
                                this.cargaContenido();
                            })

                        // console.log(response.json());
                        // console.log(datos);


                        /* if (!response.ok) {
                            return Swal.showValidationMessage(`
                            ${JSON.stringify(await response.json())}
                          `);
                        } */
                        // return response.json();
                    } catch (error) {
                        Toast.fire({
                            icon: "error",
                            title: "Hubo un problema"
                        });
                    }
                }
            });
        },


    },
    mounted() {
        console.log("Cargue");
        let parametros = new URLSearchParams(window.location.search);

        let id = parametros.get('id');
        console.log(id);

        let ruta = `http://localhost:6060/api/dataEmpleado?id=${id}`;
        this.urlConsulta = ruta;
        this.cargaContenido();

    }

}).mount('#app');

