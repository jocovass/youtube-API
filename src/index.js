import React from 'react';
import { render } from 'react-dom'
import { createHistory } from '@reach/router';
import App from './containers/App';
import './index.css';

export const history = createHistory(window);

render(<App />, document.getElementById('root'));