import { Logo } from "../logo/logo"
import { BsHeart, BsSearch  } from 'react-icons/bs'
import { Cart } from "../../cart/cart"
import { 
    ButtonSearch, 
    Container, 
    ContainerNavIcons, 
    ContainerSearch, 
    List, 
    ListItem, 
    Link, 
    Search, 
    ListIcons
} from './style'
import { Burger } from "./burger/burger"
import { useState } from "react"

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <Container>
            <Logo />
            
            <List active={openMenu}>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    About us
                </ListItem>
                <ListItem>
                    Shop
                </ListItem>
                <ListItem>
                    Contact us
                </ListItem>
                <ContainerSearch>
                    <Search type="search"/>
                    <ButtonSearch>
                        <BsSearch />
                    </ButtonSearch>
                </ContainerSearch>
            </List>
            <ContainerNavIcons>
                <ListIcons>
                    <ListItem>
                        <Link> 
                            <BsHeart color="#181818" size={25}/>
                        </Link>
                    </ListItem>
                    <Cart />
                    <Burger onClick={()=> openMenu === false ? setOpenMenu(true) : setOpenMenu(false)} />
                </ListIcons>
            </ContainerNavIcons>
        </Container>
    )
}