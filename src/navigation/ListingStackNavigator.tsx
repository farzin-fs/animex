import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import {IconButton} from '../components';
import {DetailsScreen} from '../screens';
import {TRootNavigatorParams} from '../types';
import {TDrawerNavigatorParams} from './DrawerNavigator';
import TabNavigator from './TabNavigator';

export type TListingStackNavigatorParams = {
  listing_tabs: undefined;
  listing_details: {id: number};
};

const Stack = createNativeStackNavigator<TListingStackNavigatorParams>();

const screenOptions = ({
  navigation,
  route,
}: {
  navigation: DrawerNavigationProp<TDrawerNavigatorParams>;
  route: RouteProp<TRootNavigatorParams>;
}) => {
  const options: NativeStackNavigationOptions = {
    headerLeft:
      route.name === 'listing_tabs' && Platform.OS !== 'web'
        ? () => (
            <IconButton name="menu-outline" onPress={navigation.toggleDrawer} />
          )
        : undefined,
    headerBackTitle: 'Back',
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
