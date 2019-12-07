import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const btnStyle = css`
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    text-transform: uppercase;
    display: inline-block;
    padding: .3rem .6rem;
    border-radius: 4px;
    transition: all .15s ease-in-out;

    &:hover {
        background-color: rgba(255,255,255, .4);
        color: #000;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }

    &:active {
        transform: translateY(1px);
    }

    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const Navigation = () => {
    return (
        <nav>
            <Link to="/"
                  css={btnStyle}>
                Home
            </Link>
            <Link to="/likes"
                  css={btnStyle}>
                Likes
            </Link>
        </nav>
    );
}

export default Navigation;