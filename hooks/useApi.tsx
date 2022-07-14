import { Products } from "../data/Products"

export const useApi = () => ({
    
    getAllProducts: async () => {
        const ProductsList = Products.map(product => {
            return product
        })
        return ProductsList
    }
}) 
