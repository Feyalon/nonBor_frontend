import axios from 'axios';

const getProducts = async () => {
    try {
        const response = await axios.get('https://app-bakery.leogenus.io/~/api/product/list');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProducts;
