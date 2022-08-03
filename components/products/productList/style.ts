import styled from "styled-components";
import { Container } from "../../ui";

export const ListItem = styled(Container)`
    width: 200px;
`
export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    background: #000;
    width: 90%;
    transition: 1s;
    overflow-x: hidden;
    scroll-behavior: smooth;
    margin: 0 auto;
    align-items:  center;

    li {
        margin: 0 15px;
    }

    @media(max-width: 768px) {
        display: -webkit-box;
        text-align: center;
        ${ListItem} {
            width: 100%;
            margin: 0;
        }
    }
`

export const Control = styled.div`
    position: absolute;
    height: 25px;
    padding: 0 25px;
    display:flex;
    width: 100%;
    justify-content: space-between;
    svg {
        position: relative;
        z-index: 5;
    }
`
export const ContainerList = styled(Container)`
    display: flex;
    align-items: center;
    position: relative;
    height: 220px;
    background: #000;
`