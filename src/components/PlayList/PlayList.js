import React, { useContext } from 'react';
import { css } from '@emotion/core';
import SearchContext from '../../context/searchContext';
import VideoThumb from '../VidoeThumb/VideoThumb';

const playlistStyle = css`
    flex-basis: 33%;
    
`;

const PlayList = () => {
    const { videos } = useContext(SearchContext);

    const renderVideoList = (list) => {
         return list.map((val, i) => {
            console.log(val)
            return <VideoThumb video={val} key={i} />
        })
    }

    return (
        <section css={playlistStyle}>
            { renderVideoList(videos) }
        </section>
    )
};

export default PlayList;