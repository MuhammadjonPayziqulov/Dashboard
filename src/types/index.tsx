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
    type: ETableHeaderType;
    sortable?: boolean;
    style?: React.CSSProperties;
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