import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons } from '@expo/vector-icons';
import NewsHomeTopTabNavigator from './news-home-top-tab-navigator'

const Stack = createStackNavigator();

export default function NewsStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={NewsHomeTopTabNavigator} 
          options={{
            headerLeftContainerStyle: {marginLeft: 10},
            headerRightContainerStyle: {marginRight: 10},
            headerLeft: (props) => (
              <Ionicons name="ios-options" size={24} color="black" />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
  