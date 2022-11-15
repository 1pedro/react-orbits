import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Planet from '../components/Planet';
import { PlanetPropsConfig } from '../types';

export default {
  title: 'Example/Planet',
  component: Planet,
  argTypes: {
    borderSize: { control: false },
    planetIndex: { control: false },
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Planet>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Planet> = (args: PlanetPropsConfig) => (
  <div style={{ position: 'relative', width: '100%', marginTop: '50vh' }}>
    <Planet {...args} />;
  </div>
);

export const Colored = Template.bind({});
Colored.args = {
  size: 40,
  backgroundColor: 'red',
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  size: 40,
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
  spin: 'no-spin',
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  size: 40,
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
  spin: 'left',
  animationSpeedInSeconds: 5,
};

export const WithCustomCSSClasses = Template.bind({});
WithCustomCSSClasses.args = {
  className: 'planet-cyan nice-shadow',
  size: 40,
};
