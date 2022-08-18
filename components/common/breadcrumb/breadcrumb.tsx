import { ListBreadCrumb, ListItemBreadCrumb } from "./style"

export const BreadCrumb = (props: any) => {
    return (
        <ListBreadCrumb>
            <ListItemBreadCrumb>
                <span>
                    Home
                </span>
                <span> / </span>
                <span>
                    { props.page }
                </span>
            </ListItemBreadCrumb>
        </ListBreadCrumb>
    )

}