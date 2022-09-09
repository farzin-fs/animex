import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import styled from '../themes';
import IconButton from './IconButton';
import Spacer from './Spacer';
import TextSecondary from './TextSecondary';

const Container = styled(View)`
  flex: 0.5;
  min-width: 200px;
  max-width: 400px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Button = styled(TouchableOpacity)<{ active: boolean }>`
  flex-direction: row;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.accentWithAlpha : theme.colors.primary};
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

type TProps = {
  currentTab: number;
  onChange: (index: number) => void;
};

const SideNav: React.FC<TProps> = ({ currentTab, onChange }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Button active={currentTab === 0} onPress={() => onChange(0)}>
        <IconButton name="list-outline" />
        <Spacer size={16} />
        <TextSecondary
          size={16}
          color={currentTab === 0 ? colors.accent : undefined}>
          Listing
        </TextSecondary>
      </Button>
      <Spacer />
      <Button active={currentTab === 1} onPress={() => onChange(1)}>
        <IconButton name="bookmark-outline" />
        <Spacer size={16} />
        <TextSecondary
          size={16}
          color={currentTab === 1 ? colors.accent : undefined}>
          Favorites
        </TextSecondary>
      </Button>
    </Container>
  );
};

export default SideNav;
