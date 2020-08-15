import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons,FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'#778899',alignItems: 'center' }}>
      <Text style={{ color:'#F0F8FF'}}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HOME';

export default function App() { 
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#1E90FF',
      }}>
        <Tab.Screen name="HOME" component={HomeScreen} 
         options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />
        }}
        />
        <Tab.Screen name="CURRENT" component={HomeScreen} 
         options={{
          title: 'Current',
          tabBarIcon: ({ color, size }) => <FontAwesome name="newspaper-o" color={color} size={size}/>
        }}        
        />
        <Tab.Screen name="PERSONAL" component={HomeScreen} 
        options={{
          title: 'Personal',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="business-center" color={color} size={size} />
        }} 
        />
        <Tab.Screen name="GALLERY" component={HomeScreen} 
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="collections" color={color} size={size} />
        }} 
        />
        <Tab.Screen name="DOWNLOADS" component={SettingsScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="file-download"  color={color} size={size} />
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
