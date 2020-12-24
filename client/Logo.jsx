// @flow
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import LogoCircle from './LogoCircle';

const styles = {
  title: css`
    font-size: 22px;
    color: ${Colors.MAIN};
    font-weight: 700;
    margin: 0;
    line-height: 48px;
    display: grid;
    grid-template-columns: 1fr 58px;
    grid-column-gap: 8px;
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 27px;
      grid-template-columns: 1fr 32px;
    }
  `,
  circleWrapper: css`
    width: 57px;
    @media (max-width: 767px) {
      width: 32px;
    }
  `,
};

function Logo() {
  return (
    <h1 css={styles.title}>
      Rytass
      <div css={styles.circleWrapper}>
        <LogoCircle />
      </div>
    </h1>
  );
}

export default Logo;
