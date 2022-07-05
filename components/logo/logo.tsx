import Image from "next/image"
import LogoImage from '/public/images/logo.png'

export const Logo = () => {
    return (
        <div>
            <Image src={LogoImage} width={100} height={70}/>
        </div>
    )
}