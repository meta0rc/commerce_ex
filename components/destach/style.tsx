import styled from "styled-components";
import { Container } from "../ui";

export const MobileContainer = styled(Container)`width: 50%;`
export const DesktopContainer = styled(Container)``
export const ContentDestach = styled(Container)``
export const ImageContainerDestach = styled(Container)``

export const Content = styled(Container)`
    width: 70%;
    padding: 5%;
    background: linear-gradient(45deg, #ff9900, #7a00ff);
    
`

export const ImageDestach = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const ListDetails = styled.ul``
export const ListItemDetails = styled.li`
    color: #fff;
    font-weight: 300;
    font-size: 13px;
`
export const ContainerDestach = styled(Container)`
    width: 100%;
    display: flex;
    background: ${props => props.theme.colors.light};
    ${MobileContainer}{
        display: none;
    }
    ${Content}{
        * {
            margin-bottom: 10px;
        }
    }
    @media(max-width: 768px){ 
        flex-wrap: wrap;
        div {
            width: 100%;
        }
        ${MobileContainer}{
            display: block;
        }
        ${DesktopContainer}{
            display: none;
        }
        h2 {
            font-size: 2em;
        }
    }
`
