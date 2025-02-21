import axios from 'axios';

const getProductsById = async (id: number) => {
    try {
        const response = await axios.get(`https://app-bakery.leogenus.io/~/api/product/item/one?productId=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProductsById;