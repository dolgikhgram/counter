import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta = {
  title: 'UI/Counter',
  component: Counter.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: [8, 12, 16, 20, 24],
      control: { type: 'select' },
    },
    stroke: {
      control: 'boolean',
    },
    quantly: {
      control: 'text',
    },
    pulse: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Counter.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: 'primary',
    size: 16,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    size: 16,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const WithPulse: Story = {
  args: {
    style: 'primary',
    size: 16,
    stroke: false,
    quantly: '1',
    pulse: true,
    children: (
      <>
        <Counter.Pulse />
        <Counter.Badge />
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    style: 'primary',
    size: 8,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    style: 'primary',
    size: 12,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    style: 'primary',
    size: 20,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const VeryLarge: Story = {
  args: {
    style: 'primary',
    size: 24,
    stroke: false,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const WithStroke: Story = {
  args: {
    style: 'primary',
    size: 16,
    stroke: true,
    quantly: '1',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
};

export const WithLargeNumber: Story = {
  args: {
    style: 'primary',
    size: 16,
    stroke: false,
    quantly: '100',
    pulse: false,
    children: (
      <>
        <Counter.Badge />
      </>
    ),
  },
}; 