import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/Cart/CartContext"
import { ProductContext, ProductType } from "../../../context/Products/ProductContext"
import { Stars } from "../../stars/Stars"
import { Container, Heading, Body, Button } from "../../ui"
import { DropDdown } from "../dropdown/Dropdown"
import { ProductGalery } from "../productGalery/ProductGalery"
import { ProductImage, ListPrice, Price, Coin, ContainerStars } from "../productModal/style"
import { ContainerPage } from './style'

import Router from 'next/router'

type incart = {
    in: boolean,
    quanty: number
}

export const ProductPage = (props: ProductType) => {

    const cart = useContext(CartContext)

    const Product = useContext(ProductContext)

    const [inCart, updateCart] = useState<incart>({in: false, quanty: 0})

    const [quantyUpdate, setUpdate] = useState<any>(Product.product?.quanty)

    const HandleButtonCart = () => {
        const quanty = Product.quanty ? Product.quanty : 1
        cart.addToCart(props, quanty)
    }
    const { id, name, image, price, rate, description, quanty} = props
    
    useEffect(() => {

        const productCart = cart.checkCart(id)
        if(productCart) {
            if(productCart.quanty && productCart.in) {
                updateCart(productCart)
            }
            setUpdate(quantyUpdate - inCart.quanty)

        }
    }, [cart])

    return (
        <ContainerPage>
            <Container display="flex" w={'100%'}>
                <ProductGalery id={id}/>
                <ProductImage 
                    src={image} 
                    alt={name} 
                    height={400} 
                />
            </Container>

            <Container 
                padding="5%" 
                mode="light" 
                w={'100%'}
            >
                <Heading 
                    color="dark" 
                    level={2} 
                    size={'medium'}>
                        {name}
                    </Heading>
                    
                <ContainerStars display={'flex'}>
                    <Stars quanty={rate} /> 
                    <Body size={'thin'} color={'gray'}>
                        (505 Avaliações)
                    </Body>
                </ContainerStars>
                <Body color="dark">{description}</Body>
                <ListPrice display={'flex'} radius={'sma'}>
                    <Coin>R$</Coin>
                    <Price level={3} color={"dark"} size={"large"}>
                        { Product.price ? Product.price : price }
                    </Price>
                </ListPrice>
                <Container>
                { inCart.in === false && (
                    <Button mode={'minimal'} 
                        onClick={HandleButtonCart}> 
                        Adicionar ao Carrinho
                    </Button>
                )}
          
                    <Button onClick={() => Router.push('http://localhost:3000/checkout')}>
                        Finalizar compra
                    </Button>
                </Container>
                <DropDdown numItems={quanty} />  
            </Container>
        </ContainerPage>

    )
}