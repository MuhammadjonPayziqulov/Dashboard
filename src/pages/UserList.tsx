import { useUser } from "../contexts/UserContext"
import { USERS_TABLE_HEADS } from "../constants";
import { Modal } from "../components/Modal";
import { CustomTable } from "../components/CustomTable";
import { CreateUser } from "../components/CreateUser";
import { useMemo, useState } from "react"

export const UserList = () => {
    const { users, deleteUser } = useUser();
    const [currentId, setCurrentId] = useState<number | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [confirmDeleteId, setConfirmDeleteId] = useState<number | undefined>(undefined)
    

    const userList = useMemo((): Array<Record<string, string>> => {
        return users.map((el) => ({
            firstName: el.firstName,
            lastName: el.lastName,
            userName: el.userName,
            email: el.email,
            role: el.role,
            id: el.id.toString()
        }))
    }, [users])

    return (
        <div className="user">
            <div className="user__header">
                <h2>Users List</h2>
                <button className="add_btn" onClick={() => setOpen(true)}>
                    Add User
                </button>
            </div>
            
            <CustomTable
                heads={USERS_TABLE_HEADS}
                rows={userList}
                onConfirm={(id) => {
                    setConfirmDeleteId(id);
                    setShowModal(true);
                }}
                onEdit={(id) => {
                    setCurrentId(Number(id));
                    setOpen(true);
                }}
            />

            {showModal &&
                <Modal
                    onClose={() => {
                        setShowModal(false);
                        setConfirmDeleteId(undefined);
                    }}
                    onDelete={() => {
                        deleteUser(confirmDeleteId);
                        setConfirmDeleteId(undefined);
                        setShowModal(false);
                    }}
                />
            }

            {open &&
                <CreateUser
                    currentId={currentId}
                    onCancel={() => {
                        setOpen(false)
                        setCurrentId(undefined);
                    }}
                />
            }
        </div>
    )
}
