import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';
import HierarchyHome from './hierarchy-home';

const Stack = createStackNavigator();

function HierarchyScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15
      }}>
      <TextInput inlineImageLeft='search_icon'
        keyboardType='number-pad' maxLength={6}
        placeholder='Enter Pin Code'
        autoCompleteType='postal-code'
        clearButtonMode='while-editing'
        style={{ flex: 1, flexDirection: "column"}}
      />
    </View>
  );
}

export default function HierarchyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Political Hierarchy"
        component={HierarchyHome}
        options={{
          headerLeftContainerStyle: { marginLeft: 10 },
          headerRightContainerStyle: { marginRight: 10 },
          headerLeft: (props) => (
            <Ionicons name="ios-options" size={24} color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
