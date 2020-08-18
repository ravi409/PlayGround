import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
  Entypo,
  EvilIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import LocalNews from './news-module/local-news';
import NationalNews from './news-module/national-news';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'News';

function TempScreen(props: { color: string, title: string }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: props.color,
        alignItems: 'center',
      }}>
      <Text style={{ color: '#F0F8FF' }}>{props.title}</Text>
    </View>
  );
}



function NewsHomeScreen({ navigation }: any) {
  return (
    <TopTab.Navigator >
      <TopTab.Screen name="Local" component={LocalNews} />
      <TopTab.Screen name="National" component={NationalNews} />
    </TopTab.Navigator>
  );
}

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsHomeScreen} 
        options={{
          headerLeftContainerStyle: {marginLeft: 10},
          headerRightContainerStyle: {marginRight: 10},
          headerLeft: (props) => (
            <Ionicons name="ios-options" size={24} color="black" />
          ),
          headerRight: (props) => (
            <EvilIcons name="user" size={24} color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          activeTintColor: '#1E90FF',
        }}>
        <Tab.Screen
          name="Complaints"
          component={() => <TempScreen color="#C0C0C0" title="Screen 1" />}
          options={{
            title: 'Complaints',
            tabBarBadge: '2',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="envelope-open-text"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hierarchy"
          component={() => <TempScreen color="#87CEFA" title="Screen 2" />}
          options={{
            title: 'Hierarchy',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="flow-tree" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsStack}
          options={{
            title: 'News',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="newspaper-o" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MoneyMgmt"
          component={() => <TempScreen color="#66CDAA" title="Screen 4" />}
          options={{
            title: 'Money Mgmt',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="coins" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={() => <TempScreen color="#D2B48C" title="Screen 5" />}
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
