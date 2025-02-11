import axios from 'axios';

const getProductsById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProductsById;