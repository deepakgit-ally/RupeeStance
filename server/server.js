import path from 'path';
import fs from 'fs/promises';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App'; // Use ES6 import syntax
import { StaticRouter } from 'react-router-dom';
const PORT = 8080;
const app = express();
const router = express.Router();

const serverRenderer = async (req, res, next) => {
  try {
    const indexPath = path.resolve(__dirname, '../build/index.html');
    const data = await fs.readFile(indexPath, 'utf8');

    // Render the React component to a string
    const context = {};
    const appString = (
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    // Replace the placeholder in the HTML with the rendered React component
    const updatedHTML = data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`);

    // Send the updated HTML to the client
    res.send(updatedHTML);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
};

router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
