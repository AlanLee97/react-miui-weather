import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './utils/global.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

console.log('hello');
