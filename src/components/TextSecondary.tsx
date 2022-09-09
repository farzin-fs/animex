import { Text } from 'react-native';
import styled from '../themes';

type TProps = {
  size?: number;
  bold?: boolean;
  color?: string;
};

const TextSecondary = styled(Text)<TProps>`
  color: ${({ theme, color }) => color || theme.colors.textSecondary};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export default TextSecondary;
