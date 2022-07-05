import styled from 'styled-components'
import { Product } from '../product/product'

const SliderContainer = styled.div`
    height: 505px;
    img {
        &:hover {
            transform: scale(1.1);
            transition: 1s;
        }
    }

`
const ContainerSlider = styled.div`
    display: flex;
    height: 100%;
    `
const ContainerLeftSlider = styled.div`
    width: 80%;
    text-align: center;
    box-sizing: border-box;
`
const ContainerRightSlider = styled.div`
    
    div {
        height: 50%;
    }
    img {
        height: 100%;
    }
    display: flex;
    flex-direction: column;

`

export const Slider = () => {

    return (
        <SliderContainer>
            <ContainerSlider >
                <ContainerLeftSlider>
                    <Product 
                        id='1'
                        name='Head Phones' 
                        image='images/foneapp.png' 
                        price='R$ 79,99' 
                        background='#ff9800'
                        
                    />
                </ContainerLeftSlider>
                <ContainerRightSlider>
                    <Product 
                        id='2'
                        name='Head Phones' 
                        image='images/perfiericos.png' 
                        price='R$ 79,99' 
                        background=''
                    />
                    <Product 
                        id='3'
                        name='Head Phones' 
                        image='images/perfiericos2.png' 
                        price='R$ 79,99' 
                        background=''
                    />
                </ContainerRightSlider>
            </ContainerSlider>
        </SliderContainer>
    )
}