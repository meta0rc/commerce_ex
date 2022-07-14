import { createContext } from "react"

export type ProductContext = { 
    product: ProductType | null
    imageProduct: string
    products: ProductType[]
    showModalProduct: (product: ProductType) => void
    changeOtherImage: (image:string) => void
    handleSelectQuanty: (quanty: number, price?: number) => void
}

export interface ProductType {
    id: string | any
    price?: number
    description?: string
    name: string | any
    rate?: number | any
    quanty?: number
    image?: string
    galery?: string[]
}

export const ProductContext = createContext<ProductContext>(null!)