import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import { IconButton } from '../components';
import { DetailsScreen, FavoritesScreen } from '../screens';
import { TRootNavigatorParams } from '../types';
import { TDrawerNavigatorParams } from './DrawerNavigator';

export type TFavoritesStackNavigatorParams = {
  favorites_list: undefined;
  favorites_details: { id: number };
};

const Stack = createNativeStackNavigator<TFavoritesStackNavigatorParams>();

const screenOptions = ({
  navigation,
  route,
}: {
  navigation: DrawerNavigationProp<TDrawerNavigatorParams>;
  route: RouteProp<TRootNavigatorParams>;
}) => {
  const options: NativeStackNavigationOptions = {
    headerLeft:
      route.name === 'favorites_list' && Platform.OS !== 'web'
        ? () => (
            <IconButton name="menu-outline" onPress={navigation.toggleDrawer} />
          )
        : undefined,
    headerBackTitle: 'Back',
    title: 'Favorites',
  };

  return options;
};

const FavoritesStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="favorites_list"
      screenOptions={screenOptions}>
      <Stack.Screen name="favorites_list" component={FavoritesScreen} />
      <Stack.Screen name="favorites_details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
