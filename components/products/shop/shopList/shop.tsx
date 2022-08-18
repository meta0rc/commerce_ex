import { useContext } from "react"
import { BsHandbag } from "react-icons/bs"
import { CartContext } from "../../../../context/Cart/CartContext"
import { ProductContext } from "../../../../context/Products/ProductContext"
import { Products } from "../../../../data/Products"
import { Stars } from "../../../stars/Stars"
import { Body, Container as ContainerPrice, Heading } from "../../../ui"
import { ProductComponent } from "../../product/product"
import { ProductShow } from "../../productModal/productShow"
import { ContainerFooterProduct, Price, ShopItem, ShopList } from "./style"

export const Shop = () => {

    const productContext = useContext(ProductContext)
    const cartContext = useContext(CartContext)
    return (
        <>
            <ShopList>
                { Products.map((product) => { 
                    return (
                        <ShopItem key={product.name + product.id }>
                            <ProductComponent {...product}/>
                            <Stars quanty={product.rate}/>
                            <Heading level={3} size={'xsmall'} color={'dark'}>
                                { product.name }
                            </Heading>
                            <ContainerFooterProduct>
                                <ContainerPrice display="flex" align="center">
                                    <Body weight="regular" size="thin" color="dark">
                                        R$
                                    </Body>
                                    <Body color="dark" weight="bold" size="small">
                                        { product.price }
                                    </Body>
                                </ContainerPrice>
                                <BsHandbag onClick={() => cartContext.addToCart(product, 1)} size={20} color="wine"/>
                            </ContainerFooterProduct>
                        </ShopItem>
                    )
                })}
            </ShopList>
            { productContext.product && <ProductShow {...productContext.product}/> }
        </>
    )
}