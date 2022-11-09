import React from 'react'
import Orbit from '../Orbit'
import { getSpecificChild } from '../../helpers'

type OrbitComponent = React.ReactElement<typeof Orbit>

interface ReactPlanetsProps {
  children: OrbitComponent | OrbitComponent[]
  marginSpace: number
  initialSizes: number
}

function ReactPlanets({
  marginSpace,
  initialSizes,
  children
}: ReactPlanetsProps) {
  console.log({ children })
  const Orbits: JSX.Element[] = getSpecificChild(
    children,
    ['Orbit'],
    'ReactPlanet'
  )

  console.log('--> ReactPlanets')

  console.log({ marginSpace, initialSizes })

  console.log({ Orbits })

  return (
    <React.Fragment>
      {Orbits.map((o, i) => {
        return React.cloneElement(o, {
          initialSizes,
          marginSpace,
          index: i,
          key: i
        })
      })}
    </React.Fragment>
  )
}

export default ReactPlanets
