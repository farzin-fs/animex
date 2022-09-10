import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../components';
import { ListingScreen } from '../screens';

export type TTabNavigatorParams = {
  airing: undefined;
  complete: undefined;
  upcoming: undefined;
};

const Tab = createBottomTabNavigator<TTabNavigatorParams>();

const TabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, title: 'AnimeX' }}>
      <Tab.Screen
        name="airing"
        component={ListingScreen}
        options={{
          tabBarLabel: 'Airing',
          tabBarTestID: 'tab-airing',
          tabBarIcon: ({ focused }) => (
            <IconButton
              name="tv-outline"
              color={focused ? colors.accent : colors.textSecondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="complete"
        component={ListingScreen}
        options={{
          tabBarLabel: 'Complete',
          tabBarTestID: 'tab-complete',
          tabBarIcon: ({ focused }) => (
            <IconButton
              name="checkmark-done-outline"
              color={focused ? colors.accent : colors.textSecondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="upcoming"
        component={ListingScreen}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarTestID: 'tab-upcoming',
          tabBarIcon: ({ focused }) => (
            <IconButton
              name="flame-outline"
              color={focused ? colors.accent : colors.textSecondary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
