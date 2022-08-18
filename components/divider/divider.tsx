import { Body, Heading } from "../ui"
import { DividerContainer } from "./style"
type divider = {
    heading?: string
    body?: string
    padding?: string
}
export const Divider = (props: divider) => {
    return (
        <DividerContainer mode={'dark'} padding={props.padding}>
            <Heading level={2} weight={'xxbold'}>
                { props.heading ? props.heading : 'The Your Place Local'}
            </Heading>
            <Body >
                { props.body ? props.body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eveniet ducimus voluptatibus animi sit voluptatem expedita quibusdam, repellendus suscipit veritatis asperiores nulla magnam. Nostrum officiis explicabo quo repudiandae tempora cumque!' }
            </Body>
        </DividerContainer>
    )
}
