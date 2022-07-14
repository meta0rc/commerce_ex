import styled from 'styled-components'
import { Body, Container, Heading, Subheading } from '../ui'

const SliderConter = styled(Container)`
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
export const Banner = () => {
    return(
        <SliderConter position='relative'>
            <Container position='absolute' w='50%' padding='5%'>
                <Heading size='xsmall' level={2}>
                    YOU COME AT
                </Heading>
                <Heading color='secondary' level={1} size={'xxlarge'}>
                    The your Place
                </Heading>
                <Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur animi fuga quis, nobis quos qui in consequuntur? Nesciunt, libero voluptatum. Officiis omnis commodi quos praesentium sint aliquam quo assumenda.
                </Body>
            </Container>
            <img src='/images/joven.png' alt='Banner'/>
        </SliderConter>

    )
}