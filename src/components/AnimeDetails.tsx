import React from 'react';
import { View } from 'react-native';
import styled from '../themes';
import { TAnime } from '../types';
import CoverImage from './CoverImage';
import Divider from './Divider';
import Spacer from './Spacer';
import TextPrimary from './TextPrimary';
import TextSecondary from './TextSecondary';

const Container = styled(View)`
  padding: 12px;
`;

type TProps = {
  data: TAnime;
};

const AnimeDetails: React.FC<TProps> = ({ data }) => (
  <>
    <CoverImage uri={data.images.jpg.large_image_url} />
    <Container>
      <TextPrimary>{data.title}</TextPrimary>
      <TextSecondary>{data.title_japanese}</TextSecondary>
      <Spacer />
      <TextSecondary>{data.background}</TextSecondary>
      <Spacer />
      <Divider />
      <Spacer />
      <TextSecondary>Year: {data.year}</TextSecondary>
      <TextSecondary>Status: {data.status}</TextSecondary>
      <TextSecondary>Score: {data.score}</TextSecondary>
      <TextSecondary>Rating: {data.rating}</TextSecondary>
      <TextSecondary>Type: {data.type}</TextSecondary>
      <TextSecondary>Episodes: {data.episodes}</TextSecondary>
      <Spacer />
    </Container>
  </>
);

export default AnimeDetails;
