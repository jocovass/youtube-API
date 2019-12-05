import React, { Component } from 'react';
import { css } from '@emotion/core'
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';

const headerStyle = css`
    background-color: rgb(171, 14, 14);
    padding: .3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
`;

class Header extends Component {
    render() {
        return (
            <header css={headerStyle}>
                <Logo />
                <Search />
                <Navigation />
            </header>);
    };
}

export default Header;