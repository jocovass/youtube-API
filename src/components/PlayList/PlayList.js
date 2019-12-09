import React, { useContext, useState } from 'react';
import { css } from '@emotion/core';
import SearchContext from '../../context/searchContext';
import VideoThumb from '../VidoeThumb/VideoThumb';
import Pagination from '../Pagination/Pagination';

const playlistStyle = css`
    flex-basis: 33%;

    h2 {
        margin-bottom: 1rem;
    }
    
`;

function pagination(items, pageNum) {
    const itemsPerPage = 10;
    let start = itemsPerPage * pageNum;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);
    return pageItems;
}

const PlayList = () => {
    const { videos, setCurrentVideo } = useContext(SearchContext);
    const [page, setPage] = useState(0);

    function renderVideoList(list) {
        const itemsArray = pagination(list, page);

         return itemsArray.map((val, i) => {
            return <VideoThumb video={val} 
                               key={i} 
                               setCurrentVideo={() => setCurrentVideo(val)} />
        })
    }

    const next = () => {
        setPage(page + 1);
    }

    const prev = () => {
        setPage(page -1);
    }

    return (
        <section css={playlistStyle}>
            <h2>Play List</h2>
            { renderVideoList(videos) }
            <Pagination page={page}
                        prev={prev}
                        next={next} />
        </section>
    )
};

export default PlayList;