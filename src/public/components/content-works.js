/*Local*/
// import { LitElement, html } from 'lit';
import { contentWork } from '/css/contentWorksStyles.js';

/*Producción (Bucar como manejar un enrutado dinamico)*/
// import { contentWork } from 'https:/curriculum-pi-one.vercel.app/css/contentWorksStyles.js';
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


export class ContentWork extends LitElement {
    
    static get styles(){
        return [
            contentWork
        ];
    }

    static properties = {
        nameJob: { type: String },
        timeLapse: { type: String },
        Job: { type: String },
        description: { type: String }
    };

    constructor() {
        super();
        this.nameJob = 'deafult_name';
        this.timeLapse = 'deafult_time';
        this.Job = 'deafult_job';
        this.description = 'deafult_description';
    }
    
    render() {
        return html`
            <div class="card">
                <div class="card-inner">
                <div class="card-front">
                    <h2>${this.nameJob}</h2>
                    <p>Período de Trabajo: ${this.timeLapse}</p>
                    <p>Puesto: ${this.Job}</p>
                </div>
                <div class="card-back">
                    <h2>Descripción de Actividades</h2>
                    <p>${this.description}</p>
                </div>
                </div>
            </div>
        `;
    }
}


customElements.define('content-work', ContentWork); 