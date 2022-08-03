import styled from "styled-components"
import { Container } from "../container/Container"
import { Body } from "../typography/Typography"

export const ListContainer = styled(Container)`
    position: relative;
`
export const QuantyContainer = styled(Container)`
    align-items: center;
`
export const Info = styled(Body)`
    font-size: 10px;
    margin-top: 0 !important;
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40px;
    background: #fff;
    box-shadow: 0 0 3px #ccc;
    width: 250px;
`
export const ListName = styled.span` 
`
export const ListItem = styled.li`
    margin: 15px !important;
    cursor: pointer;
`
export const iconEffect = {
    transition: '0.5s',
    marginLeft: '5',
    transform: 'rotate(-180deg)'
}
export const desEffect = { 
    marginLeft: '5',
    transition: '0.5s',
    transform: 'rotate(0deg)'
}
export type DropType = {
    name?: string, 
    numItems?: number
}