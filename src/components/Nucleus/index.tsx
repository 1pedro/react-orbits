import '../../styles.css';

import React from 'react';

import { NucleoProps } from '../../types';

function Nucleus({
  animationSpeedInSeconds = 2,
  backgroundColor = 'red',
  backgroundImageURL,
  className,
  shouldSpin = true,
  size = 20,
  spin = 'left',
}: NucleoProps) {
  const margin = (size / 2) * -1;
  const oppositeDirection = spin === 'left' ? 'right' : 'left';

  return (
    <div
      className={`atom-nucleus ${className || ''}`}
      style={{
        backgroundColor,
        backgroundImage: `url('${backgroundImageURL}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        rotate: `0deg`,
        animation: `spin-${
          shouldSpin ? spin : oppositeDirection
        } ${animationSpeedInSeconds}s linear infinite`,
        width: size,
        height: size,
        marginTop: `${margin}px`,
        marginLeft: `${margin}px`,
      }}
    />
  );
}

export default Nucleus;
