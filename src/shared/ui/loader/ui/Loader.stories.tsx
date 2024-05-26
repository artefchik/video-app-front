import React from 'react';
import type { Meta, StoryObj, } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
    title: 'shared/loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width:30,
        height:30,
    },
};
