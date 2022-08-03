import { Header } from "../components/common/header/header"
import { ProductList } from "../components/products/"
import { Banner } from "../components/banner/banner"
import { Destach } from "../components/destach/destach"
import { Divider } from '../components/divider/divider'

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <Destach />
      <Divider />
      <ProductList />
    </>
  )
}

export default Home
