import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const userList = css`
    .container-user-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10%;
    }

    .table-users-list {
        width: 100%;
        border-collapse: collapse;
    }

    .table-users-list th, .table-users-list td {
        padding: 10px;
        border: 1px solid #ccc;
        text-align: left;
    }

    .table-users-list th {
        background-color: #f2f2f2;
    }

    .table-users-list td button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .table-users-list td button:hover {
        color: blue;
    }
`;