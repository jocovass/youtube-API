import React, { Component } from 'react';
// import { Redirect } from '@reach/router';
import AppContext, { hasError } from '../contex';
import Header from './Header/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateError = () => {
            this.setState(state => ({
                error: !state.error
            }))
        }
    }

    state = {
        error: hasError.error,
        updateError: this.updateError,
    }

    render() {
        if (this.state.error) {
            return <h1>Error</h1>;
        }

        return (
            <AppContext.Provider value=''>
                <Header />
            </AppContext.Provider>
        )
    };
}

export default App;