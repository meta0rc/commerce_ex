import styled from "styled-components";
import { Container } from "../../ui";

export const ProductsCheckout = styled(Container)`
    width: 70%;
    padding: 50px 30px 0;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        margin-bottom: 25px;
    }
`
export const ProductsListCheckout = styled.ul`
    margin-top: 30px;
`
export const ListItemCheckout = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    box-shadow: 0 0 3px #ccc;
    border-radius: 2px;
    margin-bottom: 10px;
`
export const ImageCheckout = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 15px;
`
export const ContentCheckout = styled(Container)`
    display: flex;
    flex-direction: column;

`
export const ControlContainerCheckout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;

    * {
        width: 30px;
   
    }

`
export const ButtonIncrement = styled.div`
    background: none;
    border: none;
`

export const InputIncrement = styled.input`
    border: none;
    text-align: center;
    font-size: 16px;
`
