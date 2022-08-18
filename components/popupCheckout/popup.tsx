import Router from "next/router"
import { useState } from "react"
import { BsHandbag } from "react-icons/bs"
import { VscClose } from "react-icons/vsc"
import { Body } from "../ui"
import { CloseButton, ContainerPopup } from "./style"

export const PopupCheckout = () => {
    const [closeP, setClose] = useState(false)

    const go = () => {
        setClose(true)
        if(closeP === false) {
            Router.push('/checkout')
        }
    }
    return (
        <>  
            <ContainerPopup close={closeP} >
                <CloseButton onClick={() => setClose(true)}>
                    <VscClose size={25}/>
                </CloseButton>
                <Body onClick={go}>
                    Go to checkout
                </Body>
            </ContainerPopup>
        </>
    )
}