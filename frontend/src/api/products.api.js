import axios from 'axios'

const productsApi = axios.create({
    baseURL: 'http://localhost:8000/api/',
})


export const getAllProducts = async () => {

    try {
        const response = await productsApi.get('products/');
        return response.data
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of an error
    }
}