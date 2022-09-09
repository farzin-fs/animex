import React, { useReducer } from 'react';
import { TAnime } from '../types';
import storeReducer, { TState } from './storeReducer';

export const StoreContext = React.createContext<TState | undefined>(undefined);

const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    favorites: [],
    toggle: () => {},
    isFavorite: () => false,
  });

  const toggle = (anime: TAnime) =>
    dispatch({
      type: 'TOGGLE',
      payload: anime,
    });

  const isFavorite = (id: number) => {
    const index = state.favorites.findIndex(item => item.mal_id === id);

    return index !== -1;
  };

  return (
    <StoreContext.Provider value={{ ...state, toggle, isFavorite }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
