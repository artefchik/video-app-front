import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
    title: 'shared/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
    args: {
        children: 'Typography',
        as: 'h1',
    },
};
export const h2: Story = {
    args: {
        children: 'Typography',
        as: 'h2',
    },
};
export const h3: Story = {
    args: {
        children: 'Typography',
        as: 'h3',
    },
};
export const h4: Story = {
    args: {
        children: 'Typography',
        as: 'h4',
    },
};
export const h5: Story = {
    args: {
        children: 'Typography',
        as: 'h5',
    },
};
export const p: Story = {
    args: {
        children: 'Typography',
        as: 'p',
    },
};
export const span: Story = {
    args: {
        children: 'Typography',
        as: 'span',
    },
};
