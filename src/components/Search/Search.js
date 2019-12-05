import React from 'react';
import { css } from '@emotion/core';

const formStyle = css`
    width: 25rem;
`;

const inputStyle = css`
    width: 100%;
    font-size: 1.1rem;
    padding: .2rem 1rem;
`;

const Search = () => (
    <form css={formStyle}>
        <input id="search" 
               type="text" 
               placeholder="Search videos on youtube"
               aria-label="Search videos on youtube" 
               css={inputStyle} />
    </form>
);

export default Search;