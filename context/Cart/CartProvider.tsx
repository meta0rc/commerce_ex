import { useContext, useState } from "react"
import { CartContext, ProductCart } from "./CartContext"
import { useUtils } from "../../hooks/useUtils"

export const CartProdiver = ({children}: {children: JSX.Element}) => {

    const [products, setProduct] = useState<ProductCart[]>([])
    const [subTotal, setSubtotal] = useState(0)
    const utils = useUtils()
    const addToCart = (product: ProductCart, quanty: number) => {

        const newProduct = {
            ...product, 
            price: quanty * product.price, 
            priceDefault: product.price,
            quanty: quanty
        }
        setProduct([...products, newProduct])
        setSubtotal(newProduct.price + subTotal)
    }

    const removeToCart = (name: string) => {
        const ProductsFilter = products.filter((product) => product.name != name)
        const ProductSubTotal = products.filter((product) => product.name === name)
        setSubtotal(subTotal - ProductSubTotal[0].price)
        setProduct(ProductsFilter)
    }

    const checkCart = (id: number) => {
        const inCart = utils.inCart(id, products)
        if(inCart) {
            return {
                in: true,
                quanty: inCart[0].quanty
            }
        }
        return { in: false }
    }
    return (
        <CartContext.Provider value={{products, checkCart, subTotal, addToCart, removeToCart}}>
            { children }
        </CartContext.Provider>
    )

}