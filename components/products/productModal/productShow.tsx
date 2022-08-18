import Router from 'next/router'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/Cart/CartContext"
import { ProductContext, ProductType } from "../../../context/Products/ProductContext"
import { Container, Body, Heading, Button } from "../../ui"
import { VscClose } from 'react-icons/vsc'
import { DropDdown } from "../dropdown/Dropdown"
import { ProductGalery } from "../productGalery/ProductGalery"
import { Stars } from "../../stars/Stars"

import { 
    ShowProduct, 
    Close, 
    ProductImage, 
    ListPrice, 
    Coin, 
    Price, 
    ButtonCart, 
    Bluur, 
    ContainerStars,
    ContainerButtons
} from "./style"
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

type incart = {
    in: boolean,
    quanty: number
}

export const ProductShow = (props: ProductType) => {

    const cart = useContext(CartContext)

    const Product = useContext(ProductContext)

    const {id, name, description } = props

    const [inCart, updateCart] = useState<incart>({in: false, quanty: 0})

    const [quantyUpdate, setUpdate] = useState<any>(Product.product?.quanty)

    const HandleButtonProduct = () => {
        if(inCart.in === false){
            const quanty = Product.quanty ? Product.quanty : 1
            cart.addToCart(props, quanty)
        }
        else {
            Router.push('/checkout')
        }
    }
    const close = () => {
        if(window.innerWidth < 768){
            window.scrollTo(0, 4000)
        }
        Product.showModalProduct(null!)
    }

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
        <>
        <ShowProduct>
            <Close>
                <VscClose onClick={close} />
            </Close>
            <Container display="flex" w={'100%'}>
                <ProductGalery id={id}/>
                <ProductImage src={Product.imageProduct} alt={name} height={505} />
            </Container>
            <Container padding="0 5%" mode="light" w={'100%'}>
                <Heading color="dark" level={2} size={'medium'}>{name}</Heading>
                <ContainerStars display={'flex'}>
                    <Stars quanty={Product.products[Number(id)]?.rate} />
                </ContainerStars>
                <Body color="dark">{description}</Body>
                <ListPrice display={'flex'} radius={'sma'}>
                    <Coin>R$</Coin>
                    <Price level={3} color={"dark"} size={"large"}>
                        { Product.price }
                    </Price>
                </ListPrice>
                {inCart.in === false && (
                    <DropDdown numItems={quantyUpdate} />
                )}
                <ContainerButtons>
                    <Button onClick={HandleButtonProduct} size={'thin'}> 
                        {inCart.in === false ? 'Add to Cart' : 'Go to checkout'}
                    </Button>
                    <Button onClick={() => Router.push('/' + id)} size={'thin'}> 
                        Ir para produto
                    </Button>
                </ContainerButtons>
            </Container>
        </ShowProduct>
        <Bluur />
        </>
    )
}