// @flow
/** @jsx jsx */

import { useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/react';
import videoAV1 from './static/videos/video-av1.mkv';
import videoHEVC from './static/videos/video-hevc.mkv';
import videoMP4 from './static/videos/video-264.mp4';

const styles = {
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
  const video = useRef();

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

  return (
    <div css={styles.wrapper}>
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
