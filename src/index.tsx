import * as React from 'react';

import Nucleus from './components/Nucleus';
import Orbit from './components/Orbit';
import Planet from './components/Planet';
import ReactPlanets from './components/ReactPlanets';

export function ExampleComponent() {
  return (
    <ReactPlanets firstOrbitDiameter={200} marginBetweenOrbits={20}>
      <Orbit borderColor="red" index={1}>
        <Nucleus
          animationDirection="left"
          animationSpeedInSeconds={2}
          backgroundColor="red"
          size={20}
        />

        <Planet animationDirection="left" animationSpeedInSeconds={2} size={10} />
      </Orbit>
    </ReactPlanets>
  );
}

export { Nucleus, ReactPlanets, Orbit, Planet };
