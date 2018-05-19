import React from 'react';
import ReactDom from 'react-dom';
import App from './app.jsx';

let root = document.createElement('div');
document.body.appendChild(root);

console.log('inside main.jsx')
ReactDom.render(<App />, root);