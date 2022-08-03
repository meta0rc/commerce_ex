import { Body, Heading } from "../ui"
import { DividerContainer } from "./style"

export const Divider = () => {
    return (
        <DividerContainer mode={'dark'}>
            <Heading level={2} weight={'xxbold'}>
            The yout shop for buy
            </Heading>
            <Body >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eveniet ducimus voluptatibus animi sit voluptatem expedita quibusdam, repellendus suscipit veritatis asperiores nulla magnam. Nostrum officiis explicabo quo repudiandae tempora cumque!
            </Body>
        </DividerContainer>
    )
}
