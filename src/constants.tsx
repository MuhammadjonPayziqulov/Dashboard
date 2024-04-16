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

export const GROUPS_TABLE_HEADS: ITableHeader[] = [
    {
        key: "group_name",
        label: "Group Name",
        type: ETableHeaderType.Text,
    },
    {
        key: "members",
        label: "Members",
        render: (value) => {            
            const [techs, helpers] = value.split("<>");
            return (
                <span className="render_constants">
                    {techs.split("&").map((el,i) => 
                        <span key={i} className="tech">
                           Tech: {el}
                        </span>
                    )}    
                    {helpers.split("&").map((el,i) => 
                        <span key={i} className="helper">
                            {el}
                        </span>
                    )} 
                </span>
            )
        }
    },
    {
        key: "action",
        label: "Action",
        type: ETableHeaderType.Text,
        sortable: false
    }
]