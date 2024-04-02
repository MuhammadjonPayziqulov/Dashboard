import React, { ReactNode, createContext, useContext, useState } from "react";
import { IUser } from "../types"

const demo = [
    {
        firstName: "Edward",
        lastName: "Garcia",
        userName: "edward",
        email: "edwardpps@gmail.com",
        role: "TECHNICIAN",
        id: 20
    },
    {
        firstName: "Allayor",
        lastName: "Quvondiqov",
        userName: "allayord",
        email: "allayor@gmail.com",
        role: "TECHNICIAN",
        id: 21
    },
    {
        firstName: "Orson",
        lastName: "Daniel",
        userName: "govoxa",
        email: "govoxa@gmail.com",
        role: "HELPER",
        id: 22
    }
]

interface UserContextProps {
    users: IUser[];
    addUser: (value: Omit<IUser, "id">) => void;
    getUserById: (id: number) => IUser | undefined;
    updateUser: (value: IUser) => void;
    deleteUser: (id?: number) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>(demo);

    const addUser = (user: Omit<IUser, "id">) => {
        return setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }])
    }

    const getUserById = (id: number) => {
        if (id) return users.find(el => el.id === id)
    }

    const updateUser = (value: IUser) => {
        setUsers((prev) => prev.map((el) => el.id === value.id ? value : el))
    }

    const deleteUser = (id?: number) => {
        setUsers((prev) => prev.filter(el => el.id !== id));
    }

    const contextValue: UserContextProps = {
        users,
        addUser,
        getUserById,
        updateUser,
        deleteUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    } else {
        return context;
    }
}

// export const usePost = () => {
//     const [sort, setSort] = useState<ISort | null>(null)

//      useMemo((): Record<
//         string,
//         (JSX.Element | string)[] | string
//     >[] => {

//         if (sort !== null)
//             console.log(sort);
//         demo.sort((a, b) => {
//             const key = sort?.key as keyof IUser;
//             if (sort?.sort === SortOption.DESC) {
//                 return a[key].toString().localeCompare(b[key].toString())
//             }
//             return b[key].toString().localeCompare(a[key].toString())
//         })
//     }, [sort])
//     return {
//         setSort
//     }
// }