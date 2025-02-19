import axios from "axios";
export const getProductCards = async () => {
    try {
        const response = await axios.get("https://app-bakery.leogenus.io/~/api/product/item/list");
        return response.data;
    } catch (error: any) {
        console.error("Error fetching product cards:", error);
    }
};