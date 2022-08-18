import styled from "styled-components"
type Burger = {
    active: boolean
}
export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    box-shadow: 0 0 3px #ccc;
    background: #fff;
    a {
        color: #000;
    }
`
export const ButtonSearch = styled.div`
    position: absolute;
    right: 5px; 
`
export const ContainerSearch = styled.nav`
    display: flex; 
    align-items: center;
    position: relative;
    input {
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px;
        margin-left: 5px;
    }
`
export const ContainerNavIcons = styled.div`
    @media(max-width: 768px) {
        position: relative;
        z-index: 9;
        left: -10px;
    }
`
export const List = styled.ul<Burger>`
    display: flex;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
        position: fixed;
        height: 100vh;
        background: #fff;
        box-shadow: 0 0 2px #ccc;
        width: 300px;
        right: ${props => props.active === true ? '0' : '-100%'};
        z-index: 5;
        top: 0;
        justify-content: center;
        transition: 1s;
    }
`
export const ListIcons = styled.ul`
    display: flex;
    align-items: center;
    li { 
        margin: 0 10px;
    }
`
export const ListItem = styled.li`

    margin: 0 10px;
    cursor: pointer;
    @media(max-width: 768px){
        margin: 15px 0 !important;
    }
`

export const Link = styled.a``

export const Search = styled.input``