import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import { useDarkMode } from '../hooks';
import DrawerNavigator from './DrawerNavigator';

const Navigation: React.FC = () => {
  const isDarkMode = useDarkMode();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
