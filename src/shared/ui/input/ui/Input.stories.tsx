import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'shared/input',
    component: Input,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'Text',
        placeholder: 'Text',
    },
};
export const PrimaryWithLabel: Story = {
    args: {
        value: 'Text',
        placeholder: 'Text',
        label: 'Text',
    },
};
export const Error: Story = {
    args: {
        value: 'Text',
        placeholder: 'Text',
        error: 'error',
    },
};
export const ErrorWithLabel: Story = {
    args: {
        value: 'Text',
        placeholder: 'Text',
        label: 'Text',
        error: 'error',
    },
};
