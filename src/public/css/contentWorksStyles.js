// import { css } from 'lit';
import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const contentWork = css`
    .content-works {
        display: flex;
        /*display: grid;*/
        /* grid-template-columns: repeat(3, 1fr); */
        gap: 10px;
        width: 100%;
        border: 1px solid #ccc;
        padding: 10px;
        align-items: center;
        justify-content: center;
    }

    .item {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 20px;
        text-align: center;
    }

    .card {
        perspective: 1000px;
    }

    .card-inner {
        position: relative;
        width: 400px;
        height: 300px;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-back {
        transform: rotateY(180deg);
    }
`;