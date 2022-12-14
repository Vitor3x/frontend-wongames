import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      padding: '0.8rem',
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      'font-size': '1.6rem'
    })
  })

  it('should render full width', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
  })

  it('should render Button as alink', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Won Games
      </Button>
    )

    expect(screen.getByRole('link', { name: /Won Games/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
