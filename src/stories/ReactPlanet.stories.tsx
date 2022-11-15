/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Nucleus from '../components/Nucleus';
import Orbit from '../components/Orbit';
import Planet from '../components/Planet';
import ReactPlanets from '../components/ReactPlanets';

export default {
  title: 'Example/ReactPlanets',
  component: ReactPlanets,
  argTypes: {},
  subcomponents: { ReactPlanets },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ReactPlanets>;

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div style={{ width: 200, height: 300 }}>{children}</div>;
}

const Template: ComponentStory<typeof ReactPlanets> = (args: any) => (
  <Container>
    <ReactPlanets {...args} />
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
  marginBetweenOrbits: 60,
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
        size={20}
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
