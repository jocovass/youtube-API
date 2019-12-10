import { createContext } from 'react';

export const search = {
    videos: [],
    currentVideo: { videoId: 'zshup6I-A1I' },
    videosLoading: false,
    setVideosLoading: () => {},
    setCurrentVideo: () => {},
    setPlaylist: () => {},
}

export default createContext(search); 