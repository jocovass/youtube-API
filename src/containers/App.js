import React, { Component } from 'react';
import { Router } from '@reach/router';
import AppContext, { app } from '../context/appContext';
import SearchContext, { search } from '..//context/searchContext';
import Header from './Header/Header';
import MainContent from './MainContent/MaintContent';
import ErrorPage from '../components/ErrorPage/ErrorPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.setError = (errorCode) => {
            this.setState({ error: errorCode });
        };
        this.setErrorMessage = (message) => {
            this.setState({ errorMessage: message });
        };
        this.setPlaylist = (list) => {
            this.setState({ videos: list });
        };
        this.setCurrentVideo = (video) => {
            this.setState({ currentVideo: video });
        };
        this.state = {
            error: app.error,
            errorMessage: app.errerMessage,
            videos: search.videos,
            currentVideo: search.currentVideo,
            setCurrentVideo: this.setCurrentVideo,
            setPlaylist: this.setPlaylist,
            setError: this.setError,
            setErrorMessage: this.setErrorMessage,
        };
    }


    render() {
        return (
            <AppContext.Provider value={this.state}>
                <SearchContext.Provider value={{
                    videos: this.state.videos,
                    setPlaylist: this.state.setPlaylist,
                    currentVideo: this.state.currentVideo,
                    setCurrentVideo: this.state.setCurrentVideo,
                }}>
                    <Header />
                    <Router>
                        <MainContent path="/" />
                        <ErrorPage path='/error' />
                    </Router>
                </SearchContext.Provider>
            </AppContext.Provider>
        )
    };
}

export default App;