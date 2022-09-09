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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="airing"
        component={ListingScreen}
        options={{
          tabBarLabel: 'Airing',
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
