import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '@core/components'

export default {
  title: '🎨 디자인시스템 / 🍔 컴포넌트(@core) / 🦠 Atoms / Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'danger', 'success', 'warning']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['solid', 'outline', 'ghost', 'link']
      }
    }
  }
} as Meta

const Template: Story = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  colorScheme: 'primary',
  isDisabled: false,
  variant: 'solid',
  isLoading: false
}
