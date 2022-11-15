import React from 'react';

import Orbit from './components/Orbit';

export type Spin = 'right' | 'left' | 'no-spin';

export interface NucleusPropsConfig {
  animationSpeedInSeconds?: number;
  backgroundColor?: string;
  backgroundImageURL?: string;
  className?: string;
  margin?: number;
  shouldSpin?: boolean;
  size: number;
}

export interface NucleoProps extends NucleusPropsConfig {
  animationSpeedInSeconds?: number;
  spin?: Spin;
}

export interface PlanetPropsConfig {
  animationSpeedInSeconds?: number;
  backgroundColor?: string;
  backgroundImageURL?: string;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: number;
  className?: string;
  degrees?: number;
  margin?: number;
  padding?: number;
  shouldSpin?: boolean;
  size: number;
  spin?: Spin;
}

export interface PlanetProps extends PlanetPropsConfig {
  borderSize?: number;
  planetIndex?: number;
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

export interface ReactOrbitsConfig {
  children: OrbitComponent | OrbitComponent[];
  firstOrbitDiameter: number;
  marginBetweenOrbits: number;
  nucleus?: NucleusPropsConfig;
}
