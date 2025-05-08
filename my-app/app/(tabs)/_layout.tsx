import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#25292e" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
          headerStyle: {
            backgroundColor: '#25292e',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: {
          backgroundColor: '#25292e',
          },
        }}
      >
        <Tabs.Screen name="index" options={{ 
          title: 'Inicio', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          )
        }}/>

        <Tabs.Screen name="about" options={{ 
          title: 'Sobre', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          )
        }}/>
      </Tabs>
    </>
  );
}
