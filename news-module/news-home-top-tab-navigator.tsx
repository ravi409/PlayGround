import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LocalNews from './local-news';
import NationalNews from './national-news';

const TopTab = createMaterialTopTabNavigator();

export default function NewsHomeTopTabNavigator() {
    return (
        <TopTab.Navigator >
            <TopTab.Screen name="Local" component={LocalNews} />
            <TopTab.Screen name="National" component={NationalNews} />
        </TopTab.Navigator>
    );
}
