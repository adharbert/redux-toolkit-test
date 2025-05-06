import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import productReducer from '../features/products/productSlice';
import categoryReducer from '../features/categories/categorySlice';

export const store = configureStore({
    reducer: {
      userReducer,
      productReducer,
      categoryReducer,
    },
  });