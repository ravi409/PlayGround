import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';
import HierarchyHome from './hierarchy-home';
import HierarchySettings from './hierarchy-settings';
import StateList from './state-list';
import DistrictList from './district-list';
import SubDistrictList from './subdistrict-list';
import CityList from './city-list';

const Stack = createStackNavigator();

export default function HierarchyStackNavigator({navigation}:any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PoliticalHierarchy"
        component={HierarchyHome}
        options={{
          title: "Political Hierarchy",
          headerLeftContainerStyle: { marginLeft: 10 },
          headerRightContainerStyle: { marginRight: 10 },
          headerLeft: (props) => (
            <Ionicons name="ios-options" size={24} color="black"
               onPress={()=>navigation.navigate('HierarchySettings')}
              />
          ),
        }}
      />
      <Stack.Screen
        name="HierarchySettings"
        component={HierarchySettings}
        options={{ title:'Page Settings'}}
      />
      <Stack.Screen
        name="StateList"
        component={StateList}
        options={{ title:'Select State'}}
      />
      <Stack.Screen
        name="DistrictList"
        component={DistrictList}
        options={{ title:'Select District'}}
      /> 
      <Stack.Screen
        name="SubDistrictList"
        component={SubDistrictList}
        options={{ title:'Select Sub-District'}}
      /> 
       <Stack.Screen
        name="CityList"
        component={CityList}
        options={{ title:'Select City'}}
      />      
    </Stack.Navigator>
  );
}
