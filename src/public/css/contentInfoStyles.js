import {css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const contentInfoStyles = css`
    .content-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10%;
    }
    .box-right {
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr; /* Divide el espacio en dos columnas */
        grid-template-rows: 1fr;    /* Divide el espacio en dos filas */
        gap: 10px; /* Espacio entre los cuadrantes */
    }
    .box-right-1 {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }
    .box-right-2 {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        width: 140px;
        height: 300px;
    }

    .box-left {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-image: url("/img/background-ntt.png");
        background-size: cover; /* La imagen se ajustará para cubrir el contenedor */
        background-position: center; /* Centra la imagen en el contenedor */
        background-repeat: no-repeat; /* Evita que la imagen se repita */
    }

    #img-background-left {
        width: 280px;
        position: absolute;
        z-index: -1;
    }
    #img-user {
        width: 240px;
    }

    #img-background-rigth{
        margin-bottom: 10%;
        width: 200px;
    }

    @media (max-width: 768px) {
        #img-user {
            width: 140px;
        }
    }
`;