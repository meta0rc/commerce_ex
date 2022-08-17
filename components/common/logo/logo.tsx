import Image from "next/image"
import Router from 'next/router'
import LogoImage from '/public/images/logo.png'
export const Logo = () => {
    return (
        <div className="logo" onClick={() => Router.push('/')}>
            <Image src={LogoImage} width={100} height={70}/>
        </div>
    )
}