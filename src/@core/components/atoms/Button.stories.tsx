import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '@core/components'

export default {
  title: 'π¨ λμμΈμμ€ν / π μ»΄ν¬λνΈ(@core) / π¦  Atoms / Button',
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
