import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ChockablockUI from '.';

export default {
  title: 'ChockablockUI',
  component: ChockablockUI,
} as ComponentMeta<typeof ChockablockUI>;

export const Primary: ComponentStory<typeof ChockablockUI> = () => (
  <ChockablockUI />
);
