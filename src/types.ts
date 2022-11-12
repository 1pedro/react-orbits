import React from 'react';
import Orbit from './components/Orbit';

export type Direction = 'right' | 'left';

export interface NucleusPropsConfig {
  size: number;
  margin?: number;
  animationSpeedInSeconds?: number;
  backgroundImageURL?: string;
  backgroundColor?: string;
  shouldSpin?: boolean;
}

export interface NucleoProps extends NucleusPropsConfig {
  animationDirection?: Direction;
  animationSpeedInSeconds?: number;
}

export interface PlanetPropsConfig {
  planetIndex?: number;
  size: number;
  margin?: number;
  degrees?: number;
  animationSpeedInSeconds?: number;
  backgroundImageURL?: string;
  backgroundColor?: string;
  borderSize?: number;
  shouldSpin?: boolean;
  startDegree?: number;
  padding?: number;
}

export interface PlanetProps extends PlanetPropsConfig {
  animationDirection?: Direction;
  animationSpeedInSeconds?: number;
}

export interface OrbitProps {
  borderColor?: 'red' | 'green' | 'blue';
  borderSize?: number;
  animationSpeedInSeconds?: number;
  direction?: Direction;
  index?: number;
  marginSpace?: number;
  initialSizes?: number;
  degrees?: number;
  planets?: PlanetPropsConfig[];
  children?: JSX.Element | JSX.Element[];
  nucleus?: NucleusPropsConfig;
  useNucleus?: boolean;
}

type OrbitComponent = React.ReactElement<typeof Orbit>;

export interface ReactPlanetsConfig {
  children: OrbitComponent | OrbitComponent[];
  nucleus?: NucleusPropsConfig;
  marginSpace: number /* marginBetweenOrbits */;
  initialSizes: number /* firstOrbitDiameter */;
}
