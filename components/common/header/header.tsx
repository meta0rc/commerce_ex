import { Logo } from "../logo/logo"
import { BsHeart } from 'react-icons/bs'
import { Cart } from "../../cart/cart"
import { Container, ContainerNavIcons, ContainerNavLeft, List, ListItem, Link } from './style'
export const Header = () => {
    return (
        <Container>
            <ContainerNavLeft>
                <Logo />
                <List>
                    <ListItem>
                        <Link href={"/products"}> All </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/quem-somos"}> Who </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/contact"}> Contact </Link>
                    </ListItem>
                </List>
            </ContainerNavLeft>
            <ContainerNavIcons>
                <List>
                    <ListItem>
                        <Link href={"/checkout"}> 
                            <BsHeart size={23} />
                        </Link>
                    </ListItem>
                    <Cart />
                </List>
            </ContainerNavIcons>
        </Container>
    )
}