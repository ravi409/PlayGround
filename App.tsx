import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

function TempScreen(props: { color: string; title: string }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: props.color, alignItems: 'center' }}>
      <Text style={{ color: '#F0F8FF' }}>{props.title}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HOME';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          activeTintColor: '#1E90FF',
        }}>
        <Tab.Screen
          name="HOME"
          component={() => <TempScreen color="#C0C0C0" title="Screen 1" />}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CURRENT"
          component={() => <TempScreen color="#87CEFA" title="Screen 2" />}
          options={{
            title: 'Current',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="newspaper-o" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PERSONAL"
          component={() => <TempScreen color="#D8BFD8" title="Screen 3" />}
          options={{
            title: 'Personal',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="business-center" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="GALLERY"
          component={() => <TempScreen color="#66CDAA" title="Screen 4" />}
          options={{
            title: 'Gallery',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="collections" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="DOWNLOADS"
          component={() => <TempScreen color="#D2B48C" title="Screen 5" />}
          options={{
            title: 'Downloads',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="file-download" color={color} size={size} />
            ),
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
