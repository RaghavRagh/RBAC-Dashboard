export type UserStatus = "Active" | "Inactive";

export interface User {
    id: number;
    name: string;
    role: string;
    status: UserStatus;
    profile: string;
}

export interface Role {
    id: number;
    name: string;
    permission: string[];
}