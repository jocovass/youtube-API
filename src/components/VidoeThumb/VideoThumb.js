import React from 'react';
import { css } from '@emotion/core';

const thumbStyle = css`
    border: 2px solid rgba(0,0,0, .3);
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all .15s ease-in-out;

    & .video-img {
        margin-right: 1.5rem;
    }

    &:hover {
        border-color: rgb(171, 14, 14);
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
    }
`;

function formTitle(title) {
    const titleArray = title.split(' ');
    const newTitle = titleArray.reduce((acc, val) => {
        if (acc.length < 15) {
            if (acc.length != 0) {
                acc += ' ';
            }
            acc += val;
        }
        return acc;
    }, '');

    return `${newTitle} ...`;
};

function formDesc(desc) {
    const descArray = desc.split(' ');
    const newdesc = descArray.reduce((acc, val) => {
        if (acc.length < 60) {
            if (acc.length != 0) {
                acc += ' ';
            }
            acc += val;
        }
        return acc;
    }, '');

    return `${newdesc} ...`;
};

const VideoThumb = (props) => {
    const { video } = props;
    console.log('video');
    return (
        <div css={thumbStyle}>
            <div className="video-img">
                <img alt={video.title} 
                     src={video.thumbnail} 
                     width={video.width}
                     height={video.height} />
            </div>
            <div className="video-text">
                <h3>{formTitle(video.title)}</h3>
            </div>
        </div>
    )
}

export default VideoThumb;