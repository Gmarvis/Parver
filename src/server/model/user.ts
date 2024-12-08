export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export enum UserRole {
    ADMIN = "admin",
    PROVIDER = "provider",
    CUSTOMER = "customer",
}