import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons } from '@expo/vector-icons';
import NewsHomeTopTabNavigator from './news-home-top-tab-navigator'
import NewsSettings from './news-settings';

const Stack = createStackNavigator();

export default function NewsStackNavigator({navigation}:any) {

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={NewsHomeTopTabNavigator} 
          options={{
            headerLeftContainerStyle: {marginLeft: 10},
            headerRightContainerStyle: {marginRight: 10},
            headerLeft: (props) => (
              <Ionicons name="ios-options" size={24} color="black"
               onPress={()=>navigation.navigate('NewsSettings')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="NewsSettings"
          component={NewsSettings}
          options={{ title:'News Settings'}}
          />
      </Stack.Navigator>
    );
  }
  