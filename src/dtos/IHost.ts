export default interface IHost {
    patrimony: number;
    hostname: string;
    model: string;
    department: string;
    group: string;
    user: string;
    status?: string;
    updated_at?: Date
}