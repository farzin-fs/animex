import { TAnime } from '../types';

type TActionToggle = {
  type: 'TOGGLE';
  payload: TAnime;
};

type TAction = TActionToggle;

export type TState = {
  favorites: TAnime[];
  toggle: (anime: TAnime) => void;
  isFavorite: (id: number) => boolean;
};

const storeReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'TOGGLE':
      const anime = action.payload;
      const favorites: TAnime[] = state.favorites;
      const index = state.favorites.findIndex(
        item => item.mal_id === anime.mal_id,
      );

      if (index === -1) {
        favorites.push(anime);
      } else {
        favorites.splice(index, 1);
      }

      return {
        ...state,
        favorites,
      };
    default:
      return state;
  }
};

export default storeReducer;
