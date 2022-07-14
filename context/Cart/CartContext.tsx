import { createContext, useState } from "react";
import { ProductTypeComponent } from "../../types/Product";

export interface ProductCart extends ProductTypeComponent {
    priceDefault?: number, 
    priceReplaced?: number
}

type CartContextType = {  
    products: Array<ProductCart | null> | null
    subTotal: number
    addToCart: (product: ProductCart) => void
    removeToCart: (name: string) => void   
}

export const CartContext = createContext<CartContextType>(null!)

export const CartProdiver = ({children}: {children: JSX.Element}) => {

    const [products, setProduct] = useState<ProductCart[]>([])
    const [subTotal, setSubtotal] = useState(0)
    
    const addToCart = (product: ProductCart) => {
        setProduct([...products, product])
        const num = product.price
        setSubtotal(num + subTotal)
    }

    const removeToCart = (name: string) => {
        const ProductsFilter = products.filter((product) => product.name != name)
        const ProductSubTotal = products.filter((product) => product.name === name)
        setSubtotal(subTotal - ProductSubTotal[0].price)
        setProduct(ProductsFilter)

    }

    return (
        <CartContext.Provider value={{products, subTotal, addToCart, removeToCart}}>
            { children }
        </CartContext.Provider>
    )

}