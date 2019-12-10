import React from 'react';
import { css, keyframes } from '@emotion/core';

const rotate = keyframes`
    from, 0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const loaderStyle = css`
    width: 55px;
    height: 55px;
    margin: 3rem auto;
    border: 6px solid rgba(0,0,0, .3);
    border-radius: 50%;
    border-top-color: rgb(171, 14, 14);
    animation: ${rotate} 1.5s ease-in-out infinite;
`;


const Loader = () => {
    return <div aria-label="Loader" css={loaderStyle}></div>
};

export default Loader;