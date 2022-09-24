import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}
