import { ReactNode } from "react";

export interface IUser {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    role: string;
    id: number;
}

export enum SortOption {
    ASC,
    DESC
}

export enum ETableHeaderType {
    Number,
    Text
}

export interface ITableHeader {
    key: string;
    label: string;
    type?: ETableHeaderType;
    sortable?: boolean;
    style?: React.CSSProperties;
    hidden?: boolean;
    render?: (value: string, row?: Record<string, ReactNode>) => ReactNode;
}

export interface ISort {
    key: string;
    sort: SortOption;
    type: ETableHeaderType;
}

export type TUserForm = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    role: string;
    id?: number;
    password: string;
    confirmPassword: string;
}

export type TGroups = {
    name: string;
    id: string;
    members: {
        id: string;
        firstname: string;
        lastname: string;
        role: string;
    }[];
}