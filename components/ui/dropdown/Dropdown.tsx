import { useState, useContext } from "react"
import { BsChevronDown } from "react-icons/bs"
import { ProductContext } from "../../../context/Products/ProductContext"
import { 
    DropType, 
    ListContainer, 
    ListName, 
    QuantyContainer, 
    iconEffect, 
    desEffect, 
    Info, 
    List, 
    ListItem 
} from "./style"

export const DropDdown = (props: DropType) => {
    const [openList, setOpenList] = useState(false)
    const [quantySelected, setQuantySelected ] = useState(1)
    const Product = useContext(ProductContext)
    
    const HandleList = () => {
        openList === false ? setOpenList(true) : setOpenList(false)
    }
    const HandleSelect = (index: number) => {
        openList === false ? setOpenList(true) : setOpenList(false)
        setQuantySelected(index)
        if(Product.product){
            Product.handleSelectQuanty(index, Product.product.price)
        }
    }
    return (
        <ListContainer display="flex">
            <ListName onClick={HandleList}>
                <QuantyContainer display="flex">
                    <p>Quantidade: <strong> { quantySelected } unidade{quantySelected > 1 && 's'}</strong></p>
                    <BsChevronDown style={openList === true ? iconEffect : desEffect} />
                </QuantyContainer>
                <Info color={"dark"}>({ Product.product?.quanty } Unidades disponíveis)</Info>  
            </ListName>
            { openList && (
                <List>
                    {[...Array(Product.product?.quanty)].map((item, index) => {
                        return (
                            <ListItem onClick={() => HandleSelect(index + 1)} key={'list-item-' + index}>
                                {index + 1} unidade{index > 0 && 's'}
                            </ListItem>
                            )
                    })}
                 </List>
            )}

        </ListContainer>
    )
}