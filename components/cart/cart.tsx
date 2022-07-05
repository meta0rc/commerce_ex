import { useContext, useState } from "react"
import { BsCart } from "react-icons/bs"
import styled from "styled-components"
import { CartContext } from "../../context/CartContext"

const ListItem = styled.li`
    position: relative;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;

`
const Link = styled.a``
const CartList = styled.ul`
    position: absolute;
    width: 300px;
    border-top: 3px solid #000;
    right: 25px;
    background: #fff;
    z-index: 3;
    top: 50px;
    padding: 15px;
`
const ListItemCart = styled.li`
 
`

const ProductName = styled.span`

`
const ProductPrice = styled.span`
    font-size: 12px;
    color: green;
`
const ProductDelete = styled.button`
    background: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
`
const ProductImage = styled.img``
const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    width: 260px;
    justify-content: space-between;
`
const SubTotal = styled.div`
    border-top: 2px solid #ccc;
    margin-top: 50px;
`
const Title = styled.h3`
    margin: 10px 0;
`
export const Cart = () => {

    const cart = useContext(CartContext)
    const [showCart, setShowCart] = useState(false)
   
    const sum = (value: number) => {
        return value + value;
    }
    return (
        <>
            <ListItem onClick={() => setShowCart(true)}>
                <Link>
                    <BsCart size={23}/>
                    {cart.products?.length}
                </Link>
                { showCart == true && (
                    <CartList>
                    { cart.products && cart.products.map((product) => {
                        return (
                            <ListItemCart>
                                <ProductContainer>
                                    <Container>
                                        <ProductImage src={product.image} width={50} height={50}/>
                                        <ProductPrice>
                                            { product.price}
                                        </ProductPrice>
                                    </Container>
                                    <ProductName>
                                        { product.name}
                                    </ProductName>
                                    <ProductDelete onClick={() => cart.removeToCart(product.name)}>
                                        X
                                    </ProductDelete>
                                </ProductContainer>
                            </ListItemCart>
                        )
                    })}
                                  <SubTotal>
                                    <Title>
                                        Subtotal
                                    </Title>
                                    <span>
                                       R$ { cart.subTotal.toString().replace('.', ',') }
                                    </span>
                                </SubTotal>
                    </CartList>
                )}

            </ListItem>

        </>
    )
}