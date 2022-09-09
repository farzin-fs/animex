import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import Center from './Center';
import Screen from './Screen';

const LoadingIndicator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Screen>
      <Center>
        <ActivityIndicator color={colors.accent} />
      </Center>
    </Screen>
  );
};

export default LoadingIndicator;
