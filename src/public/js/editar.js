const { createApp } = Vue;

createApp({

    data() {
        return {
            data: null,
            empleado: {},
            newEmpleado: {
                'puesto':'',
                'telefono': '',
                'edad': '',
                'correo':'',
                'descripcion':''
            },

            experiencias: [],
            newExperiencia: {},
            editExperiencia: [],

            certificaciones: [],
            newCertificacion: {},
            editCertificaciones: [],

            cursos: [],
            newCurso:{},
            editCursos:[],

            idiomas: [],
            newIdoma:{},
            editIdioma:[]

        };
    },
    methods: {

        pop() {
            alert('hi')

        },
        saludar() {
            console.log("profecional");

        },
        mandar() {
            console.log(this.newEmpleado);
            
            alert('Enviado')
        }

    },
    mounted() {
        console.log("Cargue");
        let parametros = new URLSearchParams(window.location.search);

        let id = parametros.get('id');
        console.log(id);

        let ruta = `http://localhost:6060/api/dataEmpleado?id=${id}`;
        fetch(ruta)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.data = res.data;
                this.empleado = res.data.empleado;
                this.experiencias = res.data.experiencias;
                this.certificaciones = res.data.certificaciones;
                this.cursos = res.data.cursos;
                this.idiomas = res.data.idiomas;
                console.log(this.idiomas);
            })
            .catch(err => console.error(err))

    }

}).mount('#app');

