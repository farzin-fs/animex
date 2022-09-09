import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AnimeList, Screen } from '../components';
import { useFavorites } from '../hooks';

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation();
  const data = useFavorites();

  return (
    <Screen>
      <AnimeList
        data={data}
        onPress={anime =>
          navigation.navigate('favorites_details', { id: anime.mal_id })
        }
      />
    </Screen>
  );
};

export default FavoritesScreen;
