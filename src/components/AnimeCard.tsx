import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styled from '../themes';
import { TAnime } from '../types';
import TextPrimary from './TextPrimary';
import TextSecondary from './TextSecondary';

const Container = styled(TouchableOpacity)<Pick<TProps, 'flex'>>`
  ${({ flex }) => (flex === 1 ? 'flex: 1' : '')};
  width: 100%;
  flex-direction: row;
  padding: 12px;
`;

const DetailsContainer = styled(View)`
  flex: 1;
  padding-left: 12px;
`;

const Cover = styled(Image)`
  width: 75px;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

type TProps = {
  data: TAnime;
  onPress: () => void;
  flex?: number;
  testID?: string;
};

const AnimeCard: React.FC<TProps> = ({ data, onPress, flex, testID }) => (
  <Container testID={testID} onPress={onPress} flex={flex}>
    <Cover source={{ uri: data.images.jpg.image_url }} />
    <DetailsContainer>
      <TextPrimary>{data.title}</TextPrimary>
      {data.rating && <TextSecondary>{data.rating}</TextSecondary>}
      {data.score && <TextSecondary>Score: {data.score}</TextSecondary>}
      {data.year && <TextSecondary>Year: {data.year}</TextSecondary>}
    </DetailsContainer>
  </Container>
);

export default AnimeCard;
