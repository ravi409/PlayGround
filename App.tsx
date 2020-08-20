import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottom-tabs-nav/bottom-tab-navigator';
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
