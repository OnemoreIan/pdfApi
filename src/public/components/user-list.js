import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { userList } from '/css/userListStyles.js';
export class UserList extends LitElement {
    //Estilos
    static get styles(){
        return[
            userList
        ];
    }
    static properties = {
        users: { type: Array }
    };

    constructor() {
        super();
        this.users = [];
    }

    firstUpdated() {
        this.loadListUsers();
    }

    loadListUsers() {
        fetch('/all-data-users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data)
                this.users = data;
            })
            .catch(error => console.error('Error fetching users:', error));
    }
    
    render() {
        return html`
            <div class="container-user-list">
                <table class="table-users-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Edad</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.users.map(user => html`
                            <tr>
                                <td>${user.idUser}</td>
                                <td>${user.nameUser}</td>
                                <td>${user.phone}</td>
                                <td>${user.old}</td>
                                <td>${user.description}</td>
                                <td>
                                    <button @click="${ () => this.goToInfo(user.idUser)}">Ver usuario </button>
                                    <button @click="${ () => this.printCV()}">Imprimir</button>
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
    
    goToInfo(idUser) {
        window.location.href = `/html/user-info.html?id=${idUser}`; // Redirige a la página del formulario
    }

    printCV(){
        //console.log('User registered:', data);
        alert('El cv se imprimio con éxito');
    }
}

customElements.define('user-list', UserList);
