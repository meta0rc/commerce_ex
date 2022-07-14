import { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { Theme } from "../../../theme"

export interface DivType extends HTMLAttributes<HTMLDivElement> {
    padding?: string
    row?: boolean
    mode?: 'dark' | 'light'
    background?: keyof typeof Theme.colors
    children?: any
    h?: string
    w?: string
    align?: 'center' | 'left' | 'right'
    position?: 'relative' | 'absolute'
    display?: keyof typeof Theme.display
    as?: any
    radius?: keyof typeof Theme.radius
}

export const Box = styled.div<DivType>`
    ${({
        background = 'none',
        w,
        h,
        position,
        padding,
        display,
        mode,
        radius,

    }) => css`
        width: ${w};
        height: ${h};
        position: ${position};
        padding: ${padding};
        border-radius: ${radius};
        background: ${Theme.colors[background]};
        ${display ? Theme.display[display] : ''};
        ${mode ? Theme.mode[mode] : ''};
    `}`