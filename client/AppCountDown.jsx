// @flow
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import moment from 'moment';
import {
  Fragment,
  useMemo,
  useEffect,
  useState,
} from 'react';
import Logo from './Logo';
import LogoCircle from './LogoCircle';

const styles = {
  wrapper: css`
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 55px 0 130px 0;
    overflow: hidden;
    @media (max-width: 767px) {
      padding: 90px 0 85px 0;
    }
  `,
  logoWrapper: css`
    position: fixed;
    left: 55px;
    bottom: 55px;
    @media (max-width: 767px) {
      top: 36px;
      left: auto;
      bottom: auto;
      right: 36px;
    }
  `,
  mainDesc: css`
    -webkit-overflow-scrolling: touch;
    font-size: 60px;
    font-weight: 700;
    line-height: 68px;
    -webkit-text-stroke: 1.4px ${Colors.MAIN};
    text-stroke: 1.4px ${Colors.MAIN};
    color: transparent;
    margin: 0;
    width: 100%;
    text-align: left;
    position: relative;
    z-index: 5;
    height: 100%;
    overflow: auto;
    padding: 0 55px;
    word-break: break-word;
    @media (max-width: 767px) {
      font-size: 48px;
      padding: 0 36px;
    }
  `,
  outline: css`
    color: transparent;
    &:hover {
      color: ${Colors.MAIN};
    }
  `,
  filled: css`
    color: ${Colors.MAIN};
    &:hover {
      color: transparent;
    }
  `,
  backgroundCircleWrapper: css`
    width: 67%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 55px;
    @media (max-width: 767px) {
      width: 150%;
      left: 30%;
      right: auto;
    }
  `,
  footer: css`
    font-size: 16px;
    position: fixed;
    bottom: 55px;
    right: 55px;
    z-index: 2;
    font-weight: 500;
    @media (max-width: 767px) {
      width: 100%;
      bottom: 0;
      right: 0;
      height: 85px;
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

const targetTime = moment('2021-01-01').startOf('year');

function AppCountDown() {
  const [nowTime, setTime] = useState(moment());
  const duration = moment.duration(targetTime.diff(nowTime));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const daysElements = useMemo(() => {
    if (days === 0) return null;

    return (
      <Fragment>
        <span> </span>
        <span css={styles.filled}>{days}</span>
        <span> </span>
        <span css={styles.filled}>
          days
          {hours || minutes || seconds ? '' : '.'}
        </span>
      </Fragment>
    );
  }, [days, hours, minutes, seconds]);

  const hoursElements = useMemo(() => {
    if (hours === 0) return null;

    return (
      <Fragment>
        <span> </span>
        <span css={styles.filled}>{hours}</span>
        <span> </span>
        <span css={styles.filled}>
          hours
          {minutes || seconds ? '' : '.'}
        </span>
      </Fragment>
    );
  }, [hours, minutes, seconds]);

  const minutesElements = useMemo(() => {
    if (minutes === 0) return null;

    return (
      <Fragment>
        <span> </span>
        <span css={styles.filled}>{minutes}</span>
        <span> </span>
        <span css={styles.filled}>
          minutes
          {seconds ? '' : '.'}
        </span>
      </Fragment>
    );
  }, [minutes, seconds]);

  const secondsElements = useMemo(() => {
    if (seconds === 0) return null;

    return (
      <Fragment>
        <span> </span>
        <span css={styles.filled}>{seconds}</span>
        <span> </span>
        <span css={styles.filled}>seconds.</span>
      </Fragment>
    );
  }, [seconds]);

  return (
    <div css={styles.wrapper}>
      <div css={styles.backgroundCircleWrapper}>
        <LogoCircle color="#fff" />
      </div>
      <p css={styles.mainDesc}>
        <span css={styles.filled}>Rytass</span>
        <span> </span>
        <span css={styles.outline}>has</span>
        <span> </span>
        <span css={styles.outline}>skillful</span>
        <span> </span>
        <span css={styles.outline}>staff</span>
        <span> </span>
        <span css={styles.outline}>members</span>
        <span> </span>
        <span css={styles.outline}>from</span>
        <span> </span>
        <span css={styles.filled}>diverse</span>
        <span> </span>
        <span css={styles.filled}>domains.</span>
        <span> </span>
        <span css={styles.outline}>We</span>
        <span> </span>
        <span css={styles.outline}>have</span>
        <span> </span>
        <span css={styles.outline}>an</span>
        <span> </span>
        <span css={styles.filled}>open</span>
        <span> </span>
        <span css={styles.filled}>approach</span>
        <span> </span>
        <span css={styles.outline}>to</span>
        <span> </span>
        <span css={styles.outline}>collaboration,</span>
        <span> </span>
        <span css={styles.outline}>which</span>
        <span> </span>
        <span css={styles.outline}>allows</span>
        <span> </span>
        <span css={styles.outline}>us</span>
        <span> </span>
        <span css={styles.outline}>to</span>
        <span> </span>
        <span css={styles.outline}>unite</span>
        <span> </span>
        <span css={styles.outline}>a</span>
        <span> </span>
        <span css={styles.outline}>wide</span>
        <span> </span>
        <span css={styles.outline}>variety</span>
        <span> </span>
        <span css={styles.outline}>of</span>
        <span> </span>
        <span css={styles.outline}>fields.</span>
        <span> </span>
        <span css={styles.outline}>Our</span>
        <span> </span>
        <span css={styles.outline}>utilization</span>
        <span> </span>
        <span css={styles.outline}>of</span>
        <span> </span>
        <span css={styles.filled}>lateral</span>
        <span> </span>
        <span css={styles.filled}>thinking</span>
        <span> </span>
        <span css={styles.outline}>allows</span>
        <span> </span>
        <span css={styles.outline}>us</span>
        <span> </span>
        <span css={styles.outline}>to</span>
        <span> </span>
        <span css={styles.outline}>view</span>
        <span> </span>
        <span css={styles.outline}>the</span>
        <span> </span>
        <span css={styles.filled}>broader</span>
        <span> </span>
        <span css={styles.filled}>picture,</span>
        <span> </span>
        <span css={styles.outline}>create</span>
        <span> </span>
        <span css={styles.outline}>better</span>
        <span> </span>
        <span css={styles.outline}>works,</span>
        <span> </span>
        <span css={styles.outline}>and</span>
        <span> </span>
        <span css={styles.outline}>ultimately</span>
        <span> </span>
        <span css={styles.outline}>push</span>
        <span> </span>
        <span css={styles.outline}>us</span>
        <span> </span>
        <span css={styles.outline}>forward</span>
        <span> </span>
        <span css={styles.outline}>to</span>
        <span> </span>
        <span css={styles.filled}>discover</span>
        <span> </span>
        <span css={styles.filled}>new</span>
        <span> </span>
        <span css={styles.filled}>frontiers.</span>
        <span> </span>
        <span css={styles.outline}>Oh,</span>
        <span> </span>
        <span css={styles.outline}>by</span>
        <span> </span>
        <span css={styles.outline}>the</span>
        <span> </span>
        <span css={styles.outline}>way,</span>
        <span> </span>
        <span css={styles.outline}>the</span>
        <span> </span>
        <span css={styles.outline}>full</span>
        <span> </span>
        <span css={styles.outline}>website</span>
        <span> </span>
        <span css={styles.outline}>will</span>
        <span> </span>
        <span css={styles.outline}>be</span>
        <span> </span>
        <span css={styles.outline}>launched</span>
        <span> </span>
        <span css={styles.outline}>in</span>
        {daysElements}
        {hoursElements}
        {minutesElements}
        {secondsElements}
      </p>
      <div css={styles.logoWrapper}>
        <Logo />
      </div>
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

export default AppCountDown;
