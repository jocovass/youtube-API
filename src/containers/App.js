import React, { Component } from 'react';
import { Router } from '@reach/router';
import AppContext, { app } from '../contex';
import Header from './Header/Header';
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
        this.state = {
            error: app.error,
            errorMessage: app.errerMessage,
            setError: this.setError,
            setErrorMessage: this.setErrorMessage,
        };
    }


    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Header />
                <Router>
                    <ErrorPage path='/error' />
                </Router>
            </AppContext.Provider>
        )
    };
}

export default App;