import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import { NavIconButton } from '../components';
import { DetailsScreen, FavoritesScreen } from '../screens';
import { TRootNavigatorParams } from '../types';

export type TFavoritesStackNavigatorParams = {
  favorites_list: undefined;
  favorites_details: { id: number };
};

const Stack = createNativeStackNavigator<TFavoritesStackNavigatorParams>();

const screenOptions = ({
  route,
}: {
  route: RouteProp<TRootNavigatorParams>;
}) => {
  const options: NativeStackNavigationOptions = {
    headerLeft: () => <NavIconButton route={route.name} />,
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
