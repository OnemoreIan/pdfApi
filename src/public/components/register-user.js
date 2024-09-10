import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class RegisterUser extends LitElement {
  static get styles() {
    return css`
      .form-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      .form-field {
        margin-bottom: 15px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input[type="text"], input[type="email"], input[type="number"], textarea {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
      }
      button {
        padding: 10px 15px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
      }
    `;
  }

  static properties = {
    nameUser: { type: String },
    phone: { type: String },
    old: { type: Number },
    emailUser: { type: String },
    photo: { type: String },
    description: { type: String }
  };

  constructor() {
    super();
    this.nameUser = '';
    this.phone = '';
    this.old = 0;
    this.emailUser = '';
    this.photo = '';
    this.description = '';
  }

  handleInput(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  submitForm() {
    const userData = {
      nameUser: this.nameUser,
      phone: this.phone,
      old: this.old,
      emailUser: this.emailUser,
      photo: this.photo,
      description: this.description
    };

    fetch('/register-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('User registered:', data);
        alert('Usuario registrado con éxito');
      })
      .catch(error => console.error('Error registrando usuario:', error));
  }

  render() {
    return html`
      <div class="form-container">
        <h2>Registrar Usuario</h2>
        <div class="form-field">
          <label for="nameUser">Nombre</label>
          <input type="text" id="nameUser" name="nameUser" .value="${this.nameUser}" @input="${this.handleInput}">
        </div>
        <div class="form-field">
          <label for="phone">Teléfono</label>
          <input type="text" id="phone" name="phone" .value="${this.phone}" @input="${this.handleInput}">
        </div>
        <div class="form-field">
          <label for="old">Edad</label>
          <input type="number" id="old" name="old" .value="${this.old}" @input="${this.handleInput}">
        </div>
        <div class="form-field">
          <label for="emailUser">Correo Electrónico</label>
          <input type="email" id="emailUser" name="emailUser" .value="${this.emailUser}" @input="${this.handleInput}">
        </div>
        <div class="form-field">
          <label for="photo">Foto (URL)</label>
          <input type="text" id="photo" name="photo" .value="${this.photo}" @input="${this.handleInput}">
        </div>
        <div class="form-field">
          <label for="description">Descripción</label>
          <textarea id="description" name="description" .value="${this.description}" @input="${this.handleInput}"></textarea>
        </div>
        <button @click="${this.submitForm}">Registrar</button>
      </div>
    `;
  }
}

customElements.define('register-user', RegisterUser);
