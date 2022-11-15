import React from 'react';

import { getSpecificChild } from '../../helpers';
import { ReactOrbitsConfig } from '../../types';

function ReactOrbits({ children, firstOrbitDiameter, marginBetweenOrbits }: ReactOrbitsConfig) {
  const Orbits: JSX.Element[] = getSpecificChild(children, ['Orbit'], 'ReactPlanet');

  return (
    <React.Fragment>
      {Orbits.map((o, i) => {
        return React.cloneElement(o, {
          size: firstOrbitDiameter,
          marginSpace: marginBetweenOrbits,
          index: i,
          key: i,
        });
      })}
    </React.Fragment>
  );
}

export default ReactOrbits;
