import * as React from 'react'

import ReactPlanets from './components/ReactPlanets'
import Nucleus from './components/Nucleus'
import Orbit from './components/Orbit'
import Planet from './components/Planet'

export const ExampleComponent = () => {
  return (
    <ReactPlanets marginSpace={20} initialSizes={200}>
      <Orbit borderColor='red' index={1}>
        <Nucleus
          size={20}
          backgroundColor='red'
          animationDirection='left'
          animationSpeedInSeconds={2}
        />

        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={10}
        />
      </Orbit>
    </ReactPlanets>
  )
}

export { Nucleus, ReactPlanets, Orbit, Planet }
