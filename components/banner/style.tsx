import styled from "styled-components"
import { Container, Button } from "../ui"

export const SliderConter = styled(Container)`
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
export const ContainerSlider = styled(Container)`
    position: absolute;
    width: 50%;
    padding: 5%;
    z-index: 3;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Hover = styled(Container)`
    position: absolute;
    background: #000000a6;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2;
`
export const Btn = styled(Button)`
    background: ${props => props.theme.colors.primary};
    margin-top: 10px;
    a { 
        color: #fff;
    }
`