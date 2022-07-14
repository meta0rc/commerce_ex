import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent } from "react"
import Stripe from 'stripe'
import { keys } from "../configs/Stripe"

interface Product { 
    products: Stripe.Product
    price: Stripe.Price
    paymentLink: Stripe.PaymentLink
}
export const getStaticPaths: GetStaticPaths = async () => {
    const stripe = new Stripe(keys.secret, {
        apiVersion: "2020-08-27"
    })
    const products = await stripe.products.list()
    const paths = products.data.map((pro) => ({
        params: {
            productid: pro.id
        }
    }))
    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params} ) => {

    const stripe = new Stripe(keys.secret, {
        apiVersion: "2020-08-27"
    })
    const products = await stripe.products.retrieve(params?.productid as string)
    const {default_price } = products
    const price = await stripe.prices.retrieve(default_price as string)

    const paymentLink = await stripe.paymentLinks.create({
        line_items: [{price: default_price as string, quantity: 1}],
        after_completion: {type: 'redirect', redirect: {url: 'http://localhost/success'}},
      });
    return { 
        props: {
            products,
            price,
            paymentLink
        }
    }
}

const Product: FunctionComponent<Product> = ( { products, price, paymentLink} ) => {
    
    const { name, images } = products
    const { unit_amount } = price
    
    return (
        <>
            <h1>
                {name ? name : 'Product'}
            </h1>
            <img src={images[0]} />
            <h1>
                {unit_amount ? unit_amount : 'gratis'}
            </h1>
            <button>
                <a href={paymentLink.url}>
                    Comprar agora
                </a>
            </button>
        </>
    )


}

export default Product



