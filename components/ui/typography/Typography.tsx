import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

export type TextProps = {
    color?: keyof typeof Theme.colors
    size?: keyof typeof Theme.sizes
    weight?: keyof typeof Theme.weights
    level?: 1 | 2 | 3 | 4 | 5 | 6
    margin?: string
    onClick?: any
}
export const Body = styled('p').attrs<TextProps>(() => ({as: 'p'}))<TextProps>`
   ${({
        color = 'light',
        size = 'xsmall',
        weight = 300,
        margin
   }) => css`
        line-height: 1.5;
        font-size: ${Theme.sizes[size]};
        color: ${Theme.colors[color]};
        font-weight: ${weight};
        margin: ${margin}
   `}
`
export const Heading = styled('h1').attrs<TextProps>(({ level }) => ({as: `h${level}`}))<TextProps>`
    ${({
      color = 'light',
      size = 'xlarge',
      weight = 'regular'
    }) => css`
      font-size: ${Theme.sizes[size]};
      color: ${Theme.colors[color]};
      font-weight: ${Theme.weights[weight]};
      line-height: 1.2;
    `}
  `
