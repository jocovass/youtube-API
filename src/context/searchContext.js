import { createContext } from 'react';

export const search = {
    videos: [],
    currentVideo: { videoId: 'zshup6I-A1I', liked: false },
    videosLoading: false,
    likedVideos: [],
    setLikedVideos: () => {},
    setVideosLoading: () => {},
    setCurrentVideo: () => {},
    setPlaylist: () => {},
}

export default createContext(search); 