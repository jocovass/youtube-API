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
    const newdesc = desc.slice(0, 31);
    return `${newdesc} ...`;
};

const VideoThumb = ({ video, setCurrentVideo }) => {
    return (
        <div css={thumbStyle} 
             onKeyPress={setCurrentVideo}
             onClick={setCurrentVideo}
             tabIndex='-1'
             role='button'>
            <div className="video-img">
                <img alt={video.title} 
                     src={video.thumbnail} 
                     width={video.width}
                     height={video.height} />
            </div>
            <div className="video-text">
                <h3>{formTitle(video.title)}</h3>
                <p>{formDesc(video.description)}</p>
            </div>
        </div>
    )
}

export default VideoThumb;