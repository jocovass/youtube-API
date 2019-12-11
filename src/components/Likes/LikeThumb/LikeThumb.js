import React from 'react';
import { css } from '@emotion/core';

const likeThumbStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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

const LikeThumb = ({ video, setCurrentVideo }) => {
    const handelClick = () => {
        setCurrentVideo(video);
    }
    
    return (
        <div css={likeThumbStyle}
             onClick={handelClick}
             onKeyPress={setCurrentVideo}
             tabIndex="-1"
             role={"button"}>
            <div className="img">
                <img src={video.thumbnail} 
                     alt={video.title} 
                     width={video.width}
                     height={video.height} />
            </div>
            <div className="text">
                <h3>{formTitle(video.title)}</h3>
            </div>
        </div>
    );
};

export default LikeThumb;