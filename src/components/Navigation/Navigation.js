import React from 'react';
import { css } from '@emotion/core';
import Likes from '../Likes/Likes';

const btnStyle = css`
    background: none;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: .3rem .6rem;
    border-radius: 4px;
    transition: all .1s ease-in-out;
    cursor: pointer;
    
`;

const navStyle = css`
    list-style: none;
    position: relative;

    li:hover button {
        background-color: rgba(255,255,255, .4);
        color: #000;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }

    li:hover .likes {
        display: block;
    }
`;

const Navigation = () => {
    return (
        <nav>
            <ul css={navStyle}>
                <li>
                    <button css={btnStyle}>Likes &darr;</button>
                    <Likes />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;