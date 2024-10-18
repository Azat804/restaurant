import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import  postsSlice  from './features/posts/postsSlice'
import productsSlice from './features/products/productsSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    products:productsSlice,
  },
})