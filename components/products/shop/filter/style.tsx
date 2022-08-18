import styled from "styled-components";
import { Button } from "../../../ui";

export const FilterList = styled.ul`
    display: grid;
    grid-template-columns: 60% 60%;
`
export const FilterListItem = styled.li`
    display: flex;
    align-items: center;
`
export const FilterInput = styled.input`
    margin-right: 10px;
`
export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 800px) {
        justify-content: center;
        margin: 0 auto;
    }
`
export const ButtonFilter = styled(Button)`
    margin: 10px 2px;
`