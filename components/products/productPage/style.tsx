import { ShowProduct } from "../productModal/style"
import styled from 'styled-components'

export const ContainerPage = styled(ShowProduct)`
    position: initial;
    height: auto;
    margin: 1% 5%;
    button {
        margin-right: 5px;
        @media (max-width: 500px) {
            width: 100%;
            margin: 3px 0 !important;
        }
    }
`