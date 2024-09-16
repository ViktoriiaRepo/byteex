import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductById, getProducts } from './products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts();

    return data;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const data = await getProductById(id);
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    reviews: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data;
        state.reviews = action.payload.data.flatMap(
          (product) => product.attributes.comments.data
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload.data;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
