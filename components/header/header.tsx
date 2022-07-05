import { Logo } from "../logo/logo"
import { BsCart, BsHeart } from 'react-icons/bs'
import  styled from 'styled-components'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Cart } from "../cart/cart"

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 0 3px #ccc;
    li { 
        margin: 0 5px;
    }
`
const ContainerNavLeft = styled.nav`
    display: flex; 
    align-items: center;
`
const ContainerNavIcons = styled.div`
`
const List = styled.ul`
    display: flex;`
const ListItem = styled.li``
const Link = styled.a``

export const Header = () => {

    const cart = useContext(CartContext);
    
    return (
        <Container>
            <ContainerNavLeft>
                <Logo />
                <List>
                    <ListItem>
                        <Link> All </Link>
                    </ListItem>
                    <ListItem>
                        <Link> Who </Link>
                    </ListItem>
                    <ListItem>
                        <Link> Contact </Link>
                    </ListItem>
                </List>
            </ContainerNavLeft>
            <ContainerNavIcons>
                <List>
                    <ListItem>
                        <Link> 
                            <BsHeart size={23} />
                        </Link>
                    </ListItem>
                    <Cart />
                </List>
            </ContainerNavIcons>
        </Container>
    )
}