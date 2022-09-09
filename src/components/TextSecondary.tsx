import styled from 'styled-components/native';

type TProps = {
  size?: number;
  bold?: boolean;
};

const TextSecondary = styled.Text<TProps>`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export default TextSecondary;
