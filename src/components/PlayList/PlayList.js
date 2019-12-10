import React, { useContext, useState, useEffect } from 'react';
import { css } from '@emotion/core';
import SearchContext from '../../context/searchContext';
import VideoThumb from '../VidoeThumb/VideoThumb';
import Pagination from '../Pagination/Pagination';

const playlistStyle = css`
    flex-basis: 33%;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
        text-align: center;
        font-weight: 500;
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
    const [totalPage, setTotalPage] = useState(0);

    useEffect(function getPages() {
        let pages = Math.floor(videos.length / 10) - 1;
        pages = pages < 0 ? 0 : pages;
        setTotalPage(pages);
    }, [videos]);

    function renderVideoList(list) {
        const itemsArray = pagination(list, page);

        if (videos.length == 0) {
            return <p>Your playlist is empty!</p>;
        }

         return itemsArray.map((val, i) => {
            return <VideoThumb video={val} 
                               key={i} 
                               setCurrentVideo={() => setCurrentVideo(val)} />
        });
    }

    const next = () => {
        if (totalPage > page) {
            setPage(page + 1);
        }
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
                        next={next}
                        totalPage={totalPage} />
        </section>
    )
};

export default PlayList;