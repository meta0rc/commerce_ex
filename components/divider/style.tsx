import styled from "styled-components"
import { Container, Heading, Body } from "../ui"

export const DividerContainer = styled(Container)`
    display: flex;
    padding: 70px;
    align-items: center;
    h2 {
        width: 30%;
        margin-right: 25px;
    }
    p { 
        width: 70%;
    }
    @media (max-width: 768px) {
        display: block;
        padding: 50px;
        
        h2 {
            width: 100%;
            margin-right: 0px;
        }
        p { 
            width: 100%;
        }
    }
`