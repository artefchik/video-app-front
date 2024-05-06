import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: 'primary',
    },
};
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: 'secondary',
    },
};

export const Alternative: Story = {
    args: {
        children: 'Text',
        theme: 'alternative',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear',
    },
};
