import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import States, { StatesProps } from './index';

export default {
  title: 'States',
  component: States,
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as Meta;

export const Default: Story<StatesProps> = (args) => <States {...args} />;
