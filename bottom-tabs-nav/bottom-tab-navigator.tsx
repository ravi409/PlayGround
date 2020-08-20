import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    FontAwesome,
    Feather,
    Entypo,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import NewsStackNavigator from '../news-module/news-stack-navigator';
import HierarchyStackNavigator from '../hierarchy-module/hierarchy-stack-navigator';


const Tab = createBottomTabNavigator();
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

const FeedbackTab = (<Tab.Screen
    name="Feedback"
    component={() => <TempScreen color="#C0C0C0" title="Screen 1" />}
    options={{
        title: 'Feedback',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="vote-outline" color={color} size={size} />
        ),
    }}
/>);

const HierarchyTab = (
    <Tab.Screen
        name="Hierarchy"
        component={HierarchyStackNavigator}
        options={{
            title: 'Hierarchy',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="flow-tree" color={color} size={size} />
            ),
        }}
    />
);

const NewsTab = (<Tab.Screen
    name="News"
    component={NewsStackNavigator}
    options={{
        title: 'News',
        tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" color={color} size={size} />
        ),
    }}
/>);

const FinanceTab = (<Tab.Screen
    name="Finance"
    component={() => <TempScreen color="#66CDAA" title="Screen 4" />}
    options={{
        title: 'Finance',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="finance" color={color} size={size} />
        ),
    }}
/>);

const SettingsTab = (<Tab.Screen
    name="Settings"
    component={() => <TempScreen color="#D2B48C" title="Screen 5" />}
    options={{
        title: 'Settings',
        tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
        ),
    }}
/>);

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: '#1E90FF',
            }}>
            {FeedbackTab}
            {HierarchyTab}
            {NewsTab}
            {FinanceTab}
            {SettingsTab}
        </Tab.Navigator>
    );
}
