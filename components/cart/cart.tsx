import { useContext, useState } from "react"
import { BsCart } from "react-icons/bs"
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
    Link
} from "./style"


export const Cart = () => {

    const cart = useContext(CartContext)
    const [showCart, setShowCart] = useState(false)

    return (
        <>
            <ListItem>
                <Link href={''} onMouseEnter={()=> setShowCart(true)}>
                    <BsCart size={23} color={'#000'}/>
                    {cart.products?.length}
                </Link>
                { showCart == true && (
                    <CartList onMouseLeave={() => setShowCart(false)}>
                    { cart.products && cart.products.map((product: any, i) => {
                        return (
                            <ListItemCart>
                                <ProductContainer>
                                    <ContainerCart>
                                        <ProductImage src={product?.image} width={50} height={50}/>
                                        <ContainerQuanty display={'flex'}>
                                            <Body size={'thin'} color={'success'}>
                                                { product?.quanty} X { product?.price.toFixed(2)}
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
                                        <Link href="/cart">
                                            <Button>
                                                Checkout
                                            </Button>
                                        </Link>
                                    </ContainerCheckout>
                                </SubTotal>
                    </CartList>
                )}

            </ListItem>

        </>
    )
}