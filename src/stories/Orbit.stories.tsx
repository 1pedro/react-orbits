/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Nucleus from '../components/Nucleus';
import Orbit from '../components/Orbit';
import Planet from '../components/Planet';

export default {
  title: 'Example/Orbit',
  component: Orbit,
  argTypes: {},
  subcomponents: { Planet },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Orbit>;

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div style={{ width: 200, height: 300 }}>{children}</div>;
}

const Template: ComponentStory<typeof Orbit> = (args: any) => (
  <Container>
    <Orbit {...args} />
  </Container>
);

const NucleusTemplate: ComponentStory<typeof Orbit> = (args: any) => (
  <Container>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <Orbit {...args}>{args.children.map((component: JSX.Element) => component)}</Orbit>
  </Container>
);

export const Empty = Template.bind({});
Empty.args = {
  size: 100,
  borderColor: '#95abd5',
};

export const Static = Template.bind({});
Static.args = {
  size: 100,
  spin: 'no-spin',
  borderColor: '#95abd5',
  children: (
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
    />
  ),
};

export const WithSpinPlanet = Template.bind({});
WithSpinPlanet.args = {
  size: 100,
  borderColor: '#95abd5',
  children: (
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
      spin="left"
    />
  ),
};

export const WithStaticPlanet = Template.bind({});
WithStaticPlanet.args = {
  size: 100,
  borderColor: '#95abd5',
  children: (
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      shouldSpin={false}
      size={40}
      spin="left"
    />
  ),
};

export const WithMultiplePlanets = Template.bind({});
WithMultiplePlanets.args = {
  size: 100,
  borderColor: '#95abd5',
  degrees: 90,
  children: [
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      shouldSpin={false}
      size={40}
      spin="left"
    />,
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={20}
      spin="right"
    />,

    <Planet animationSpeedInSeconds={2} backgroundColor="lightgreen" size={10} spin="right" />,
  ],
};

export const WithNucleus = NucleusTemplate.bind({});
WithNucleus.args = {
  size: 100,
  spin: 'right',
  borderColor: '#95abd5',
  children: [
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
    />,
    <Nucleus size={20} />,
  ],
};

export const WithSpinNucleus = NucleusTemplate.bind({});
WithSpinNucleus.args = {
  size: 100,
  spin: 'right',
  borderColor: '#95abd5',
  children: [
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
    />,
    <Nucleus
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={20}
    />,
  ],
};

export const WithStaticNucleus = NucleusTemplate.bind({});
WithStaticNucleus.args = {
  size: 100,
  spin: 'right',
  borderColor: '#95abd5',
  children: [
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
    />,
    <Nucleus
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      shouldSpin={false}
      size={20}
    />,
  ],
};

export const WithCustomClasses = NucleusTemplate.bind({});
WithCustomClasses.args = {
  size: 100,
  spin: 'right',
  borderColor: '#95abd5',
  className: 'nice-shadow',
  children: [
    <Planet
      animationSpeedInSeconds={2}
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      size={40}
    />,
    <Nucleus
      backgroundImageURL="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa"
      shouldSpin={false}
      size={20}
    />,
  ],
};
