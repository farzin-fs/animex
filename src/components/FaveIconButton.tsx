import React from 'react';
import { Platform, View } from 'react-native';
import { useStore } from '../hooks';
import styled from '../themes';
import { TAnime } from '../types';
import IconButton from './IconButton';

const Container = styled(View)`
  ${() => (Platform.OS === 'web' ? 'padding-right: 16px;' : '')}
`;

type TProps = {
  data: TAnime;
};

const FaveIconButton: React.FC<TProps> = ({ data }) => {
  const store = useStore();

  return (
    <Container>
      <IconButton
        name={store.isFavorite(data.mal_id) ? 'heart' : 'heart-outline'}
        onPress={() => store.toggle(data)}
        color="red"
      />
    </Container>
  );
};

export default FaveIconButton;
