import styled from "styled-components"
import { Container } from "../ui"

export const ListItem = styled.li`
    position: relative;
    z-index: 9;
`
export const ContainerQuanty = styled(Container)`
    align-items: center;
`
export const ContainerClose = styled(Container)`
    margin-left: 10px;
`
export const ContainerCheckout = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100px;
    margin-right: 15px;
`
export const Link = styled.a``
export const CartList = styled.ul`
    position: absolute;
    width: 400px;
    border-top: 3px solid #000;
    right: 25px;
    background: #fff;
    z-index: 3;
    top: 50px;
    padding: 15px;
    box-shadow: 0 0 3px;
    @media (max-width: 768px) {
        right: -50px;
        width: 270px;
    }
`
export const ListItemCart = styled.li`
    border-bottom: 2px solid #ccc;
    padding: 10px 0;
`
export const ProductImage = styled.img``
export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SubTotal = styled.div`

    margin-top: 50px;
`
export const Title = styled.h3`
    margin: 10px 0;
`
export const Items = styled.span`
    font-size: 10px;
    font-weight: bold;
    color: #333;
`