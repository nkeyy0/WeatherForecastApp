import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

const cities = ['Vitebsk', 'Minsk', 'New York'];
// const store;
ReactDOM.render(
    <App cities = {cities}/> ,
document.getElementById('root'));