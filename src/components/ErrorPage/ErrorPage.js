import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { css } from '@emotion/core';
import AppContext from '../../contex';
import sprite from '../../img/sprite.svg'

const errorStyle = css`
    text-align: center;
    margin-top: 5rem;

    .error-icon {
        width: 25rem;
        height: 25rem;
    }

    .error-message {
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    .btn {
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        background-color: rgba(250,0,0, .7);
        margin-top: 2rem;
        padding: .4rem .9rem;
        border-radius: 4px;
        border: none;
        outline: none;
        transition: all .15s ease-in-out;

        &:hover {
            box-shadow: 0 5px 10px rgba(0,0,0,.3);
        }

        &:active {
            transform: translateY(1px);
        }
    }
`;

const ErrorPage = () => {
    const app = useContext(AppContext);

    const navigateHandler = () => {
        window.history.go(-1);
    }

    return (
        <div css={errorStyle}>
            <svg role="img" aria-labelledby="title desc" className="error-icon">
                <use xlinkHref={`${sprite}#icon-${app.error}`}></use>
            </svg>
        <p className="error-message">{app.errorMessage}</p>
        <button className="btn" onClick={navigateHandler}>&lt; Back</button>
        </div>
    );
};

export default ErrorPage;