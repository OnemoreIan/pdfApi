// import { LitElement, html } from 'lit';
// import { contentDescription } from 'https:/curriculum-pi-one.vercel.app/css/contentDescriptionStyles.js';
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { contentDescription } from '/css/contentDescriptionStyles.js';

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
        description: { type: String },
        photo: {type: String}
    };

    constructor() {
        super();
        this.name = '';
        this.old = 0;
        this.job = ''; //hay que hace un JOIN para obtener este dato
        this.description = '';
        this.photo = '';
        this.phone = '';
    }

    
    firstUpdated() {
        this.loadUserDataContent();
    }

    loadUserDataContent() {
        fetch('/user-default')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.name = data.nameUser;
                this.phone = data.phone;
                this.old = data.old;
                this.photo = data.photo;
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
                    <!--img id="img-background-rigth" src="img/background-ntt.png" alt="Imagen de una flor de colores hecha con líneas que se interseccionan y crean curvas"-->
                    <p id="decripcion">${this.description}</p>
                </div>
                <div class="box-right">
                    <div class="box-right-1">
                        <p id="name">${this.name}</p><br>
                        <p id="job">Programador</p><br>
                        <p id="old">${this.old} años</p>
                        <p id="phone">${this.phone}</p>
                    </div>
                    <div class="box-right-2">
                        <!--img id="img-background-left" src="img/fondo.png" alt="Imangen de fondo"-->
                        <img id="img-user" src="/img/${this.photo}" alt="Imagen de perfil">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('content-description', ContentDescription);