import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../screens/PostsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs({ route }) {
  const user = route?.params?.user;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        initialParams={{ user }}
      />
    </Tab.Navigator>
  );
}
