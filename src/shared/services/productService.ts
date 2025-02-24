import axios from 'axios';

export const fetchFullProductInfo = async (productId: number) => {
  try {
    const response = await axios.get(`https://your-api-url.com/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching full product info:", error);
    throw error;
  }
};