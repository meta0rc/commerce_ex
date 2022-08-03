import { Container } from "../ui"
import { BsStarFill } from 'react-icons/bs'

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
                    return <BsStarFill color="gold" style={{margin: '0 2px'}} key={'stargold' + i}/>
                })}
                {[...Array(cond)].map((s, i) => {
                    return <BsStarFill color="gray" style={{margin: '0 2px'}} key={'stargray' + i}/>
                })}
            </Container>
          
        )
}