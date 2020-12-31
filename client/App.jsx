// @flow

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import AppCountDown from './AppCountDown';
import AppVideo from './AppVideo';

function App() {
  const [isVideoMode, setVideoMode] = useState(moment().year() > 2020);

  useEffect(() => {
    if (isVideoMode) return () => {};

    const interval = setInterval(() => {
      if (moment().year() > 2020) {
        setVideoMode(true);

        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isVideoMode]);

  return <AppVideo />;

  if (isVideoMode) return <AppVideo />;

  return <AppCountDown />;
}

export default App;
