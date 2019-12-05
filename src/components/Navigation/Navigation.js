import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const btnStyle = css`
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    text-transform: uppercase;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-of-type) {
        margin-right: 2rem;
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