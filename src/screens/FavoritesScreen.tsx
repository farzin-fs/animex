import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AnimeList, Screen } from '../components';
import { useStore } from '../hooks';

const FavoritesScreen = () => {
  const store = useStore();
  const navigation = useNavigation();

  return (
    <Screen>
      <AnimeList
        data={store.favorites}
        onPress={anime =>
          navigation.navigate('favorites_details', { id: anime.mal_id })
        }
      />
    </Screen>
  );
};

export default FavoritesScreen;
