import { useContext, useMemo } from "react"
import { ProductContext } from "../../../context/Products/ProductContext"
import { List, Products } from "./style"

export const ProductCategory = (props: any) => {
    
    const Product = useContext(ProductContext)
    const Images = Product.products[props.id - 1].galery
    const memoImage = useMemo(() => Product.imageProduct, [])

    const changeOtherImage = (index: number) => {
        if(Images) { 
            Product.changeOtherImage(Images[index])
        }

    }

    return (
        <Products as={"ul"} >
            <List onClick={() => Product.changeOtherImage(memoImage)}>
                <img src={memoImage} width={70}/>
            </List>
            {Images && Images.map((image, index) => {
                return (
                    <List 
                    onClick={() => changeOtherImage(index)} 
                    key={image + index} 
                    >
                        <img src={image} alt="" width={70} key={'image' + image + index}/>
                    </List>
                )
            })}
        </Products>    

    )
}