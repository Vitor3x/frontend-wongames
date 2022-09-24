import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type wrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `
}

export const Wrapper = styled.button<wrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
