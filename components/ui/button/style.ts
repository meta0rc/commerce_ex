import { ButtonHTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { Theme } from "../../../theme"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    weight?: keyof typeof Theme.weights
    mode?: keyof typeof Theme.mode
    radius?: keyof typeof Theme.radius
    size?: keyof typeof Theme.sizes
    margin?: string
}

export const ButtonStyled = styled.button<ButtonProps>`

    height: 40px;

    ${({
        size = 'xsmall',
        margin = '0',
        radius = 'sma',
        weight = 'normal',
        mode = 'dark'
    }) => css`
        margin: ${margin};
        border-radius: ${Theme.radius[radius]};
        font-weight: ${Theme.weights[weight]};
        font-size: ${Theme.sizes[size]};
        ${Theme.mode[mode]};
        padding: 0 10px;
        &:hover {
            background: ${Theme.colors.primary};
            color: #fff;
            opacity: 0.6;
            cursor: pointer;
        }
    `}
;
    border: none;
`