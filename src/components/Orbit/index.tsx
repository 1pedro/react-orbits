import React from 'react';

import { getSpecificChild } from '../../helpers';

function OrbitSkeleton({
  animationSpeedInSeconds,
  borderColor,
  borderSize,
  children: child,
  degrees,
  height,
  index: i,
  orbitMargin,
  spin,
  width,
}: any) {
  const animation =
    spin === 'no-spin'
      ? {}
      : {
          WebkitAnimation: `spin-${spin} ${animationSpeedInSeconds}s linear infinite`,
          MozAnimation: `spin-${spin} ${animationSpeedInSeconds}s linear infinite`,
          OAnimation: `spin-${spin} ${animationSpeedInSeconds}s linear infinite`,
          animation: `spin-${spin} ${animationSpeedInSeconds}s linear infinite`,
        };

  return (
    <div
      key={i}
      className="atom-orbit"
      style={{
        border: `${borderSize}px solid ${borderColor}`,
        borderRadius: '50%',
        left: '50%',
        height,
        marginTop: `${orbitMargin}px`,
        marginLeft: `${orbitMargin}px`,
        position: 'absolute',
        top: '50%',
        rotate: `${degrees}deg`,
        width,
        ...animation,
      }}
    >
      {child}
    </div>
  );
}

function Orbit({
  animationSpeedInSeconds = 8,
  borderColor = 'red',
  borderSize = 2,
  children,
  degrees = 20,
  index = 0,
  marginSpace = 0,
  size = 10,
  spin = 'right',
}: any) {
  const childs = getSpecificChild(children, ['Nucleus', 'Planet'], 'Orbit');

  const Nucleus = childs.find(c => c.type.name === 'Nucleus');
  const nucleus =
    Nucleus &&
    React.cloneElement(Nucleus, {
      rotate: '0deg',
      animationDirection: spin,
      animationSpeedInSeconds,
    });

  const globalMargin = marginSpace * 2;
  const width = size + index * globalMargin;
  const height = size + index * globalMargin;
  const middle = globalMargin / 2;
  const base = globalMargin * index * -1;
  const margin = base - middle + middle * index;
  const orbitMargin = margin - borderSize;

  const Planets = childs.filter(c => c.type.name === 'Planet');

  const orbitProps = {
    animationSpeedInSeconds,
    borderColor,
    borderSize,
    height,
    orbitMargin,
    spin,
    width,
  };

  let output;

  if (Planets.length) {
    output = Planets.map((p, i) => {
      const orbitDegrees = i * degrees;

      const planet = React.cloneElement(p, {
        animationDirection: spin,
        animationSpeedInSeconds,
        borderSize,
        degrees: orbitDegrees,
        planetIndex: i,
      });

      return (
        <OrbitSkeleton
          key={i}
          index={i}
          {...orbitProps}
          borderColor={i === 0 ? borderColor : 'transparent'}
          degrees={orbitDegrees}
        >
          {i === 0 && nucleus ? nucleus : <React.Fragment />}

          {planet}
        </OrbitSkeleton>
      );
    });
  } else {
    output = (
      <OrbitSkeleton index={0} {...orbitProps}>
        {nucleus || <React.Fragment />}
      </OrbitSkeleton>
    );
  }

  return <React.Fragment>{Planets && output}</React.Fragment>;
}

export default Orbit;
