import styled from "styled-components";

type closed = {
    close: boolean
}
export const ContainerPopup = styled.div`
    position: fixed;
    right: ${(props: closed) => props.close === true ? '-100%' : '10px'};
    transition: 1s;
    z-index: 9;
    bottom: 10px;
    padding: 4px 10px;
    text-align: center;
    background: ${props => props.theme.colors.success};
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content; space-between;
    align-items: center;
    animation: colors infinite 5s;

    @keyframes colors 
        { 
            0% {
                background: purple;
            }
            25% {
                background: ${props => props.theme.colors.primary};
            }
            50% {
                background: orange;
            }
            75% { 
                background: #162547;
            }
            100% {
                background: #181818;
            }
        }
    
`
export const CloseButton = styled.div`
    background: black;
    position: relative;
    left: -5px;
    border-radius: 5px;
`