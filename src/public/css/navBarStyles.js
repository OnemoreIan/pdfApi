// import { css } from 'lit';
import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const navBarStyles = css `
    nav {
      position: absolute;
      z-index: 10;
      left: 0;
      right: 0;
      top: 0;
      padding: 0 5%;
      margin: 0 3%;
      height: 70px;
      background-color: black;
      border-radius:0px 0px 100% 100%;
    }

    nav .logo{
      float: left;
      width: 25%;
      height: 50%;
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #ffffff;
      font-weight: bold;
      text-transform: uppercase;
      /*border: 1px solid; /*Para test de espaciado*/
    }

    nav .list {
      float: right;
      padding: 0;
      margin: 0;
      width: 75%;
      height: 51%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    nav .list li {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    nav .list a {
      display: inline-block;
      text-transform: uppercase;
      padding: 15px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      /*border: 2px solid #1DFF4F; /* Cambia 2px según el grosor deseado */
    }

    nav .list a:hover {
      /* border-bottom: 4px solid #1DFF4F; /*solo pone la parte de abajo*/ 
      border-radius: 5px; /* Agrega esquinas redondeadas si deseas */
      box-shadow: 0 0 10px #1DFF4F; /* Define el sombreado con desplazamiento X, desplazamiento Y y tamaño de difuminado */
    }

    #toggle {
      position: absolute;
      top: -100px; /*desplaza el cuadro del check hacia arriba para dar el efecto de que no esta*/
    }

    nav .icon-bars {
      display: none;
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translate(-50%);
    }

    nav .icon-bars .line {
      width: 30px;
      height: 5px;
      background-color: #ffffff;
      margin: 5px;
      border-radius: 3px;
      transition: all .3s ease-in-out;
    }

    @media (max-width: 768px) {
        nav .logo {
            float: none;
            width: auto;
            justify-content: center;
        }

        nav .list {
            float: none;
            position: fixed;
            z-index: 0;
            left: 0;
            right: 0;
            top: 80px;
            bottom: 100%;
            width: auto;
            height: auto;
            flex-direction: column;
            justify-content: space-evenly;
            background-color: rgba(0, 0, 0, 0.8);
            overflow: hidden;
            transition: all .8s ease-in-out;
        }

        nav .list a {
            font-size: 20px;
        }

        nav :checked ~ .list {
            bottom: 0;
        }

        nav .icon-bars {
            display: block;
            position: absolute;
            right: 0%;
            top: 0%;
            transform: translate(-50%);
        }
    }
  
`; 