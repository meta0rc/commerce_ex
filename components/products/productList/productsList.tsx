import { ProductComponent } from "../product/product"
import { Container } from "../../ui"
import { List } from "./style"
import { ProductContext } from "../../../context/Products/ProductContext"
import { useContext } from "react"

export const ProductList = () => {
    const Product = useContext(ProductContext)
    return (
        <Container>
            <List display={"flex"} mode={"dark"} padding={'25px'}>
            { Product.products && Product.products.map((product, i) => {

                const {name, image , id, description, price, quanty} = product

                return(
                    <Container as={"li"}>
                        <ProductComponent 
                            price={price}
                            name={name} 
                            image={image}
                            id={id} 
                            description={description}
                            quanty={quanty}
                        /> 
                    </Container>
                )})}
            </List>
        </Container>
    )
}

