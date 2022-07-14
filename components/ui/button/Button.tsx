import { ButtonProps, ButtonStyled } from "./style";

export const Button = (props: ButtonProps) => {
    const { children, ...rest } = props
    return (
        <ButtonStyled {...rest}>
            { children }
        </ButtonStyled>
    )
}