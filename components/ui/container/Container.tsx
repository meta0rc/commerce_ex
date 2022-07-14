import { DivType, Box } from "./style"

export const Container = (props: DivType) => {
    const { children, ...rest } = props
    return (
        <Box {...rest}>
            { children }
        </Box>
    )
}