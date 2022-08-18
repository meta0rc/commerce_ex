import { Banner } from "../components/banner/banner"
import { Footer } from "../components/common/footer/footer"
import { Header } from "../components/common/header/header"

const About = () => {
    return (
        <>
        <Header />
        <Banner heading1={'About us'} heading={'Know all about us'} img={'joven__.jpg'}/>
        <Footer />
        </>
    )
}
export default About