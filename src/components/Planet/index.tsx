import '../../styles.css';

import React from 'react';

import { PlanetProps } from '../../types';

function Planet({
  animationDirection,
  animationSpeedInSeconds = 5,
  backgroundColor = 'blue',
  backgroundImageURL,
  borderSize = 1,
  className,
  degrees,
  padding,
  shouldSpin = true,
  size,
}: PlanetProps) {
  // eslint-disable-next-line no-console
  const oppositeDirection = animationDirection === 'left' ? 'right' : 'left';
  const margin = ((size / 20) * 10 + borderSize / 2) * -1;
  const bg = backgroundImageURL
    ? { backgroundImage: `url('${backgroundImageURL}')` }
    : { backgroundColor };

  const degreesInverse = Number(degrees) * -1;

  return (
    <div
      className={`electron ${className}`}
      style={{
        width: size,
        height: size,
        marginTop: `${margin}px`,
        marginLeft: `${margin}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding,
        rotate: shouldSpin ? '' : `${degreesInverse}deg`,
        animation: `spin-${
          shouldSpin ? animationDirection : oppositeDirection
        } ${animationSpeedInSeconds}s linear infinite`,
        ...bg,
      }}
    />
  );
}

export default Planet;
