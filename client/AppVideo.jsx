// @flow
/** @jsx jsx */

import { useEffect, useRef, useState } from 'react';
import { jsx, css } from '@emotion/react';
import videoAV1 from './static/videos/video-av1.mkv';
import videoHEVC from './static/videos/video-hevc.mkv';
import videoMP4 from './static/videos/video-264.mp4';

const styles = {
  fontLoader: css`
    font-size: 0;
    font-family: Faktum, sans-serif;
    font-weight: medium;
  `,
  wrapper: css`
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  `,
  title: css`
    font-size: 72px;
    font-weight: 700;
    color: ${Colors.MAIN};
    line-height: 1.618;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 6px;

    @media (max-width: 767px) {
      font-size: 48px;
    }
  `,
  logoSize: css`
    margin: 22px 0 0 0.6em;

    video {
      width: 150px;
    }

    @media (max-width: 767px) {
      margin: 14px 0 0 0.56em;

      video {
        width: 100px;
      }
    }
  `,
  footer: css`
    font-size: 16px;
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 2;
    font-weight: 500;

    @media (max-width: 767px) {
      width: 100%;
      bottom: 0;
      right: 0;
      height: 72px;
      line-height: 85px;
      text-align: center;
    }
  `,
  link: css`
    color: #1a1a1a;
    text-decoration: none;
    margin: 0 2px;
    font-weight: 500;
  `,
};

function AppVideo() {
  const [fontLoaded, setFontLoaded] = useState(document.fonts.check('12px Faktum'));
  const [loaded, setLoaded] = useState(false);
  const video = useRef();
  const loadingFrame = useRef();

  useEffect(() => {
    function onVisible() {
      requestAnimationFrame(() => {
        video.current?.play();
      });
    }

    document.addEventListener('visibilitychange', onVisible, false);

    return () => {
      document.addEventListener('visibilitychange', onVisible, false);
    };
  }, []);

  useEffect(() => {
    if (fontLoaded) return () => {};

    const fontInterval = setInterval(() => {
      if (document.fonts.check('12px Faktum-bold')) {
        requestAnimationFrame(() => {
          setFontLoaded(true);
        });
      }
    }, 100);

    return () => {
      clearInterval(fontInterval);
    };
  }, [fontLoaded]);

  useEffect(() => {
    if (loaded || !fontLoaded) return () => {};

    const siteLoadingElem = loadingFrame.current;
    const processElem = siteLoadingElem.querySelector('.background');
    const entryElem = siteLoadingElem.querySelector('.enter-background');
    const lastLetterElem = siteLoadingElem.querySelector('.last-animated-letter');

    let targetProcessing = 0;
    let nowProcessing = 0;

    function setLoadingProcessing(processing = 0) {
      if (processing < 0 || processing > 1) throw new Error('Invalid Processing, should between 0 and 1');

      targetProcessing = processing;
    }

    function draw() {
      if (nowProcessing < targetProcessing) {
        nowProcessing = Math.min(nowProcessing + 0.005, targetProcessing);

        processElem.style.backgroundImage = `linear-gradient(to top, var(--main) 0%, var(--main) ${nowProcessing * 100}%, transparent ${nowProcessing * 100}%, transparent 100%)`;
      }

      if (nowProcessing < 1) {
        requestAnimationFrame(draw);
      } else {
        entryElem.style.animationName = 'entry-animation-circle';

        entryElem.addEventListener('animationend', () => {
          setLoaded(true);
        }, false);
      }
    }

    lastLetterElem.addEventListener('animationend', () => {
      requestAnimationFrame(draw);
    }, false);

    const bufferingInterval = setInterval(() => {
      let buffered = 0;

      try {
        buffered = video.current?.buffered.end(0);
      } finally {
        const percentage = buffered ? buffered / video.current?.duration : 0;

        setLoadingProcessing(percentage);
      }
    }, 100);

    return () => {
      clearInterval(bufferingInterval);
    };
  }, [loaded, fontLoaded]);

  if (!fontLoaded) return <h1 css={styles.fontLoader}>Rytass</h1>;

  return (
    <div css={styles.wrapper}>
      {loaded ? null : (
        <div id="site-loading" ref={loadingFrame}>
          <div className="display-wrapper">
            <svg
              className="text-outline"
              width="290"
              height="84"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 290 84">
              <text transform="matrix(1 0 0 1 0.9419 66.5068)">R</text>
              <text transform="matrix(1 0 0 1 58.1323 66.6924)">y</text>
              <text transform="matrix(1 0 0 1 107.4318 66.7292)">t</text>
              <text transform="matrix(1 0 0 1 145.3198 66.8887)">a</text>
              <text transform="matrix(1 0 0 1 199.3115 66.6777)">s</text>
              <text className="last-animated-letter" transform="matrix(1 0 0 1 242.3222 66.7292)">s</text>
              <clipPath id="clip-path" clipRule="evenodd">
                <text transform="matrix(1 0 0 1 0.9419 66.5068)">R</text>
                <text transform="matrix(1 0 0 1 58.1323 66.6924)">y</text>
                <text transform="matrix(1 0 0 1 107.4318 66.7292)">t</text>
                <text transform="matrix(1 0 0 1 145.3198 66.8887)">a</text>
                <text transform="matrix(1 0 0 1 199.3115 66.6777)">s</text>
                <text transform="matrix(1 0 0 1 242.3222 66.7292)">s</text>
              </clipPath>
            </svg>
            <div className="background" />
            <div className="enter-background" />
          </div>
        </div>
      )}
      <h1 css={styles.title}>
        Rytass
        <div css={styles.logoSize}>
          <video ref={video} autoPlay muted playsInline loop>
            <source src={videoAV1} type="video/mp4; codecs=avc1" />
            <source src={videoHEVC} type="video/mp4; codecs=h265" />
            <source src={videoMP4} type="video/mp4" />
          </video>
        </div>
      </h1>
      <footer css={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
          href="//facebook.com/rytasscorp">
          Facebook
        </a>
        .
        <a
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
          href="//instagram.com/rytasscorp">
          Instagram
        </a>
      </footer>
    </div>
  );
}

export default AppVideo;
