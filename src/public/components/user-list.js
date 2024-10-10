import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { userList } from '/css/userListStyles.js';

let rutaUsuarios ="http://localhost:6060/api/empleados";

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
        fetch(rutaUsuarios)
            .then(data => data.json())
            .then(data => {
                console.log('Datos recibidos:', data)
                this.users = data.data;
            })
            .catch(error => console.error('Error fetching users:', error));
    }
    
    render() {
        return html`
            <div class="container-user-list">
                <table class="table-users-list">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Edad</th>
                            <th>Descripción</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.users.map(user => html`
                            <tr>
                                <td>${user.nombre}</td>
                                <td>${user.telefono}</td>
                                <td>${user.edad}</td>
                                <td>${user.descripcion}</td>
                                <td>${user.correo}</td>
                                <td>
                                    <a href="/pdf?id=${user.id_empleado}" target="_blank" rel="direccion para descargar cv">Descargar Cv</a>
                                    <a href="/editar?id=${user.id_empleado}" rel="direccion para editar perfil">Editar</a>
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
    
    goToInfo(idUser) {
        window.location.href = `/user-info`; // Redirige a la página del formulario
    }
}

customElements.define('user-list', UserList);
