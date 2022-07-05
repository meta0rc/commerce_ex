import styled from "styled-components"
import { Products } from "../../data/Products"
import { Product } from "../product/product"
const Section = styled.section`
    width: 100%;
  
`
const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #673ab7;
    padding: 3% 0;
    li:hover {
        background: #fff;
        transition: 1s;
    }
    img:hover {
        transform: scale(1.1);
        transform: rotate(-10deg);
        transition: 1s;

    }
`
const ListItem = styled.li`
    
`

export const ProductsComponent = () => {
    return (
        <Section>
            <List>
            { Products.map(product => {
                return(
                    <ListItem>
                        <Product id={product.id.toString()} image={product.img} name={product.name} price={product.price} w={'200'} description={product.description} /> 
                    </ListItem>
                )})}
            </List>
        </Section>
    )


}