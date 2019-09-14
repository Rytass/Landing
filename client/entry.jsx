// @flow

import React from 'react';
import { render } from 'react-dom';
import debug from 'debug';
import moment from 'moment';
import 'moment/locale/zh-tw';
import App from './App';

const debugHiring = debug('Rytass:Hiring');

debug.enable('Rytass:*');

declare var module: {
  hot: {
    accept: Function,
  },
}

moment.locale('zh-tw');

debugHiring('Hi, we are hiring intelligent developer and designer! Please email your resume to hr@rytass.com.');

function renderPage() {
  const root = document.getElementById('root');

  if (root) {
    render(
      <App />,
      root,
    );
  }
}

if (module.hot) {
  module.hot.accept('./App', () => {
    renderPage();
  });
}

renderPage();
