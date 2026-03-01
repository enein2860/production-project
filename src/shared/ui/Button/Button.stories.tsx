import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/theme'
import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text',
    },
}

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
}

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
