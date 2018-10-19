import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import {StaticRouter as Router} from 'react-router-dom';

import Html from './html';
import App from './containers/app';

const app = express();

app.get('*', async (req, res, next) => {
  let modules = [];
  const appMarkup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </Loadable.Capture>
  );
  console.log(modules);
  let bundles = getBundles(eval('require')('./react-loadable.json'), modules);
  let scripts = bundles.map(bundle => `/public/${bundle.file}`);
  scripts.push('/public/app.bundle.js');
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts}/>
  );
  res.send(`<!doctype html>${html}`);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});
