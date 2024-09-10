// import { css } from 'lit';
import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
export const contentDescription = css`
    .content-description {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        margin-top: 80px;
    }

    .box-right {
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
    #img-flor-dos {
        width: 280px;
        position: absolute;
        z-index: -1;
    }
    #img-perfil {
        width: 240px;
    }
    .box-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    #img-flor{
        margin-bottom: 10%;
        width: 200px;
    }
`;