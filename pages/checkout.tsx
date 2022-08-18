import { useContext } from "react"
import { CheckoutForm } from "../components/checkout/CheckoutForm/CheckoutForm"
import { CheckoutProducts } from "../components/checkout/CheckoutProducts/CheckoutProducts"
import { Footer } from "../components/common/footer/footer"
import { Header } from "../components/common/header/header"
import { Container, Heading } from "../components/ui"
import { CartContext } from "../context/Cart/CartContext"

const Checkout = () => {
    const cart = useContext(CartContext)
    const Products = cart.products
    return (
        <>
            <Header />

            <Container display="flex" padding="0 5%">
                <CheckoutProducts />
                <CheckoutForm />
            </Container>
            <Footer />

        </>
    )
}
export default Checkout