import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337/api/';

export const getProducts = async () => {
  try {
    const response = await axios.get(
      'products?populate[images][populate]=*&populate[comments][populate]=avatar'
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
