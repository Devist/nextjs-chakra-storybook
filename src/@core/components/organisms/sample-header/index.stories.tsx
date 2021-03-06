import { Meta, Story } from '@storybook/react'
import { SampleHeader } from '.'

export default {
  title: 'π¨ λμμΈμμ€ν / π μ»΄ν¬λνΈ(@core) / π§¬ Organisms ',
  component: SampleHeader,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'μν ν€λ'
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <SampleHeader {...args} />
}

export const firstSampleHeader = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
firstSampleHeader.storyName = 'SampleHeader'
