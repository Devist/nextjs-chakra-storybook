import { Meta, Story } from '@storybook/react'
import { SampleHeader } from '.'

export default {
  title: '🎨 디자인시스템 / 🍔 컴포넌트(@core) / 🧬 Organisms ',
  component: SampleHeader,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '샘플 헤더'
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
