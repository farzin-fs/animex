import React from 'react';
import { Platform, View } from 'react-native';
import { useIsFavorite, useToggleFavorite } from '../hooks';
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
  const toggle = useToggleFavorite(data);
  const isFavorite = useIsFavorite(data.mal_id);

  return (
    <Container>
      <IconButton
        name={isFavorite ? 'heart' : 'heart-outline'}
        onPress={toggle}
        color="red"
      />
    </Container>
  );
};

export default FaveIconButton;
