// import { navBarStyles } from 'https:/curriculum-pi-one.vercel.app/css/navBarStyles.js';
// import { LitElement, html, css } from 'lit';
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { navBarStyles } from '/css/navBarStyles.js';

class NavBar extends LitElement {
  
  static get styles(){
    return[
        navBarStyles
    ];
}

  render() {
    return html`
      <nav>
        <input type="checkbox" id="toggle">
        <div class="logo">
          <img src="https://dam-americas.nttdata.com/api/public/content/NTT-DATA-Logo?v=4ba3b0db" alt="logo">
        </div>
        <ul class="list">
          <li><a href="#">Inicio</a></li>
          <li><a href="/html/registerUser.html">Registrar</a></li>
          <li><a href="pdf">Descargar CV</a></li>
        </ul>
        <label for="toggle" class="icon-bars">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
