import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getAllProducts = async () => {
  try {
    const response = await productsApi.get("products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
};


export const createProduct = async (data) => {
  try {
    const response = await productsApi.post("products/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};


export const getProductById = async (id) => {
  try {
    const response = await productsApi.get(`products/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
