import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import styled from '../themes';

const Cover = styled(Image)`
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

type TProps = {
  uri?: string;
  initialWidth: number;
};

const CoverImage: React.FC<TProps> = ({ uri, initialWidth = 300 }) => {
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialWidth * 1.5,
  });

  useEffect(() => {
    if (uri) {
      Image.getSize(uri, (width, height) => {
        const ratio = Math.abs(height / width);

        setSize({ width: size.width, height: size.width * ratio });
      });
    }
  }, [uri, size]);

  return <Cover source={{ uri: uri }} resizeMode="cover" style={size} />;
};

export default CoverImage;
