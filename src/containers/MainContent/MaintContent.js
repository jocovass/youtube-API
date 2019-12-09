import React, { Component } from 'react';
import { css } from '@emotion/core';
import PlayList from '../../components/PlayList/PlayList';
import VideoPlayer  from '../../components/VideoPlayer/VideoPlayer';

const mainStyle = css`
    width: 95%;
    max-width: 1400px;
    margin: 2.5rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

class MaintContent extends Component {

    render() {

        return (
            <main css={mainStyle}>
                <VideoPlayer />
                <PlayList />
            </main>
        )
    }
}

export default MaintContent;