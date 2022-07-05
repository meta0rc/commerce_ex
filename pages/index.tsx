import { Header } from "../components/header/header"
import { ProductsComponent } from "../components/products/products"
import { Slider } from "../components/slider/slider"
import { Title } from "../components/title/title"

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Title value="The your shop for buy"/>
      <ProductsComponent />
    </>
  )
}

export default Home
