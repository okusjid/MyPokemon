// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './Pokemon/pokemonApiSlice';

const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
