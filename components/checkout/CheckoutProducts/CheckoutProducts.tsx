import { useContext } from "react"
import { BsPlus, BsDash } from "react-icons/bs"
import { CartContext } from "../../../context/Cart/CartContext"
import { Heading } from "../../ui"
import { 
    ProductsCheckout, 
    ProductsListCheckout, 
    ContentCheckout, 
    ImageCheckout, 
    ListItemCheckout,
    ControlContainerCheckout,
    ButtonIncrement,
    InputIncrement

} from "./style"

export const CheckoutProducts = () => {
    const cart = useContext(CartContext)
    const Products = cart.products
    return (
        <ProductsCheckout>
            <Heading level={1} color={'dark'}>
                Products in Cart

                
            </Heading>
            <ProductsListCheckout>
                { Products && Products.map(product => {
                    return (
                        
                    <ListItemCheckout>
                        <ImageCheckout src={product?.image} alt={'Image checkout'}/>
                        <ContentCheckout>
                            <Heading level={2} size={'small'} color={'dark'}>
                                {product?.name}
                            </Heading>
                        </ContentCheckout>
                        <ControlContainerCheckout>
                            <ButtonIncrement>
                                <BsPlus color="#000" size={40}/>
                            </ButtonIncrement>
                            <InputIncrement placeholder={String(product?.quanty)}/>
                            <ButtonIncrement>
                                <BsDash color="#000" size={40}/>
                            </ButtonIncrement>
                        </ControlContainerCheckout>
                    </ListItemCheckout>
                    )
                })}
            </ProductsListCheckout>
        </ProductsCheckout>
    )
}