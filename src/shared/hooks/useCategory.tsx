import React from "react"
import ICategory from "../types/category";
import axios from "axios";


const UseCategory = () => {
    const [category, setCategory] = React.useState<ICategory[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error | null>(null);
    React.useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoading(true);
                const response = await axios.get<ICategory[]>(
                    "https://app-bakery.leogenus.io/~/api/categories"
                );
                setCategory(response.data);
                setLoading(false);
            } catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        };
        fetchCategory();
    }, []);
    return { category, loading, error };
}
export default UseCategory;
