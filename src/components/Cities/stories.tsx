import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Cities, { CitiiesProps } from './index';

export default {
  title: 'Cities',
  component: Cities,
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as Meta;

export const Default: Story<CitiiesProps> = (args) => <Cities {...args} />;

Default.args = {
  state: 'AC'
};
