import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      padding: '0.8rem',
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
})
