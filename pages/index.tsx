import { Header } from "../components/common/header/header"
import { ProductList } from "../components/products/"
import { Banner } from "../components/banner/banner"
import { Destach } from "../components/destach/destach"
import { Divider } from '../components/divider/divider'
import { Footer } from "../components/common/footer/footer"
import { PopupCheckout } from "../components/popupCheckout/popup"
import { useContext } from "react"
import { CartContext } from "../context/Cart/CartContext"

const Home = () => {
  const cart = useContext(CartContext)
  return (
    <>
      <Header />
      <Banner />
      <Destach />
      <Divider />
      <ProductList />
      <Footer />
      { cart.products && cart.products?.length > 0 && <PopupCheckout />}
    </>
  )
}

export default Home
