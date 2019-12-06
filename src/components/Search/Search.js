import React, { useState } from 'react';
import { css } from '@emotion/core';
import youtube from '../../axios';

const formStyle = css`
    width: 25rem;
`;

const inputStyle = css`
    width: 100%;
    font-size: 1.1rem;
    padding: .2rem 1rem;
`;

const Search = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();
        youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: process.env.APIKEY,
                    q: value
                }
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    }
    return (
    <form css={formStyle}
          onSubmit={sumbitHandler}>
        <input id="search" 
               type="text" 
               placeholder="Search videos on youtube..."
               aria-label="Search videos on youtube" 
               css={inputStyle}
               value={value}
               onChange={onChangeHandler} />
    </form>);
};

export default Search;