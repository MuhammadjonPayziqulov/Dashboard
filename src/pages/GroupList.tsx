import { useMemo, useState } from "react"
import { TGroups } from "../types"
import { CustomTable } from "../components/CustomTable"
import { GROUPS_TABLE_HEADS } from "../constants"
import { Modal } from "../components/Modal"

const demoGroup = [
    {
        id: "28",
        name: "ALEX_TEAM",
        members: [
            {
                id: "52",
                firstname: "Damon",
                lastname: "Haley",
                role: "HELPER",
            },
            {
                id: "49",
                firstname: "Allayor",
                lastname: "Quvondiqov",
                role: "TECHNICIAN",
            },
        ],
    },
    {
        id: "30",
        name: "FDG GROUP",
        members: [
            {
                id: "54",
                firstname: "Athenass",
                lastname: "Stewart",
                role: "HELPER",
            },
            {
                id: "53",
                firstname: "Huzurbek",
                lastname: "Kurbanov",
                role: "TECHNICIAN",
            },
        ],
    },
    {
        id: "39",
        name: "Yakubov_LCC_Group",
        members: [
            {
                id: "67",
                firstname: "John",
                lastname: "Tompson",
                role: "TECHNICIAN",
            },
            {
                id: "97",
                firstname: "Jaime",
                lastname: "Roberts",
                role: "HELPER",
            },
            {
                id: "98",
                firstname: "Marvin",
                lastname: "William",
                role: "HELPER",
            },
        ],
    },
];

export const GroupList = () => {
    const [groupUser, setGroupUser] = useState<TGroups[]>(demoGroup)
    const [showModal, setShowModal] = useState(false)
    const [confirmDeleteId, setConfirmDeleteId] = useState<string | undefined>(undefined)


    const list = useMemo(() => {
        return groupUser.map((el) => (
            {
                id: el?.id || "",
                group_name: el?.name || "",
                members: `${el?.members
                    ?.filter((user) => user?.role === "TECHNICIAN")
                    .map((user) => `${user?.firstname} ${user?.lastname}`)
                    .join("&")}<>${el?.members
                        ?.filter((user) => user?.role === "HELPER")
                        .map((user) => `${user?.firstname} ${user?.lastname}`)
                        .join("&")}`
            }))
    }, [groupUser])

    const deleteUser = (id?: string) => {
        setGroupUser((prev) => prev.filter(el => el.id !== id));
    }


    return (
        <div className="group">
            <div className="user__header">
                <h2>Group List</h2>
                <button className="add_btn">
                    Add New Group
                </button>
            </div>
            <CustomTable
                heads={GROUPS_TABLE_HEADS}
                rows={list}
                onConfirm={(id) => {                     
                    setConfirmDeleteId(String(id));
                    setShowModal(true);
                }}
                onEdit={() => { }}
            />
            {showModal &&
                <Modal 
                    onDelete={() => {
                        deleteUser(confirmDeleteId);
                        setConfirmDeleteId(undefined);
                        setShowModal(false);
                    }}
                    onClose={() => {
                        setConfirmDeleteId(undefined);
                        setShowModal(false);
                    }}
                />
            }

            {/* <GroupForm /> */}
        </div>
    )
}
