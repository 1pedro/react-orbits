/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Nucleus from '../components/Nucleus';
import Orbit from '../components/Orbit';
import Planet from '../components/Planet';
import ReactOrbits from '../components/ReactOrbits';

export default {
  title: 'Example/ReactOrbits',
  component: ReactOrbits,
  argTypes: {},
  subcomponents: { ReactPlanets: ReactOrbits },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ReactOrbits>;

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div style={{ width: 200, height: 300 }}>{children}</div>;
}

const Template: ComponentStory<typeof ReactOrbits> = (args: any) => (
  <Container>
    <ReactOrbits {...args} />
  </Container>
);

export const SingleOrbit = Template.bind({});
SingleOrbit.args = {
  firstOrbitDiameter: 200,
  marginBetweenOrbits: 100,
  children: (
    <Orbit borderColor="#95abd5" degrees={90}>
      <Nucleus backgroundColor="coral" size={40} />
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        shouldSpin={false}
        size={40}
        spin="left"
      />
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        size={20}
        spin="right"
      />

      <Planet animationSpeedInSeconds={2} backgroundColor="lightgreen" size={10} spin="right" />
    </Orbit>
  ),
};

export const MultipleOrbits = Template.bind({});
MultipleOrbits.args = {
  firstOrbitDiameter: 200,
  marginBetweenOrbits: 40,
  children: [
    <Orbit borderColor="#95abd5" degrees={90}>
      <Nucleus backgroundColor="coral" size={40} />
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        shouldSpin={false}
        size={40}
        spin="left"
      />
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        size={10}
        spin="right"
      />

      <Planet animationSpeedInSeconds={2} backgroundColor="lightgreen" size={10} spin="right" />
    </Orbit>,

    <Orbit borderColor="#95abd5" degrees={-90} spin="left">
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        shouldSpin={false}
        size={40}
        spin="left"
      />
      <Planet
        animationSpeedInSeconds={2}
        backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
        size={20}
        spin="right"
      />

      <Planet animationSpeedInSeconds={2} backgroundColor="lightgreen" size={10} spin="right" />
    </Orbit>,
  ],
};

export const SolarSystem = Template.bind({});
SolarSystem.args = {
  firstOrbitDiameter: 120,
  marginBetweenOrbits: 30,
  children: [
    <Orbit animationSpeedInSeconds={2} borderColor="#95abd5" borderSize={1} degrees={90}>
      <Nucleus backgroundColor="yellow" size={70} />
      <Planet backgroundColor="#b88600" shouldSpin={false} size={15} spin="left" />
    </Orbit>,

    <Orbit animationSpeedInSeconds={2.5} borderColor="#95abd5" borderSize={1} degrees={-90}>
      <Planet backgroundColor="#DEB880" shouldSpin={false} size={10} spin="left" />
    </Orbit>,
    <Orbit animationSpeedInSeconds={3} borderColor="#95abd5" borderSize={1} degrees={-90}>
      <Planet backgroundColor="#6495E0" shouldSpin={false} size={20} spin="left" />
    </Orbit>,

    <Orbit animationSpeedInSeconds={3.5} borderColor="#95abd5" borderSize={1} degrees={-90}>
      <Planet backgroundColor="#A52A20" shouldSpin={false} size={16} spin="left" />
    </Orbit>,

    <Orbit animationSpeedInSeconds={4} borderColor="#95abd5" borderSize={1} degrees={-90}>
      <Planet backgroundColor="#FAEBD0" shouldSpin={false} size={30} spin="left" />
    </Orbit>,
  ],
};
