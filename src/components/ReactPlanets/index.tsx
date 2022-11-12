import React from 'react';

import { getSpecificChild } from '../../helpers';
import { ReactPlanetsConfig } from '../../types';

function ReactPlanets({ marginSpace, initialSizes, children }: ReactPlanetsConfig) {
  const Orbits: JSX.Element[] = getSpecificChild(children, ['Orbit'], 'ReactPlanet');

  return (
    <React.Fragment>
      {Orbits.map((o, i) => {
        return React.cloneElement(o, {
          initialSizes,
          marginSpace,
          index: i,
          key: i,
        });
      })}
    </React.Fragment>
  );
}

export default ReactPlanets;
