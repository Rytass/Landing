// @flow
/** @jsx jsx */

import { jsx } from '@emotion/react';

const styles = {
  placement: {
    width: '100%',
    height: 0,
    padding: '0 0 85.355% 0',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    height: 0,
    padding: '0 0 100% 0',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  circleWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  circle: {
    height: '100%',
    borderRadius: '50%',
    display: 'block',
  },
};

function LogoCircle({
  color,
}: {
  color?: string,
}) {
  return (
    <div css={styles.placement}>
      <div css={styles.container}>
        <div css={styles.circleWrapper}>
          <div css={[styles.circle, { backgroundColor: color }]} />
        </div>
      </div>
    </div>
  );
}

LogoCircle.defaultProps = {
  color: Colors.MAIN,
};

export default LogoCircle;
