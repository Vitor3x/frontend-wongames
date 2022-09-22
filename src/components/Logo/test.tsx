import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white logo by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black logo when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
