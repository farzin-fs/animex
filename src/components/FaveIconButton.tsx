import React from 'react';
import { useStore } from '../hooks';
import { TAnime } from '../types';
import IconButton from './IconButton';

type TProps = {
  data: TAnime;
};

const FaveIconButton: React.FC<TProps> = ({ data }) => {
  const store = useStore();

  return (
    <IconButton
      name={store.isFavorite(data.mal_id) ? 'heart' : 'heart-outline'}
      onPress={() => store.toggle(data)}
      color="red"
    />
  );
};

export default FaveIconButton;
