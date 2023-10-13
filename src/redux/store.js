import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});