import Stripe from "stripe"
import { Header } from "../components/common/header/header"
import { ProductList } from "../components/products/"
import { Banner } from "../components/banner/banner"
import { Body, Heading, Container } from "../components/ui"
import { GetStaticProps } from "next"
import { useApi } from "../hooks/useApi"

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
        <Container mode={'dark'} padding={'70px'}>
          <Heading level={2}>
            The yout shop for buy
          </Heading>
          <Body >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eveniet ducimus voluptatibus animi sit voluptatem expedita quibusdam, repellendus suscipit veritatis asperiores nulla magnam. Nostrum officiis explicabo quo repudiandae tempora cumque!
          </Body>
        </Container>
      <ProductList />
    
    </>
  )
}

export default Home
