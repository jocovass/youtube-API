import React, { useState, useContext, useEffect } from 'react';
import { navigate }  from '@reach/router'; 
import { css } from '@emotion/core';
import youtube from '../../axios';
import AppContext from '../../context/appContext';
import SearchContext from '../../context/searchContext';

const formStyle = css`
    width: 25rem;
`;

const inputStyle = css`
    width: 100%;
    font-size: 1.1rem;
    padding: .2rem 1rem;
`;

function isLiked(videoId, likedVideos) {
    if (likedVideos.length == 0) return false;
    const isLiked = likedVideos.filter(function checkLikes(val) {
        return val.videoId == videoId;
    });
    return isLiked.length != 0;
}

function createVideosArray(videos, likedVideos) {
    const newArray = videos.reduce((acc, val) => {
        const video = {
            videoId: val.id.videoId,
            description: val.snippet.description,
            title: val.snippet.title,
            thumbnail: val.snippet.thumbnails.default.url,
            width: val.snippet.thumbnails.default.width,
            height: val.snippet.thumbnails.default.height,
            liked: isLiked(val.id.videoId, likedVideos),
        };

        acc.push(video);

        return acc;
    }, [])

    return newArray;
}

const Search = () => {
    const [value, setValue] = useState('');
    const appContext = useContext(AppContext);
    const { videos, likedVideos, setVideosLoading, setPlaylist, setLikedVideos } = useContext(SearchContext);

    useEffect(function getLikes() {
        const likes = JSON.parse(localStorage.getItem('likes')) || [];
        setLikedVideos(likes);
    }, [videos])

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();
        setVideosLoading();
        youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 50,
                    key: process.env.APIKEY,
                    q: value
                }
        })
        .then(resp => {
            setValue('');
            setVideosLoading();
            const videos = createVideosArray(resp.data.items, likedVideos);
            setPlaylist(videos);
        })
        .catch(err => {
            setVideosLoading();
            const errorCode = err.message.slice(-3);
            appContext.setError(errorCode);
            appContext.setErrorMessage(err.message);
            navigate('/error');
        });
    }
    return (
    <form css={formStyle}
          onSubmit={sumbitHandler}>
        <input id="search" 
               type="text" 
               placeholder="Search videos on youtube..."
               aria-label="Search videos on youtube" 
               css={inputStyle}
               value={value}
               onChange={onChangeHandler} />
    </form>);
};

export default Search;