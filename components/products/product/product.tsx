import { useContext  } from "react"
import { ProductContext, ProductType } from "../../../context/Products/ProductContext"
import { ProductShow } from "../productModal/productShow"
import { ContainerProduct, ImageProduct } from "./style"

export const ProductComponent = (props: ProductType) => {

    const {name, image} = props
    const Context = useContext(ProductContext)

    const showProduct = (product: ProductType) => {
        Context.showModalProduct(product)
    }

    return (
        <>
            <ContainerProduct 
                onClick={() => showProduct(props)}
                key={'containerProduct' + name}>
                <ImageProduct src={image} alt={name} width={200} key={name} />
                {/* <ButtonProduct key={name + price} mode={'light'} size={"xsmall"}>
                    { name }
                </ButtonProduct> */}
            </ContainerProduct>
            { Context.product && <ProductShow {...Context.product}/> }
        </>
    )
}