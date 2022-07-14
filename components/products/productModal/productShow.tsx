import { useContext } from "react"
import { CartContext } from "../../../context/Cart/CartContext"
import { ProductContext, ProductType } from "../../../context/Products/ProductContext"
import { Container, Body, Heading, Button } from "../../ui"
import { VscClose } from 'react-icons/vsc'
import { DropDdown } from "../../ui/dropdown/Dropdown"
import { ShowProduct, Close, ProductImage, ListPrice, Coin, Price, ButtonCart, Bluur, ContainerStars } from "./style"
import { ProductTypeComponent } from "../../../types/Product"
import { ProductCategory } from "../productGalery/productCategory"
import { Stars } from "../../stars/Stars"

export const ProductShow = (props: ProductType) => {

    const cart = useContext(CartContext)
    const Product = useContext(ProductContext)
    const {id, name, description, image, price } = props
    // const PriceReplaced = Product.price.toFixed(2).toString().replace('.', ',')

    const ProductCloned = {...props}

    const HandleButtonCart = () => {
        cart.addToCart(ProductCloned)
        Product.showModalProduct(null!)
    }
    return (
        <>
        <ShowProduct>
            <Close>
                <VscClose onClick={() => Product.showModalProduct(null!)} />
            </Close>
            <Container display="flex" w={'100%'}>
                <ProductCategory id={id}/>
                <ProductImage src={Product.imageProduct} alt={name} height={505} />
            </Container>
            <Container padding="5%" mode="light" w={'100%'}>
                <Heading color="dark" level={2} size={'medium'}>{name}</Heading>
                <ContainerStars display={'flex'}>
                    <Stars quanty={Product.products[Number(id)]?.rate} />
                </ContainerStars>
                <Body color="dark">{description}</Body>
                <ListPrice display={'flex'} radius={'sma'}>
                    <Coin>R$</Coin>
                    <Price level={3} color={"dark"} size={"large"}>
                        {price}
                    </Price>
                </ListPrice>
                <DropDdown numItems={Product.product?.quanty} />
                <Container display={'flex'}>
                    <ButtonCart onClick={HandleButtonCart}>
                        Add to Cart
                    </ButtonCart>
                    <a href={`/${id}`} target='_blank'>
                        <Button> 
                            Ir para produto
                        </Button>
                    </a>
                </Container>
            </Container>
        </ShowProduct>
        <Bluur />
        </>
    )
}