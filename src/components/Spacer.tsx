import { View } from 'react-native';
import styled from '../themes';

type TProps = {
  size?: 4 | 8 | 16 | 32 | 64 | 128;
};

const Spacer = styled(View)<TProps>`
  margin: ${({ size }) => size || 4}px;
`;

export default Spacer;
