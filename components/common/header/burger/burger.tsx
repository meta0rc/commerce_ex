import { BsMenuButtonFill } from "react-icons/bs"
import { Burger as ContainerBurger } from './style'
export const Burger = (props: any) => {
    return (
        <ContainerBurger onClick={props.onClick}>
            <BsMenuButtonFill size={25} color="#000"/>
        </ContainerBurger>
    )
}