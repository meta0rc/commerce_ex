import Router from "next/router"
import { useContext, useState } from "react"
import { BsHandbag } from "react-icons/bs"
import { VscClose } from "react-icons/vsc"
import { CartContext } from "../../context/Cart/CartContext"
import { Body, Button } from "../ui"
import { 
    ListItem, 
    CartList, 
    ListItemCart, 
    ProductContainer, 
    ContainerCart, 
    ProductImage, 
    ContainerQuanty, 
    ContainerClose, 
    SubTotal, 
    Title, 
    ContainerCheckout,
    Link,
    Items
} from "./style"


export const Cart = () => {

    const cart = useContext(CartContext)
    const [showCart, setShowCart] = useState(false)
    const onMouseCart = () => {
        showCart === false ? setShowCart(true) : setShowCart(false)
    }
    return (
        <>
            <ListItem>
                <Link onMouseEnter={onMouseCart} onClick={onMouseCart}>
                    <BsHandbag color={'#000'} size={23}/>
                    <Items>
                        {cart.products?.length}
                    </Items>
                </Link>
                { showCart == true && (
                    <CartList onMouseLeave={() => setShowCart(false)}>
                    { cart.products && cart.products.map((product: any, i) => {
                        return (
                            <ListItemCart key={product?.name} >
                                <ProductContainer>
                                    <ContainerCart>
                                        <ProductImage src={product?.image} width={50} height={50}/>
                                        <ContainerQuanty display={'flex'}>
                                            <Body size={'thin'} color={'success'}>
                                                { product?.quanty} X { product?.priceDefault.toFixed(2)}
                                            </Body>
                                        </ContainerQuanty>
                                    </ContainerCart>
                                    <Body size={'thin'} color={'dark'}>
                                        { product?.name}
                                    </Body>
                                    <ContainerClose >
                                        <VscClose size={15} onClick={() => cart.removeToCart(product.name)}/>
                                    </ContainerClose>
                                </ProductContainer>
                            </ListItemCart>
                        )
                    })}
                                  <SubTotal>
                                    <Title>
                                        Subtotal
                                    </Title>
                                    <ContainerCheckout>
                                        <span>
                                        R$ { cart.subTotal.toFixed(2).toString().replace('.', ',') }
                                        </span>
                    
                                        <Button onClick={() => Router.push(`/checkout`)}>
                                            Checkout
                                        </Button>
                                       
                                    </ContainerCheckout>
                                </SubTotal>
                    </CartList>
                )}

            </ListItem>

        </>
    )
}