/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Nucleus from '../components/Nucleus';

export default {
  title: 'Example/Nucleus',
  component: Nucleus,
  argTypes: {},
  subcomponents: { Nucleus },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Nucleus>;

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div style={{ width: 200, height: 300 }}>{children}</div>;
}

const Template: ComponentStory<typeof Nucleus> = (args: any) => (
  <Container>
    <Nucleus {...args} />
  </Container>
);

export const Colored = Template.bind({});
Colored.args = {
  size: 100,
  backgroundColor: '#95abd5',
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  size: 100,
  spin: 'no-spin',
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
};

export const Spin = Template.bind({});
Spin.args = {
  size: 100,
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
};

export const WithCustomClasses = Template.bind({});
WithCustomClasses.args = {
  size: 100,
  className: 'nice-shadow',
  backgroundImageURL:
    'https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa',
};
