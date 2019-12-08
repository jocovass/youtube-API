import React, { Component } from 'react';
import { css } from '@emotion/core';
import PlayList from '../../components/PlayList/PlayList';

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
                <div style={{backgroundColor: 'orangered', height: '250px', flexBasis: '63%'}}>VideoPlayer</div>
                <PlayList />
            </main>
        )
    }
}

export default MaintContent;