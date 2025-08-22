import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './src/App.js'; // adjust path to your App

const html = ReactDOMServer.renderToStaticMarkup(<App />);

require('fs').writeFileSync('app.html', `<!DOCTYPE html>${html}`);
console.log('Static HTML created: app.html');
