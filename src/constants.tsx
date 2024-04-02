import { ETableHeaderType, ITableHeader } from "./types";


export const USERS_TABLE_HEADS: ITableHeader[] = [
    {
        key: "firstName",
        label: "Firstname",
        type: ETableHeaderType.Text,
    },
    {
        key: "lastName",
        label: "Lastname",
        type: ETableHeaderType.Text,
    },
    {
        key: "userName",
        label: "Username",
        type: ETableHeaderType.Text,
    },
    {
        key: "email",
        label: "Email",
        type: ETableHeaderType.Text,
    },
    {
        key: "role",
        label: "Role",
        type: ETableHeaderType.Text,
    },
    {
        key: "action",
        label: "Action",
        type: ETableHeaderType.Text,
        sortable: false
    },
]