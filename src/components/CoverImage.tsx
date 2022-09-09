import React from 'react';
import { Image } from 'react-native';
import styled from '../themes';

const Cover = styled(Image)`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

type TProps = {
  uri?: string;
};

const CoverImage: React.FC<TProps> = ({ uri }) => (
  <Cover source={{ uri: uri }} resizeMode="cover" />
);

export default CoverImage;
