import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Counter from '../Counter/Counter';

const meta = {
  title: 'UI/Button',
  component: Button.Root,
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
      options: [28, 36, 56],
      control: { type: 'select' },
    },
    state: {
      options: ['enabled', 'pressed', 'loading', 'disabled'],
      control: { type: 'select' },
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: 'primary',
    size: 36,
    state: 'enabled',
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    size: 36,
    state: 'enabled',
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    style: 'primary',
    size: 28,
    state: 'enabled',
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    style: 'primary',
    size: 56,
    state: 'enabled',
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    style: 'primary',
    size: 36,
    state: 'loading',
    loading: true,
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
        <Button.Loader />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    style: 'primary',
    size: 36,
    state: 'disabled',
    disabled: true,
    children: (
      <>
        <Button.Ripple />
        <Button.Content>Button</Button.Content>
      </>
    ),
  },
};

export const WithCounter: Story = {
  args: {
    style: 'primary',
    size: 36,
    state: 'enabled',
    children: (
      <>
        <Button.Ripple />
        <Button.ContentWithCounter
          counter={
            <Counter.Root quantly="5" pulse>
              <Counter.Pulse />
              <Counter.Badge />
            </Counter.Root>
          }
        >
          Button with Counter
        </Button.ContentWithCounter>
      </>
    ),
  },
}; 