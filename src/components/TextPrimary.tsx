import { Text } from 'react-native';
import styled from '../themes';

type TProps = {
  size?: number;
  color?: string;
};

const TextPrimary = styled(Text)<TProps>`
  color: ${({ theme, color }) => color || theme.colors.textPrimary};
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: bold;
  margin-bottom: 2px;
`;

export default TextPrimary;
