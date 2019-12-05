import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import logo from '../../img/logo.png';

const logoStyle = css`
    width: 100px;
`;

const Logo = () => (
    <Link to="/">
        <h1 aria-label="Logo">
            <img alt="logo" src={logo} css={logoStyle}/>
        </h1>
    </Link>
);

export default Logo;