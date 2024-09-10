// import { LitElement, html } from 'lit';
// import { contentDescription } from 'https:/curriculum-pi-one.vercel.app/css/contentDescriptionStyles.js';
import { contentDescription } from '/css/contentDescriptionStyles.js';
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ContentDescription extends LitElement {

    static get styles(){
        return[
            contentDescription
        ];
    }
    
    static properties = {
        name: { type: String },
        old: { type: Number },
        job: { type: String },
        description: { type: String }
    };

    constructor() {
        super();
        this.name = '';
        this.old = 0;
        this.job = '';
        this.description = '';
    }

    
    firstUpdated() {
        this.loadUserData();
    }

    loadUserData() {
        fetch('/userdata')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.name = data.nameUser;
                this.old = data.old;
                this.job = data.phone;
                this.description = data.description;

                /*Dubbug (Eliminar en producción)

                console.log("Nombre:"+this.name);
                console.log("Edad:"+this.old);
                console.log("Trabajo:"+this.job);
                console.log("Descripción:"+this.description);
                
                */

            })
            
            .catch(error => console.error("Error al cargar los datos del usuario: ", error));
    }

    render() {
        return html`
            <div class="content-description">
                <div class="box-left">
                    <img id="img-flor" src="img/grafo.png" alt="Imagen de una flor de colores hecha con líneas que se interseccionan y crean curvas">
                    <p id="decripcion">${this.description}</p>
                </div>
                <div class="box-right">
                    <div class="box-right-1">
                        <p id="nombre">${this.name}</p><br>
                        <p id="puesto">${this.job}</p><br>
                        <p id="edad">${this.old} años</p>
                    </div>
                    <div class="box-right-2">
                        <img id="img-flor-dos" src="img/fondo.png" alt="Imagen de una flor de colores hecha con líneas que se interseccionan y crean curvas">
                        <img id="img-perfil" src="img/perfil_560.png" alt="Imagen de perfil">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('content-description', ContentDescription);