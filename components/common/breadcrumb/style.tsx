import styled from "styled-components";

export const ListBreadCrumb = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
    @media(max-width: 768px) {
        justify-content: center;
    }
`
export const ListItemBreadCrumb = styled.li`
    margin: 5px;
`