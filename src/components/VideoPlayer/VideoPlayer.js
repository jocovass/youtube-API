import React, { useContext } from 'react';
import { css } from '@emotion/core';
import SearchContext from '../../context/searchContext';
import VideoDescription from '../VideoDesciption/VideoDescription';

const playerStyle = css`
    flex-basis: 63%;
`;

const VideoPlayer = () => {
    const { currentVideo } = useContext(SearchContext);

    return (
        <section css={playerStyle}>
            <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${currentVideo.videoId}`} frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="title" allowFullScreen></iframe>
            <VideoDescription currentVideo={currentVideo} />
        </section>
    );
};

export default VideoPlayer;