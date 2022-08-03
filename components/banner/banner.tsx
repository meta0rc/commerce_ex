import styled from 'styled-components'
import { Body, Button, Container, Heading } from '../ui'

const SliderConter = styled(Container)`
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
const ContainerSlider = styled(Container)`
    position: absolute;
    width: 50%;
    padding: 5%;
    z-index: 3;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Hover = styled(Container)`
    position: absolute;
    background: #000000a6;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2;
`
const Btn = styled(Button)`
    background: ${props => props.theme.colors.primary};
    margin-top: 10px;
`
export const Banner = () => {
    return(
        <SliderConter position='relative'>
            <ContainerSlider>
                <Heading size='xsmall' level={2} weight='xxbold'>
                    YOU COME AT
                </Heading>
                <Heading color='primary' level={1} size={'xxlarge'} weight='xxbold'>
                    The your Place
                </Heading>
                <Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur animi fuga quis, nobis quos qui in consequuntur? Nesciunt, libero voluptatum. Officiis omnis commodi quos praesentium sint aliquam quo assumenda.
                </Body>
                <Btn>
                    Se all here
                </Btn>
            </ContainerSlider>
            <img src='/images/joven.jpg' alt='Banner'/>
            <Hover />
        </SliderConter>

    )
}