import React, { useContext } from 'react';
import { css } from '@emotion/core';
import SearchContext from '../../context/searchContext';
import LikeThumb from './LikeThumb/LikeThumb';

const likesStyle = css`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    bordfer-radius: 8px;
    text-align: center;
    padding: 2rem;
    width: 350px;
    display: none;
`;

const Likes = () => {
    const { likedVideos, setCurrentVideo } = useContext(SearchContext);

    function renderLikeThumbs() {
        if (likedVideos.length == 0) return <h3>No liked videos.</h3>;
        
        return likedVideos.map(function createThumbs(val) {
            return <LikeThumb video={val} setCurrentVideo={setCurrentVideo} key={val.videoId} />;
        });
    }

    return (
        <div css={likesStyle} className='likes'>
            {renderLikeThumbs()}
        </div>
    );
};

export default Likes;