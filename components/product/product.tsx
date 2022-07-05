import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/CartContext"

export type ProductType = {
    id: string
    description?: string
    name: string
    image: string
    price: string
    background?: string
    w?: string
    h?: string
}

const ContainerProduct = styled.div`position: relative;`
const ImageProduct = styled.img``
const PriceProduct = styled.span`
    position: absolute;
    left: 0; top: 0;
    background: #000;
    padding: 10px 35px;
    color: #fff;
`
const ProductDetails = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    max-height: 1000px;
    width: 100%;
    height: 100% !important;
    background: ;
    z-index: 9;
    left: 0;

    img {
        height: 70% !important;
        padding: 5%;
    }
`
const ContainerFlex = styled.div`
    display: flex;
    height: 45px !important;
`
const ImageDetails = styled.img``
const TitleDetails = styled.h2`
    font-size: 3em;
`
const PriceDeatils = styled.span`
    padding: 10px 35px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background: #000;
`
const ButtonCart = styled.button`
    padding: 10px 35px;
    border: none;
    border-radius: 3px;
    margin: 0 15px;
    &:hover {
        color: #fff;
        background: #673ab7;
        cursor: pointer;
        transition: 1s;
    }
    
`
const Container = styled.div`
    width: 100%;
    height: 100% !important;;
    background: #fff;
    padding: 5%;
`
const Paragraph = styled.p` margin: 10px 0; line-height: 1.5;`
const Close = styled.button`
    border: none;
    background: none;
    font-size: 2em;
    color: #fff;
    position: fixed;
    right: 25px;
    transition: 1s;
    transform: rotate(-90deg);
    color: tomato;
    cursor: pointer; 

`
const Bluur = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    background: #000000fa;
    z-index: 8;
`

export const Product = ( { name, image, price, w, h, background, description } : ProductType) => {

    const [product, setProduct] = useState<any>()
    const cart = useContext(CartContext)
    useEffect(() => {
        document.body.style.background = '';
    }, [product])

    return (
        <>
            <ContainerProduct onClick={() => setProduct({image, name, price, description})} style={{background: background ? background : 'none'}} key={'containerProduct' + name}>
                <ImageProduct src={image} alt={name} width={w} height={h} key={image + name} />
                <PriceProduct key={name + price}>
                    { price }
                </PriceProduct>
            </ContainerProduct>

            { product && (
            <>
            <ProductDetails>
                <Close onClick={() => setProduct(null)}> X </Close>
                <ImageDetails src={product.image} alt={product.name} height={505}/>
                <Container>
                    <TitleDetails>
                        {product.name}
                    </TitleDetails>
                    <Paragraph>
                        {product.description}
                    </Paragraph>
                    <ContainerFlex>
                        <PriceDeatils>
                            {product.price}
                        </PriceDeatils>
                        <ButtonCart onClick={() => cart.addToCart(product)}>
                            Add to Cart
                        </ButtonCart>
                    </ContainerFlex>
                </Container>
            </ProductDetails>
            <Bluur />
            </>
            )}
        </>
    )
}