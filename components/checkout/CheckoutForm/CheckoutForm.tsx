import { Button, Heading } from '../../ui'
import { ContainerForm, Form, Input } from './style'

export const CheckoutForm = () => {
    return (
        <ContainerForm>
            <Heading level={3} color={'dark'}>
                Payment
            </Heading>
            <Form>
                <Input placeholder='Name card'/>
                <Input placeholder='Number card'/>
                <Input placeholder='00/00' />
                <Input type={'password'} placeholder='CVC'/>
                <Button>
                    Pay
                </Button>
            </Form>
        </ContainerForm>
    )
}