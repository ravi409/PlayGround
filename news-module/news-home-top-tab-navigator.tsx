import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LocalNews from './local-news';
import NationalNews from './national-news';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import InternationalNews from './international-news';

const TopTab = createMaterialTopTabNavigator();

const mapStateToProps = (state: any) => {
    return {
        newsSettings: state.newsSettingsReducer.newsSettings
    }
}

export  function NewsHomeTopTabNavigator({newsSettings}:any) {
    return (
        <TopTab.Navigator tabBarOptions={{ scrollEnabled:true}}>
           <TopTab.Screen name="Local" component={LocalNews} />
           {newsSettings.nationalNews ? <TopTab.Screen name="National" component={NationalNews} /> : null}
           {newsSettings.internationalNews ? <TopTab.Screen name="International" component={InternationalNews} /> : null}
        </TopTab.Navigator>

    );
}

export default connect(mapStateToProps)(NewsHomeTopTabNavigator);
