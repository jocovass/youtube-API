import React, { useContext } from 'react';
import  { css } from '@emotion/core';
import sprite from '../../img/sprite.svg';
import SearchContext from '../../context/searchContext';

const descStyle = css`
    padding: 1rem;
    position: relative;

    h2 {
        margin-bottom: 5px;
    }

    .btn-like {
        width: 30px;
        height: 30px;
        cursor: pointer;
        fill: #999;
        position: absolute;
        top: 1rem;
        right: 0;
    }
    
    .liked {
        fill: rgb(171, 14, 14);
    }
`;

const VideoDescription = () => {
    const { videos, setPlaylist, currentVideo, likedVideos, setLikedVideos, setCurrentVideo } = useContext(SearchContext);

    const handelLike = () => {
        const newLikes = [...likedVideos];
        const updatedCurrent = {
            ...currentVideo,
            liked: true,
        };
        const updateVideos = [...videos];
        updateVideos.forEach(function modifyLike(val) {
            if (val.videoId == currentVideo.videoId) {
                val.liked = true;
            }

            return val;
        });
        setPlaylist(updateVideos);
        newLikes.push(updatedCurrent);
        setCurrentVideo(updatedCurrent)
        setLikedVideos(newLikes);
    }

    const handelDisLike = () => {
        const newLikes = likedVideos.filter(function dislike(val) {
            return val.videoId != currentVideo.videoId;
        });
        const updatedCurrent = {
            ...currentVideo,
            liked: false,
        };
        setCurrentVideo(updatedCurrent);
        setLikedVideos(newLikes);
    }

    function renderLikeBtn() {
        if (currentVideo.liked) {
            return (
                <svg role="button" aria-labelledby="title desc"className="btn-like liked" onClick={handelDisLike}>
                    <use xlinkHref={`${sprite}#icon-heart`}></use>
                </svg>
            );
        }

        return (
            <svg role="button" aria-labelledby="title desc"className="btn-like" onClick={handelLike}>
                <use xlinkHref={`${sprite}#icon-heart`}></use>
            </svg>
        );
    }

    return (
        <div css={descStyle}>
            <h2>{currentVideo.title}</h2>
            <p>{currentVideo.description}</p>
            {renderLikeBtn()}
        </div>
    );
};

export default VideoDescription;