import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Divider, SideNav } from '../components';
import { useDarkMode } from '../hooks';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import ListingStackNavigator from './ListingStackNavigator';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isDarkMode = useDarkMode();

  return (
    <Container>
      <SideNav currentTab={activeTab} onChange={index => setActiveTab(index)} />
      <Divider vertical />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        {activeTab === 0 && <ListingStackNavigator />}
        {activeTab === 1 && <FavoritesStackNavigator />}
      </NavigationContainer>
    </Container>
  );
};

export default Navigation;
