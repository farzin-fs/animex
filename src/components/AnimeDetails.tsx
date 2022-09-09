import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import styled from '../themes';
import { TAnime } from '../types';
import CoverImage from './CoverImage';
import Divider from './Divider';
import Spacer from './Spacer';
import TextPrimary from './TextPrimary';
import TextSecondary from './TextSecondary';

const Container = styled(View)<{ dir: string }>`
  flex-direction: ${({ dir }) => dir};
`;

const DetailsContainer = styled(View)`
  flex: 1;
  padding: 12px;
`;

type TProps = {
  data: TAnime;
};

const AnimeDetails: React.FC<TProps> = ({ data }) => {
  const window = useWindowDimensions();

  return (
    <Container dir={window.width <= 900 ? 'column' : 'row'}>
      <CoverImage
        uri={data.images.jpg.large_image_url}
        initialWidth={window.width <= 900 ? window.width : window.width / 3}
      />
      <DetailsContainer>
        <TextPrimary>{data.title}</TextPrimary>
        <TextSecondary>{data.title_japanese}</TextSecondary>
        <Spacer />
        {data.background && <TextSecondary>{data.background}</TextSecondary>}
        {data.background && <Spacer />}
        <Divider />
        <Spacer />
        {data.year && <TextSecondary>Year: {data.year}</TextSecondary>}
        {data.status && <TextSecondary>Status: {data.status}</TextSecondary>}
        {data.score && <TextSecondary>Score: {data.score}</TextSecondary>}
        {data.rating && <TextSecondary>Rating: {data.rating}</TextSecondary>}
        {data.type && <TextSecondary>Type: {data.type}</TextSecondary>}
        {data.episodes && (
          <TextSecondary>Episodes: {data.episodes}</TextSecondary>
        )}
        <Spacer />
      </DetailsContainer>
    </Container>
  );
};

export default AnimeDetails;
