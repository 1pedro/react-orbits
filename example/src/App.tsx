import React from 'react'

import { Nucleus, Orbit, Planet, ReactPlanets } from 'react-planets'
import 'react-planets/dist/styles.css'

const App = () => {
  return (
    <ReactPlanets marginSpace={100} initialSizes={200}>
      <Orbit borderColor='gray' borderSize={1} direction='left'>
        <Nucleus
          shouldSpin={false}
          size={60}
          backgroundColor={'red'}
          backgroundImageURL={
            'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa'
          }
        />
      </Orbit>
      {/*TODO: MAKE DEGREES AND SHOULDSPIN INDEPENDENTLY */}
      <Orbit borderColor='red' direction='left' degrees={90}>
        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
          shouldSpin={false}
          backgroundImageURL={
            'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa'
          }
        />
        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
          shouldSpin={false}
          backgroundImageURL={
            'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa'
          }
        />
        <Planet
          shouldSpin={false}
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
          backgroundImageURL={
            'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa'
          }
        />
        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
        />
      </Orbit>
      <Orbit borderColor='red' direction='right' degrees={90}>
        <Planet
          animationDirection='right'
          animationSpeedInSeconds={2}
          backgroundColor={'#ff00ff'}
          size={30}
        />
        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
        />
        <Planet
          animationDirection='left'
          animationSpeedInSeconds={2}
          size={30}
          backgroundColor={'green'}
        />
      </Orbit>
    </ReactPlanets>
  )
}

export default App
