import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import { NavIconButton } from '../components';
import { DetailsScreen } from '../screens';
import { TRootNavigatorParams } from '../types';
import TabNavigator from './TabNavigator';

export type TListingStackNavigatorParams = {
  listing_tabs: undefined;
  listing_details: { id: number };
};

const Stack = createNativeStackNavigator<TListingStackNavigatorParams>();

const screenOptions = ({
  route,
}: {
  route: RouteProp<TRootNavigatorParams>;
}) => {
  const options: NativeStackNavigationOptions = {
    headerLeft: () => <NavIconButton route={route.name} />,
    title: 'AnimeX',
  };

  return options;
};

const ListingStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="listing_tabs"
      screenOptions={screenOptions}>
      <Stack.Screen name="listing_tabs" component={TabNavigator} />
      <Stack.Screen name="listing_details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ListingStackNavigator;
