import React from 'react'
import { PlanetProps } from '../../types'

function Planet({
  planetIndex = 0,
  size,
  degrees = 90,
  startDegree,
  animationSpeedInSeconds,
  backgroundImageURL,
  backgroundColor = 'blue',
  borderSize = 1,
  animationDirection,
  shouldSpin = true,
  padding
}: PlanetProps) {
  const oppositeDirection = animationDirection === 'left' ? 'right' : 'left'
  const margin = ((size / 20) * 10 + borderSize / 2) * -1
  const bg = backgroundImageURL
    ? { backgroundImage: `url('${backgroundImageURL}')` }
    : { backgroundColor }

  return (
    <div
      className='electron'
      style={Object.assign(
        {
          width: size,
          height: size,
          marginTop: `${margin}px`,
          marginLeft: `${margin}px`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding,
          rotate: `${
            startDegree ? `-${planetIndex * degrees}deg` : `${startDegree}deg`
          }`,
          animation: `spin-${
            shouldSpin ? animationDirection : oppositeDirection
          } ${animationSpeedInSeconds}s linear infinite`
        },
        bg
      )}
    />
  )
}

export default Planet
