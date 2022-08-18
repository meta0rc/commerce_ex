import Link from 'next/link'
import { Body, Button, Container, Heading } from '../ui'
import { SliderConter, ContainerSlider, Btn, Hover } from './style'


export const Banner = (props: any) => {
    return(
        <SliderConter position='relative'>
            <ContainerSlider>
                <Heading size='xsmall' level={2} weight='xxbold'>
                    { props.heading1 ? props.heading : 'YOU COME AT'}
                </Heading>
                <Heading color='primary' level={1} size={'xxlarge'} weight='xxbold'>
                { props.heading2 ? props.heading2 : 'The your place'}
                </Heading>
                <Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur animi fuga quis, nobis quos qui in consequuntur? Nesciunt, libero voluptatum. Officiis omnis commodi quos praesentium sint aliquam quo assumenda.
                </Body>
                <Btn>
                    <Link href={props.link ? props.link : '/products'}>
                        Se all here
                    </Link>
                </Btn>
            </ContainerSlider>
            <img src={props.img ? `/images/${props.img}` : '/images/joven.jpg'} alt='Banner'/>
            <Hover />
        </SliderConter>

    )
}