interface ICategory {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    created_by: string | null;
    updated_by: string | null;
    deleted_by: string | null;
    deleted: boolean;
    state: string;
}
export default ICategory;
