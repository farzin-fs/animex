import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAnime } from '../types';

type TFavoritesState = {
  data: TAnime[];
};

const initialState: TFavoritesState = {
  data: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<TAnime>) => {
      const anime = action.payload;
      const favorites = state.data;
      const index = state.data.findIndex(item => item.mal_id === anime.mal_id);

      if (index === -1) {
        favorites.push(anime);
      } else {
        favorites.splice(index, 1);
      }

      state.data = favorites;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
