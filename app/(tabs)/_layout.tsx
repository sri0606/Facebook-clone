import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

const TabLayout=()=> {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{ 
          headerShown: false,
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ 
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{ 
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => <Ionicons name="menu-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}


export default TabLayout;