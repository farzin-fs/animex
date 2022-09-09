import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  AnimeList,
  EmptyState,
  LoadingIndicator,
  Screen,
  SearchBar,
} from '../components';
import { useFetchAnimeList } from '../hooks';
import { TAnime } from '../types';

const ListingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [list, setList] = useState<TAnime[]>();
  const { isLoading, error, data, request } = useFetchAnimeList(
    route.name,
    page,
    query,
  );

  useEffect(() => {
    request();
  }, [request]);

  useEffect(() => {
    if (data?.data && !isLoading) {
      setList(old => (old ? [...old, ...data.data] : data.data));
    }
  }, [data, isLoading]);

  const handleSearch = useCallback((value: string) => {
    setList(undefined);
    setPage(1);
    setQuery(value || '');
  }, []);

  return (
    <Screen>
      <>
        <SearchBar onSubmit={handleSearch} />
        {isLoading && !list && <LoadingIndicator />}
        {error && !list && !isLoading && (
          <EmptyState
            title={'whoopsie!'}
            message={'Something went wrong, Please try again.'}
            onRetry={request}
          />
        )}
        {list && (
          <AnimeList
            data={list}
            onPress={anime =>
              navigation.navigate('listing_details', { id: anime.mal_id })
            }
            isLoading={isLoading}
            onLoadMore={() => {
              if (!isLoading) {
                setPage(old => old + 1);
              }
            }}
          />
        )}
      </>
    </Screen>
  );
};

export default ListingScreen;
