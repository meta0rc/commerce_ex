import styled from "styled-components"

const Container = styled.div`
    background: #fff;
    padding: 5%;
    color: #000;
`
const TitleContainer = styled.h1`  font-size: 3em; text-align: center; font-weight: 800`
const ParagraphContainer = styled.p` text-align: center; margin: 10px;`

export const Title = (props:any) => {

    return (
        <Container>
            <TitleContainer>
                { props.value }
            </TitleContainer>
            <ParagraphContainer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus exercitationem maxime voluptatum at incidunt ullam deleniti autem, facere ipsum. Saepe nisi labore, fugiat atque possimus vitae deleniti iusto libero? Porro."
            </ParagraphContainer>
        </Container>
    )

}