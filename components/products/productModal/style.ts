import styled from "styled-components"
import { Button, Heading, Container, Body } from "../../ui"

export const ButtonCart = styled(Button)`
    margin-left: 5px;
    &:hover {
        color: #fff;
        background: #673ab7;
        cursor: pointer;
        transition: 1s;
    }
`
export const Coin = styled.span``
export const Price = styled(Heading)`
    margin-right: 15px;
`
export const ProductImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;
    transition: 1s;
`
export const ShowProduct = styled(Container)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    height: 80vh;
    background: ${props => props.theme.colors.light};
    margin: 5%;
    border-radius: 5px;
    div {
        border-radius: inherit;
    }
    p {
        margin: 10px 0;
    }
    button {
        margin-right: 5px;
    }
    ${ProductImage} { 
        width: 70%;
    }
    @media (max-width: 768px){
        flex-wrap: wrap;
        height: auto;
        position: absolute;
        
        h2 {
            text-align: center;
        }
        ${ProductImage} {
            margin: 0 auto;
            width: 50%;
            height: auto;    
        }
    }
    @media (max-width: 500px) {
        ${ProductImage} { 
            width: 100%;
        }
        ${Body} {
            text-align: justify;
        }

        border-radius: 0 !important;
    }

`
export const Close = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px 8px;
    cursor: pointer;
    @media (min-width:768px) { border-top-right-radius: 3px;}
    &:hover {
        background: orange;
    }
`
export const Bluur = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    background: #000000fa;
    z-index: 8;
`
export const ListPrice = styled(Container)`
    align-items: center;
`
export const ContainerStars = styled(Container)`
    margin: 10px 0;
    align-items: center;
    @media (max-width: 500px) {
        justify-content: center;
    }

`
export const ContainerButtons = styled(Container)`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        button { 
            font-size: 13px !important;
            width: 100% !important;
            margin-bottom: 5px;
        }
    }
`