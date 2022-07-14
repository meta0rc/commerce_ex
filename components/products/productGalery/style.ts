import styled from "styled-components"
import { Container } from "../../ui"

export const Products = styled(Container)`
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin: 0 6px;
    
`
export const List = styled.li`

    box-shadow: 0 0 3px #ccc;
    margin: 5px;
    &:hover {
        cursor: pointer;
        transition: 0.2s;
        background: #000;
    }
    img {
        width: 70;
        height: 70;
        object-fit: cover;
    }
    .selected{
        background: #181818;
    }
    @media (max-width: 768px){
        display: none;
    }
`