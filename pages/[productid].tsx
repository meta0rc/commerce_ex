import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent, useContext, useEffect } from "react"
import { Footer } from "../components/common/footer/footer"
import { Header } from "../components/common/header/header"
import { ProductPage } from "../components/products/productPage/productPage"
import { ProductContext, ProductType } from "../context/Products/ProductContext"
import { Products } from "../data/Products"

interface Product {
    Product: ProductType
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Products.map((product) => ({
        params: {
            productid: String(product.id)
        }
    }))
    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const Product = Products.filter(product => product.id === Number(params?.productid))
    return { 
        props: {
            Product: Product[0]
        }
    }
}

const Product: FunctionComponent<Product> = (props) => {

    const context = useContext(ProductContext)
    useEffect(() => {
        context.showModalProduct(props.Product)
    }, [])

    const { id, name, price, image, description, rate, quanty} = props.Product
    return (
        <>  
            <Header />
            <ProductPage 
                id={id} 
                name={name} 
                price={price} 
                image={context.imageProduct ? context.imageProduct : image }
                description={description}
                rate={rate}
                quanty={quanty}
                />
                <Footer />
        </>
    )
}

export default Product



