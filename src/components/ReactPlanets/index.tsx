import React from 'react';

import { getSpecificChild } from '../../helpers';
import { ReactPlanetsConfig } from '../../types';

function ReactPlanets({ children, firstOrbitDiameter, marginBetweenOrbits }: ReactPlanetsConfig) {
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

export default ReactPlanets;
