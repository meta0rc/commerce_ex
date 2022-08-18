import { Body, Heading } from "../../../ui"
import { ButtonFilter, ContainerFilter, FilterInput, FilterListItem, FilterList } from "./style"

export const Filter = () => {
    return (
        <ContainerFilter>
            <Heading size="small" color="dark" level={3}>
                Filters
            </Heading>
            <FilterList>
                <FilterListItem>
                    <FilterInput type="checkbox"/>
                    <Body color="dark">
                        Low Price
                    </Body>
                </FilterListItem>
                <FilterListItem>
                    <FilterInput type="checkbox"/>
                    <Body color="dark">
                        High Price
                    </Body>
                </FilterListItem>
                <FilterListItem>
                    <FilterInput type="checkbox"/>
                    <Body color="dark">
                        Offers
                    </Body>
                </FilterListItem>
                <FilterListItem>
                    <FilterInput type="checkbox"/>
                    <Body color="dark">
                        Phones
                    </Body>
                </FilterListItem>
                <FilterListItem>
                    <FilterInput type="checkbox"/>
                    <Body color="dark">
                        All
                    </Body>
                </FilterListItem>

            </FilterList>
            <ButtonFilter>
                Filter
            </ButtonFilter>
        </ContainerFilter>
    )
}