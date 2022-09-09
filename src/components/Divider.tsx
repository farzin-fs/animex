import styled from 'styled-components/native';

type TProps = {
  size?: string;
  vertical?: boolean;
};

const Divider = styled.View<TProps>`
  width: ${({ size, vertical }) => (vertical ? '1px' : size || '100%')};
  height: ${({ size, vertical }) => (!vertical ? '1px' : size || '100%')};
  background-color: ${({ theme }) => theme.colors.border};
  align-self: center;
`;

export default Divider;
