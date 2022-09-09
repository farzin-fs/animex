import { View } from 'react-native';
import styled from '../themes';

type TProps = React.PropsWithChildren<{
  primary?: boolean;
}>;

const Screen = styled(View)<TProps>`
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  flex: 1;
`;

export default Screen;
