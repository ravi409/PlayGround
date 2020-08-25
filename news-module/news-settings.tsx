import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, TouchableOpacity, Switch, SectionList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, ListItem } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { updateNewsSettings } from '../redux/actions/update-news-settings-action';
import { connect } from 'react-redux';
import LocalNews from './local-news';

function ToggleSwitch(props: { id: string | number; title: string; value: boolean; onValueChange: any }) {
    return (
        <ListItem
            key={props.id}
            title={props.title}
            rightElement={<Switch
                trackColor={{ false: "#D3D3D3", true: "#90EE90" }}
                thumbColor={props.value ? "#008000" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.onValueChange}
                value={props.value}
            />}
            bottomDivider
        />
    );
}

const mapStateToProps = (state: any) => {
    return {
        newsSettings: state.newsSettingsReducer.newsSettings
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        reduxUpdateNewsSettings: (settings: {}) => dispatch(updateNewsSettings(settings))
    }
}

const DATA = [
    {
        title: "Coverage",
        data: [
            {
                label: "National News",
                fieldName: "nationalNews"
            },
            {
                label: "International News",
                fieldName: "internationalNews"
            }
        ]
    },
    {
        title: "Source",
        data: [
            {
                label: "Google News",
                fieldName: "google-news-in"
            },
            {
                label: "The Hindu",
                fieldName: "the-hindu"
            },
            {
                label: "The Times of India",
                fieldName: "the-times-of-india"
            }
        ]
    },
    {
        title: "Category",
        data: [
            {
                label: "Business",
                fieldName: "business"
            },
            {
                label: "Entertainment",
                fieldName: "entertainment"
            },
            {
                label: "General",
                fieldName: "general"
            },
            {
                label: "Health",
                fieldName: "health"
            },
            {
                label: "Science",
                fieldName: "science"
            },
            {
                label: "Sports",
                fieldName: "Sports"
            },
            {
                label: "Technology",
                fieldName: "technology"
            }
        ]
    }
];

export function NewsSettings({ newsSettings, reduxUpdateNewsSettings }: any) {
    const [localData, setLocalData] = useState(newsSettings);
    function changeValue(fieldName: string, value: any) {
        setLocalData((previousState: any) => {
            let newState = { ...previousState };
            newState[fieldName] = value;
            reduxUpdateNewsSettings(newState);
            return newState;
        });
    }

    return (
        <View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.fieldName + index}
                renderItem={({ item, index }) => <ToggleSwitch id={item.fieldName + index}
                    title={item.label}
                    value={localData[item.fieldName]}
                    onValueChange={() => changeValue(item.fieldName, !localData[item.fieldName])} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{  padding: 10 }}>{title}</Text>
                )}
            />

        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSettings);