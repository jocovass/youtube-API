import React, { useState, useContext } from 'react';
import { navigate }  from '@reach/router'; 
import { css } from '@emotion/core';
import youtube from '../../axios';
import AppContext from '../../contex';

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
    const appContext = useContext(AppContext);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();
        youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: process.env.APIKE,
                    q: value
                }
        })
        .then(resp => console.log(resp))
        .catch(err => {
            const errorCode = err.message.slice(-3);
            appContext.setError(errorCode);
            appContext.setErrorMessage(err.message);
            navigate('/error');
        });
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