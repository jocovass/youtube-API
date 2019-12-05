import React from 'react';
import { render } from 'react-dom'
import App from './containers/App';
import './index.css';

render(<App />, document.getElementById('root'));




//var APIKEY = "AIzaSyDrEvhwlBgt90Ipv3F6lYjhqpbbcuUxrg0";
// axios.get('https://www.googleapis.com/youtube/v3/search', {
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: APIKEY,
//         q: 'building'
//     }
// }) .then(resp => console.log(resp))
//    .catch(err => console.log(err));

