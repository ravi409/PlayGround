import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, TouchableOpacity, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, ListItem } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { updateNewsSettings } from '../redux/actions/update-news-settings-action';
import { connect } from 'react-redux';

function ToggleSwitch(props: { id: string | number; title: string; value: boolean; onValueChange: ((value: boolean) => void); }) {
    return (
        <ListItem
            key={props.id}
            title={props.title}
            rightElement={<Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.value ? "#483D8B" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.onValueChange}
                value={props.value}
            />}
            bottomDivider
        />
    );
}

const mapStateToProps = (state:any) => {
    return{
        newsSettings: state.newsSettingsReducer.newsSettings
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        reduxUpdateNewsSettings: (settings: NewsSettingsType) => dispatch(updateNewsSettings(settings))
    }
}

export function NewsSettings({newsSettings, reduxUpdateNewsSettings }:any) {
    //const [newsSettings, changeNewsSettings] = useState({ localNews: true, nationalNews: true, internationalNews: false } as NewsSettingsType);
    //const [isLocalNewsEnabled, setIsLocalNewsEnabled] = useState(true);
    const [isNationalNewsEnabled, setIsNationalNewsEnabled] = useState(true);
    const [isInternationalNewsEnabled, setIsInternationalNewsEnabled] = useState(false);

    const changeLocalNewsEnabled = () => {
        newsSettings.localNews = !newsSettings.localNews;
        reduxUpdateNewsSettings(newsSettings);
    };

    return (
        <View>
            <ToggleSwitch id={1} title='Local News'
                value={newsSettings.localNews}
                onValueChange={changeLocalNewsEnabled} />

            <ToggleSwitch id={2} title='National News'
                value={isNationalNewsEnabled}
                onValueChange={() => setIsNationalNewsEnabled(previousState => !previousState)} />


            <ToggleSwitch id={2} title='International News'
                value={isInternationalNewsEnabled}
                onValueChange={() => setIsInternationalNewsEnabled(previousState => !previousState)} />

        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSettings);