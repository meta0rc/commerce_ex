import { ProductCart } from "../context/Cart/CartContext"

export const useUtils = () => ({
    inCart: (id: number, ProductsCart: Array<ProductCart>) => {
        if(ProductsCart){
            const products = ProductsCart.filter(product => product.id === id)
            if(products){
                if(products.length > 0){
                    return products
                } 
            }
        }

    }
})