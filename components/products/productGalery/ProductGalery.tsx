import { useContext, useMemo } from "react"
import { ProductContext, ProductType } from "../../../context/Products/ProductContext"
import { Products as ProductsData} from "../../../data/Products"
import { List, Products } from "./style"

export const ProductGalery = (props: any) => {
    
    const Product = useContext(ProductContext)
    const { id } = props
    const product = ProductsData.filter(product => product.id === id)
    const Images =  product[0].galery
    const memoImage = useMemo(() => product[0].image, [])

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