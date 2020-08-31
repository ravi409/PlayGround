import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, Card } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        locationData: state.locationReducer.locationData
    }
}


export function HierarchySettings({ navigation, locationData }: any) {
    // const [pinCode, onChangePinCode] = React.useState('');
    // const [pinCodeError, updatePinCodeError] = React.useState('');

    // const validatePinCode = () => {
    //     var reg = new RegExp('^[0-9]+$');
    //     if (pinCode == null || pinCode == undefined || pinCode.length == 0) {
    //         updatePinCodeError('');
    //     } else if (!reg.test(pinCode) || pinCode.length != 6) {
    //         updatePinCodeError('Please enter a valid pincode');
    //     } else {
    //         updatePinCodeError('');
    //     }
    // }
    const LocationCard = () => {
        return (<Card>
            <Text>{locationData.city}, {locationData.subdistrict} (Sub-District)</Text>
            <Text>{locationData.district} (District), {locationData.state}</Text>
            <Button
                title="Change"
                type='clear'
                onPress={() => navigation.navigate('StateList')}
            />
        </Card>);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={[styles.bodyContainer]}>
                    {
                        locationData.city !== undefined ? <LocationCard /> :
                            <Button
                                title="Choose your location"
                                type='outline'
                                onPress={() => navigation.navigate('StateList')}
                            />
                    }

                    {/* <Input keyboardType='numeric' maxLength={6}
                        placeholder="Enter pincode"
                        autoCompleteType='postal-code'
                        clearButtonMode='while-editing'
                        onChangeText={text => onChangePinCode(text)}
                        onBlur={e => validatePinCode()}
                        value={pinCode}
                        label="Pincode"
                        errorMessage={pinCodeError}
                        errorStyle={{ color: 'red' }}
                        leftIcon={<EvilIcons name="location" size={24} color='grey' />}

                    />

                    <View style={{ alignItems: 'center', padding: 15 }}>
                        <Text>Or</Text>
                    </View> */}

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 1,
        paddingBottom: 20,
    },
    headContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: 15,
    },
    headText: {
        color: 'rgba(70,70,70, 1)',
    },
    bodyContainer: {
        padding: 15
    },
    bodyMainText: {
        color: 'rgba(100,100,100, 1)',
        paddingVertical: 5,
    },
    bodyContentText: {
        color: 'rgba(100,100,100, 1)',
        // fontSize: 12,
        paddingVertical: 3,

    },
    textBox: {
        // color: '#495057',
        // backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'rgb(200,200,200)',
        borderRadius: 5,
        padding: 5,
        textAlign: 'left',
        // fontSize: 12,
    },
    textBoxDisabled: {
        backgroundColor: 'rgb(245,245,245)',
        opacity: 1,
    },
    divider: {
        borderBottomColor: 'rgb(232,232,232)',
        paddingVertical: 7,
        borderBottomWidth: 1,
    },
});

export default connect(mapStateToProps, null)(HierarchySettings);