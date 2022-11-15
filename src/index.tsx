import * as React from 'react';

import Nucleus from './components/Nucleus';
import Orbit from './components/Orbit';
import Planet from './components/Planet';
import ReactPlanets from './components/ReactPlanets';

function ExampleComponent() {
  return (
    <ReactPlanets firstOrbitDiameter={200} marginBetweenOrbits={20}>
      <Orbit borderColor="red" spin="left">
        <Nucleus backgroundColor="red" size={20} />
        <Planet size={10} spin="left" />
      </Orbit>
      <Orbit animationSpeedInSeconds={2} borderColor="#95abd5" spin="right">
        <Planet backgroundColor="blue" size={10} />
        <Planet backgroundColor="green" shouldSpin={false} size={20} />
      </Orbit>
    </ReactPlanets>
  );
}

export { Nucleus, ReactPlanets, Orbit, Planet, ExampleComponent };
