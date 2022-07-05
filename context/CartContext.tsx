import { createContext, useContext, useState } from "react";
import { ProductType } from "../components/product/product";

type CartContextType = {  
    products: Array<ProductType> | null
    subTotal: number
    addToCart: (product: ProductType) => void
    removeToCart: (product: string) => void   
}

export const CartContext = createContext<CartContextType>(null!)

export const CartProdiver = ({children}: {children: JSX.Element}) => {

    const [products, setProduct] = useState<ProductType[]>([])
    const [subTotal, setSubtotal] = useState(0)
    
    const addToCart = (product: ProductType) => {
        setProduct([...products, product])
        const num = product.price.slice(3).replace(',', '.')
        setSubtotal(parseFloat(num) + subTotal)
    }

    const removeToCart = (ProductWilbeRemove: string) => {

        const updateSubTotal = products.filter((product) => product.name === ProductWilbeRemove)
        const returnProducts = products.filter((product) => product.name != ProductWilbeRemove)

        setProduct(returnProducts)
        if(updateSubTotal && updateSubTotal[0]){
            const PriceFromProduct = updateSubTotal[0].price.slice(3).replace(',', '.')
            setSubtotal(subTotal - parseFloat(PriceFromProduct))

        }
    }

    return (
        <CartContext.Provider value={{products, subTotal, addToCart, removeToCart}}>
            { children }
        </CartContext.Provider>
    )

}