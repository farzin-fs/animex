import { configureStore } from '@reduxjs/toolkit';
import favorites from './favoritesSlice';
export * from './favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites,
  },
});

export type TRootState = ReturnType<typeof store.getState>;

export type TDispatch = typeof store.dispatch;
