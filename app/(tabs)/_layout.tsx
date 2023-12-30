import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color }) => <Ionicons name="play-circle-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => <Ionicons name="menu-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
