import styled from "styled-components";

export const ContainerShop = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 860px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`
export const ContainerHeadShop = styled.div`
    display: flex;
    flex-direction: column;
 
`
export const ContainerHading = styled.div`
    margin: 25px 25px 25px 87px;
    @media(max-width: 768px) {
        text-align: center !important;
        margin: 25px;
    }
`