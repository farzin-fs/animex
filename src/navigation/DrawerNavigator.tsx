import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { IconButton } from '../components';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import ListingStackNavigator from './ListingStackNavigator';

export type TDrawerNavigatorParams = {
  drawer_listing: undefined;
  drawer_favorites: undefined;
};

const Drawer = createDrawerNavigator<TDrawerNavigatorParams>();

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="drawer_listing"
    screenOptions={{ headerShown: false }}>
    <Drawer.Screen
      name="drawer_listing"
      component={ListingStackNavigator}
      options={{
        drawerLabel: 'Listing',
        drawerIcon: () => <IconButton name="list-outline" />,
      }}
    />
    <Drawer.Screen
      name="drawer_favorites"
      component={FavoritesStackNavigator}
      options={{
        drawerLabel: 'Favorites',
        drawerIcon: () => <IconButton name="bookmark-outline" />,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
