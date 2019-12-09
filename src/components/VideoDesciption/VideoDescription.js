import React from 'react';
import  { css } from '@emotion/core';

const descStyle = css`
    padding: 1rem;

    h2 {
        margin-bottom: 5px;
    }
`;

const VideoDescription = ({ currentVideo }) => {
    return (
        <div css={descStyle}>
            <h2>{currentVideo.title}</h2>
            <p>{currentVideo.description}</p>
        </div>
    );
};

export default VideoDescription;