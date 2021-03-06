import { Meta, Story } from '@storybook/react'
import { Profile } from '.'

export default {
  title: 'π¨ λμμΈμμ€ν / π μ»΄ν¬λνΈ(@core) / π§¬ Organisms / Profile',
  component: Profile,
  argTypes: {
    name: { control: 'text' },
    subName: { control: 'text' },
    size: { control: 'number', default: 50 }
  },
  parameters: {
    docs: {
      description: {
        component: 'νλ‘ν'
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Profile {...args} />
}

export const firstProfile = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
firstProfile.storyName = 'Profile'
firstProfile.args = {
  name: 'μ°λλΌλ°',
  subName: 'sandra@ssg.com',
  size: 50
}
