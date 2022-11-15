import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Planet from '../components/Planet';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Planet',
  component: Planet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Planet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Planet> = args => (
  <div style={{ position: 'relative', width: '100%', marginTop: 200 }}>
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
  animationDirection: 'no-spin',
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  size: 40,
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
  animationDirection: 'left',
  animationSpeedInSeconds: 5,
};

export const WithCustomCSSClasses = Template.bind({});
WithCustomCSSClasses.args = {
  className: 'planet-cyan',
  size: 40,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
