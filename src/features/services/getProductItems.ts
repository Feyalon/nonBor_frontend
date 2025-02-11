import axios from 'axios';

const getProductItems = async () => {
    try {
        const response = await axios.get('http://localhost:3000/product-items');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProductItems;