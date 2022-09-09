import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import {
  AnimeDetails,
  EmptyState,
  FaveIconButton,
  LoadingIndicator,
  Screen,
} from '../components';
import { useFetchAnimeByID } from '../hooks';
import { TNativeStackScreenProps } from '../types';

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<TNativeStackScreenProps<'listing_details'>['route']>();
  const { isLoading, error, data, request } = useFetchAnimeByID(
    route.params.id,
  );

  useEffect(() => {
    request();
  }, [request]);

  useEffect(() => {
    navigation.setOptions({
      title: data?.data.title || '',
      headerRight: data?.data
        ? () => <FaveIconButton data={data.data} />
        : undefined,
    });
  }, [data, navigation]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <Screen>
        <EmptyState
          title={'whoopsie!'}
          message={'Something went wrong, Please try again.'}
          onRetry={request}
        />
      </Screen>
    );
  }

  return (
    <Screen primary>
      <ScrollView>{data?.data && <AnimeDetails data={data.data} />}</ScrollView>
    </Screen>
  );
};

export default DetailsScreen;
