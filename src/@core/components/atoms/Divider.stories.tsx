import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Divider } from '@chakra-ui/react'

export default {
  title: 'π¨ λμμΈμμ€ν / π μ»΄ν¬λνΈ(@core) / π¦  Atoms / Divider',
  component: Divider,
  argTypes: {
    colorScheme: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'gray']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['solid', 'dashed']
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['base', 'lg', 'xl']
      }
    },
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical']
      }
    }
  }
} as Meta

const Template: Story = (args) => <Divider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  colorScheme: 'blue',
  isDisabled: false,
  variant: 'solid',
  isLoading: false
}
