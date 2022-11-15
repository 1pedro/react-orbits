import '../../styles.css';

import React from 'react';

import { PlanetProps, PlanetPropsConfig } from '../../types';

function Planet(props: PlanetProps | PlanetPropsConfig) {
  const {
    animationSpeedInSeconds = 5,
    backgroundColor = 'blue',
    backgroundImageURL,
    borderColor,
    borderStyle,
    borderWidth,
    className,
    degrees,
    padding,
    shouldSpin = true,
    size,
  } = props;

  const spin = (props as PlanetPropsConfig).spin || 'right';
  const borderSize = (props as PlanetProps).borderSize || 0;
  const oppositeDirection = spin === 'left' ? 'right' : 'left';
  const margin = ((size / 20) * 10 + borderSize / 2) * -1;
  const bg = backgroundImageURL
    ? { backgroundImage: `url('${backgroundImageURL}')` }
    : { backgroundColor };

  const degreesInverse = Number(degrees) * -1;

  return (
    <div
      className={`electron ${className || ''}`}
      style={{
        borderColor,
        borderWidth,
        borderStyle,
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
          shouldSpin ? spin : oppositeDirection
        } ${animationSpeedInSeconds}s linear infinite`,
        ...bg,
      }}
    />
  );
}

export default Planet;
