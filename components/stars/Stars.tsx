import { Container } from "../ui"
import { FaStar } from 'react-icons/fa'

type star = { 
    quanty?: number,
    color?: 'gray' | 'gold'
}
export const Stars = (props: star) => {

    const { quanty = 0 } = props
    const cond = quanty ? 5 - quanty : 0
    
        return (
            <Container display="flex">
                {[...Array(quanty)].map((s, i) => {
                    return <FaStar color="gold" />
                })}
                {[...Array(cond)].map((s, i) => {
                    return <FaStar color="gray" />
                })}
            </Container>
          
        )
}