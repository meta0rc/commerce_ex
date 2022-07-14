import { GetStaticProps } from "next"
import Stripe from 'stripe'
import { keys } from "../configs/Stripe"

interface Products {
    list: Stripe.Product[]
}
export const getStaticProps: GetStaticProps = async () => {

    const stripe = new Stripe(keys.secret, {
        apiVersion: "2020-08-27;orders_beta=v4"
    })

    const order = await stripe.orders.create({
        currency: 'usd',
        line_items: [{product: 'prod_M3JGOH9K6zGEO9', quantity: 3}],
        expand: ['line_items'],
      });

      console.log(order)
    const products = await stripe.products.list()
    const list = products.data.map(product => {
        return product
    })

    return {
        props: { list }
    }
}

const AllProducts = (props: Products) => {
    return (
        <>
            <h1> Products </h1>

            {props.list.map((product) => {

                return (
                    <div>
                        <h2>{product.name}</h2>
                        <img src={product.images[0]} alt="" />
                    </div>
                )
            })}
          
        </>
    )
}
export default AllProducts