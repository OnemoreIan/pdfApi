import { contentWork } from '/css/contentWorksStyles.js';
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ContentWork extends LitElement {
     
    static get styles(){
        return [
            contentWork
        ];
    }

    static properties = {
        works: { type: Array } // Cambia para manejar múltiples trabajos
    };

    constructor() {
        super();
        this.works = []; // Inicializa la propiedad como un array
    }

    connectedCallback() {
        super.connectedCallback();
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');
    
        if (userId) {
            this.loadDataWorks(userId);
        }
    }

    loadDataWorks(id) {
        fetch(`/user-works/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.works = data; // Asigna todos los trabajos al array `works`
            })
            .catch(error => console.error("Error al cargar los datos del usuario: ", error));
    }

    render() {
        return html`
            <div class="content-works">
                ${this.works.map(work => html`
                    <div class="card">
                        <div class="card-inner">
                        <div class="card-front">
                            <h2>${work.job}</h2>
                            <p>Período de Trabajo: ${work.startDate} hasta ${work.endDate}</p>
                            <p>Puesto: ${work.job}</p>
                        </div>
                        <div class="card-back">
                            <h2>Descripción de Actividades</h2>
                            <p>${work.activities}</p>
                            <h2>Tecnologias usadas</h2>
                            <p>${work.technologys}</p>
                        </div>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('content-works', ContentWork);
