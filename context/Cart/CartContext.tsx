import { createContext, useState } from "react";
import { ProductType } from "../Products/ProductContext";

export interface ProductCart extends ProductType {
    priceDefault?: number, 
    priceReplaced?: number
    quanty?: number
}

type CartContextType = {  
    products: Array<ProductCart | null> | null
    subTotal: number
    checkCart: (id: number) => any
    addToCart: (product: ProductCart, quanty: number) => void
    removeToCart: (name: string) => void   
}

export const CartContext = createContext<CartContextType>(null!)
