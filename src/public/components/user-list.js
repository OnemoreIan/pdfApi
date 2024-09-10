import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class UserList extends LitElement {

    static properties = {
        users: { type: Array }
    };

    constructor() {
        super();
        this.users = [];
    }

    firstUpdated() {
        this.loadUsers();
    }

    loadUsers() {
        fetch('/userdata2')
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
            <table border="1">
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
                             <button @click="${this.goToRegisterUser}">Registrar Usuario</button>
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }

    goToRegisterUser() {
        window.location.href = '/html/registerUser.html'; // Redirige a la página del formulario
    }
}

customElements.define('user-list', UserList);
