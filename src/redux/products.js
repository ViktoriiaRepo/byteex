import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_STRAPI_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(
      `api/products?populate[images][populate]=*&populate[comments][populate]=avatar`
    );

    return response.data;
  } catch (error) {
    console.log('Error fetching products', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `products/${id}?populate[images][populate]=*&populate[comments][populate]=avatar`
    );
    return response.data;
  } catch (error) {
    console.log(`Error fetching product with id ${id}`, error);
    return null;
  }
};
