import styled from "styled-components";
import { Container } from "../../ui";

export const ContainerForm = styled(Container)`
    width: 30%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    
    background: #ededed;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    button {
        margin-top: 25px;
    }

`
export const Input = styled.input`
    padding: 0 5px;
    height: 30px;
    border: none;
    border-bottom: 1px solid #181818;
    background: none;
    margin-bottom: 20px;
`

