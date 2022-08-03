import { ProductComponent } from "../product/product"
import { Container } from "../../ui"
import { Control, List, ContainerList, ListItem} from "./style"
import { ProductContext } from "../../../context/Products/ProductContext"
import { useContext, useRef, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


export const ProductList = () => {
    const Product = useContext(ProductContext)
    const list = useRef(null)
 
    const handleControl = (side: string) => {
        
        if(list.current){
            side === 'left' ? list.current.scrollLeft -= list.current.offsetWidth : list.current.scrollLeft += list.current.offsetWidth
        }

    }

    return (
        <>

        <ContainerList>
            <Control>
                <BsChevronLeft color="#fff " size={30} onClick={() => handleControl('left')}/>
                <BsChevronRight color="#fff " size={30} onClick={() => handleControl('right')}/>
            </Control>
            <List ref={list}>
            { Product.products && Product.products.map((product, i) => {
                const {name, image , id, description, price, quanty, list } = product
                return(
                    <>
                    {list && (
                        <ListItem as={"li"} >
                            <ProductComponent 
                                price={price}
                                name={name} 
                                image={image}
                                id={id} 
                                description={description}
                                quanty={quanty}
                            /> 
                        </ListItem>
                    )}
                    </>
                )})}
            </List>
        </ContainerList>

        </>
    )
}

