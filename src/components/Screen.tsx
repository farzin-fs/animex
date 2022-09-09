import styled from 'styled-components/native';

type TProps = {
  primary?: boolean;
};

const Screen = styled.View<TProps>`
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  flex: 1;
`;

export default Screen;
