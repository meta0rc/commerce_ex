import { Body, Button, Container, Heading } from "../ui"
import { 
    ContainerDestach, 
    DesktopContainer, 
    ImageDestach, 
    MobileContainer,
    ListItemDetails,
    ListDetails,
    Content
} from "./style"
import { Products } from "../../data/Products"
import { Stars } from "../stars/Stars"
import Router from "next/router"

export const Destach = () => {

    const destachs = Products.filter(product => product.destach === true)

    return (
        <>
        {destachs.map(destach => {
            return (
                <ContainerDestach>
                { !destach.right && (
                    <DesktopContainer w={'50%'}>
                        <ImageDestach src={destach.image} />
                    </DesktopContainer>
                )}
                <MobileContainer>
                    <ImageDestach src={destach.image} />
                </MobileContainer>
                <Content w={'70%'} padding={'5%'}>
                    <Heading level={2} size={'large'}>
                        { destach.name }
                    </Heading>
                    <Container display={'flex'}>
                        <Stars quanty={destach.rate}/>
                        <Body size="thin" color={"gray"}>
                            ( 505 Avaliações de clientes )
                        </Body>
                    </Container>
                    <Body> { destach.description} </Body>
                    <ListDetails>
                        <Heading level={3} weight={'thin'} size={'medium'}>
                            Detalhes Técnicos
                        </Heading>
                        {destach.technicalDetails && Object.keys(destach.technicalDetails).map((key, value) => {
                            return (
                                <ListItemDetails>
                                    <strong> { key } </strong> : {Object.values(destach.technicalDetails)[value]}
                                </ListItemDetails>
                            )
                        })}
                    </ListDetails>
                    <Button mode="default" onClick={() => Router.push(`http://localhost:3000/${destach.id}`)}> 
                        Saiba mais 
                    </Button>
                </Content>
                { destach.right === true && (
                    <DesktopContainer w={'50%'}>
                        <ImageDestach src={destach.image} />
                    </DesktopContainer>
                )}
            </ContainerDestach>
            )
        })}

        </>
        )
    
}