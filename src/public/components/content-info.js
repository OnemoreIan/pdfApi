import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { contentInfoStyles } from "/css/contentInfoStyles.js";

export class ContentInfo extends LitElement{ 
    static get styles(){
        return[
            contentInfoStyles
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
    
    connectedCallback() {
        super.connectedCallback();
    
        // Obtener el parámetro `id` desde la URL
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id'); // Obtiene el valor del parámetro 'id'
    
        if (userId) {
          this.loadData(userId); // Llama a la función con el ID obtenido de la URL
        }
    }

    loadData(id) {
        fetch(`/user-data/${id}`) // Hace el fetch con el ID
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
            })
          .catch(error => console.error("Error al cargar los datos del usuario: ", error));
    }

    render(){
        return html`
            <div class="content-info">
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

customElements.define('content-info', ContentInfo);