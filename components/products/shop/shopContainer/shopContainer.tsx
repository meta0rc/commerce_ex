import { Filter } from "../filter/filter"
import { Shop } from "../shopList/shop"
import { ContainerHading, ContainerHeadShop, ContainerShop } from "./style"
import { Divider } from "../../../divider/divider"
import { Heading } from "../../../ui"
import { BreadCrumb } from "../../../common/breadcrumb/breadcrumb"

export const ShopContainer = () => {
    return (
        <>
        {/* <Divider padding="25px 70px" heading="Products" body=" "/> */}
        <ContainerHading>
            <Heading level={1} color={'dark'}>
                Shop
            </Heading>
            <BreadCrumb page={"Products"}/>
        </ContainerHading>
        <ContainerShop>
            <Shop />
            <Filter />
        </ContainerShop>
        </>
    )
}