import styled from "styled-components"
import { Button } from "../../ui"

export const ContainerProduct = styled.div`
    position: relative;
`

export const ButtonProduct = styled(Button)`
    position: absolute;
    left: 0;
    top: 0;
    width: 150px;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 0;
`
export const ImageProduct = styled.img``