import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../feature/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
})