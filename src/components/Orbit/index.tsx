import React from 'react';

import { getSpecificChild } from '../../helpers';

function Orbit({
  borderColor = 'red',
  borderSize = 2,
  animationSpeedInSeconds = 8,
  direction = 'right',
  index = 0,
  marginSpace = 0,
  degrees = 20,
  initialSizes = 10,
  children,
}: any) {
  const childs = getSpecificChild(children, ['Nucleus', 'Planet'], 'Orbit');

  const Nucleus = childs.find(c => c.type.name === 'Nucleus');
  const nucleus =
    Nucleus &&
    React.cloneElement(Nucleus, {
      rotate: '0deg',
      animationDirection: direction,
      animationSpeedInSeconds: animationSpeedInSeconds,
    });

  const baseSizes = initialSizes;
  const globalMargin = marginSpace * 2;
  const width = baseSizes + index * globalMargin;
  const height = baseSizes + index * globalMargin;
  const middle = globalMargin / 2;
  const base = globalMargin * index * -1;
  const margin = base - middle + middle * index;
  const orbitMargin = margin - borderSize;

  const Planets = childs.filter(c => c.type.name === 'Planet');

  console.log('--> Orbit');

  console.log({ Planets });

  function EmptyOrbit({
    index,
    children,
  }: {
    index: number;
    children?: JSX.Element | JSX.Element[];
  }) {
    return (
      <div
        key={index}
        className="atom-orbit"
        style={{
          border: `${borderSize}px solid ${index === 0 ? `${borderColor}` : 'transparent'}`,
          borderRadius: '50%',
          left: '50%',
          height,
          marginTop: `${orbitMargin}px`,
          marginLeft: `${orbitMargin}px`,
          position: 'absolute',
          top: '50%',
          rotate: `${index * degrees}deg`,
          width,
          WebkitAnimation: `spin-${direction} ${animationSpeedInSeconds}s linear infinite`,
          MozAnimation: `spin-${direction} ${animationSpeedInSeconds}s linear infinite`,
          OAnimation: `spin-${direction} ${animationSpeedInSeconds}s linear infinite`,
          animation: `spin-${direction} ${animationSpeedInSeconds}s linear infinite`,
        }}
      >
        {children}
      </div>
    );
  }

  let output;
  if (Planets.length) {
    output = Planets.map((p, i) => {
      const planet = React.cloneElement(p, {
        degrees: degrees,
        animationDirection: direction,
        animationSpeedInSeconds,
        borderSize: borderSize,
        planetIndex: i,
      });

      return (
        <EmptyOrbit index={i} key={i}>
          {i === 0 && nucleus ? nucleus : <React.Fragment />}

          {planet}
        </EmptyOrbit>
      );
    });
  } else {
    output = <EmptyOrbit index={0}>{nucleus || <React.Fragment />}</EmptyOrbit>;
  }

  return <React.Fragment>{Planets && output}</React.Fragment>;
}

export default Orbit;
