import React from 'react';
import { css } from '@emotion/core';

const paginationStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0 1rem;
    }

    button {
        font-weight: 500;
        font-size: 1.4rem;
        cursor: pointer;
        background-color: none;
        border: none;
    }
`;

const Pagination = ({ page, prev, next, totalPage }) => {

    return (
        <div css={paginationStyle}>
            {page == 0 ? null 
                : <button className="prev"
                        onClick={prev}>&lt;</button>}
            <p>{page + 1}</p>
            {totalPage == page ? null
                : <button className="next"
                          onClick={next}>&gt;</button>}
        </div>
    );
};

export default Pagination;