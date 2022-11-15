import React from 'react';

import Orbit from './components/Orbit';

export type Spin = 'right' | 'left' | 'no-spin';

export interface NucleusPropsConfig {
  animationSpeedInSeconds?: number;
  backgroundColor?: string;
  backgroundImageURL?: string;
  margin?: number;
  shouldSpin?: boolean;
  size: number;
}

export interface NucleoProps extends NucleusPropsConfig {
  animationDirection?: Spin;
  animationSpeedInSeconds?: number;
}

export interface PlanetPropsConfig {
  animationSpeedInSeconds?: number;
  backgroundColor?: string;
  backgroundImageURL?: string;
  borderSize?: number;
  degrees?: number;
  margin?: number;
  padding?: number;
  planetIndex?: number;
  shouldSpin?: boolean;
  size: number;
}

export interface PlanetProps extends PlanetPropsConfig {
  animationDirection?: Spin;
  animationSpeedInSeconds?: number;
}

export interface OrbitProps {
  animationSpeedInSeconds?: number;
  borderColor?: 'red' | 'green' | 'blue';
  borderSize?: number;
  children?: JSX.Element | JSX.Element[];
  degrees?: number;
  direction?: Spin;
  index?: number;
  marginSpace?: number;
  nucleus?: NucleusPropsConfig;
  planets?: PlanetPropsConfig[];
  size?: number;
  useNucleus?: boolean;
}

type OrbitComponent = React.ReactElement<typeof Orbit>;

export interface ReactPlanetsConfig {
  children: OrbitComponent | OrbitComponent[];
  firstOrbitDiameter: number;
  marginBetweenOrbits: number;
  nucleus?: NucleusPropsConfig;
}
