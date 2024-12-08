export interface Workspace {
    id: string;
    name: string;
    description: string;
    owner_id: string;
    members: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}