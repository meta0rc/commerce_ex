import { useCallback, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { ProductTypeComponent } from "../../types/Product";
import { ProductContext, ProductType } from "./ProductContext";

export const ProductProvider = ({ children } : {children: JSX.Element }) => {

    const api = useApi()   
    const [product, setProduct ] = useState<ProductType | null>(null)
    const [products, setProductsList] = useState<any>([])
    const [imageProduct, setImageProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [quanty, setQuanty] = useState(1)

    useEffect(() => {
        const setProducts = async () => {
            const Products = await api.getAllProducts()
            if(Products){
                setProductsList([...Products])
            }
        }
        setProducts()
    }, [])

    const showModalProduct = useCallback((product?: ProductType) => {

        if(product){
            setProduct(product)
            setImageProduct(product.image as string)
        } 
        else {
            setProduct(null)
        }
    }, [product])

    const changeOtherImage = (image: string) => {
        setImageProduct(image)
    }
    
    const handleSelectQuanty = (quanty: number, price?: number) => {
        const newPrice = price ? price * quanty : 0
        setPrice(newPrice)
        setQuanty(quanty)
    }

    return (
        <ProductContext.Provider value={{
            product, 
            products,
            imageProduct, 
            changeOtherImage,
            showModalProduct,
            handleSelectQuanty
            }}>
            { children }
        </ProductContext.Provider>
    )
}
