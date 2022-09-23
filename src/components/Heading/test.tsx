import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
