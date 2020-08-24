import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottom-tabs-nav/bottom-tab-navigator';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';

export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
