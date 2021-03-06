import { Meta, Story } from '@storybook/react'
import { Card } from './Card'
import { CardBody } from './CardBody'
import { CardTitle } from './CardTitle'

export default {
  title: 'π¨ λμμΈμμ€ν / π μ»΄ν¬λνΈ(@core) / π©Έ Molecules / Card',
  component: Card,
  argTypes: {
    isShadow: { control: 'boolean', default: true }
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
const Template: Story = (args) => {
  return (
    <Card {...args}>
      <CardTitle text="μΉ΄λ μ λͺ© μμ­" />
      <CardBody>{'μΉ΄λ λ°λ μμ­μλλ€. λ΄λΆμ children μ»΄ν¬λνΈ μ¬μ©λ κ°λ₯ν©λλ€.'}</CardBody>
    </Card>
  )
}

export const defaultCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultCard.storyName = 'κΈ°λ³Έ μ¬μ©'

const onlyTitleTemplate: Story = (args) => {
  return (
    <Card {...args}>
      <CardTitle text="μΉ΄λ μ λͺ© μμ­" />
    </Card>
  )
}
export const onlyTitle = onlyTitleTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyTitle.storyName = 'νμ΄νλ§ ν¬ν¨'
onlyTitle.args = {
  isShadow: false
}

const onlyBodyTemplate: Story = (args) => {
  return (
    <Card {...args}>
      <CardBody>{'μΉ΄λ λ°λ μμ­μλλ€. λ΄λΆμ children μ»΄ν¬λνΈ μ¬μ©λ κ°λ₯ν©λλ€.'}</CardBody>
    </Card>
  )
}
export const onlyBody = onlyBodyTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyBody.storyName = 'λ°λλ§ ν¬ν¨'
onlyBody.args = {
  children: 'μΉ΄λ λ°λ μμ­μλλ€. λ΄λΆμ children μ»΄ν¬λνΈ μ¬μ©λ κ°λ₯ν©λλ€.'
}
