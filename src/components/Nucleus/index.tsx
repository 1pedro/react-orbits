import React from 'react';

import { NucleoProps } from '../../types';

function Nucleus({
  animationDirection = 'left',
  animationSpeedInSeconds = 2,
  backgroundColor = 'red',
  backgroundImageURL,
  shouldSpin = true,
  size = 20,
}: NucleoProps) {
  const margin = (size / 2) * -1;
  const oppositeDirection = animationDirection === 'left' ? 'right' : 'left';

  return (
    <div
      className="atom-nucleus"
      style={{
        backgroundColor,
        backgroundImage: `url('${backgroundImageURL}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        rotate: `0deg`,
        animation: `spin-${
          shouldSpin ? animationDirection : oppositeDirection
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
