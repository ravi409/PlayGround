import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, TouchableOpacity, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, ListItem } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const leaders = [
    {
        name: "Kotagiri Sridhar",
        designation: "Member of Parliament",
        age: "45 Years",
        experience: "10 Years",
        state: "Andhra Pradesh",
        district: "West Godavari",
        party: "YSR Congress Party",
        url: require("../assets/mp_images/eluru.jpg")
    },
    {
        name: "Dulam Nageswara Rao",
        designation: "Member of the Legislative Assembly",
        age: "50 Years",
        experience: "20 Years",
        state: "Andhra Pradesh",
        district: "Krishna",
        party: "YSR Congress Party",
        url: require("../assets/mla_images/kaikalur.jpeg")
    }
];



const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        locationData: state.locationReducer.locationData
    }
}

const keyExtractor = (item: any, index: number) => index.toString()

const renderItem = ({ item }: any) => (
    <ListItem
        title={item.name}
        titleProps={{ style: styles.titleText }}
        subtitle={
            <View style={styles.subtitleView}>
                <Text style={styles.subTitleText} >{item.designation}</Text>
                <Text style={styles.subTitleText}>Age: {item.age}    Exp: {item.experience}</Text>
                <Text style={styles.subTitleText}>{item.state}, {item.district}</Text>
                <Text style={styles.subTitleText}>Party: {item.party}</Text>
            </View>
        }

        leftAvatar={{ rounded: true, source: item.url, size: 100 }}
        titleStyle={{ fontWeight: '300' }}
        onPress={() => console.log(item.name)}
        containerStyle={{
            borderRadius: 10, borderColor: '#D3D3D3',
            borderWidth: 0.10,
            backgroundColor: '#F5F5F5',
            marginBottom: 10, padding:5
        }}
    />
)


export class HierarchyHome extends Component<{ navigation: any, navigator: any, locationData: any }, Partial<{}>> {

    constructor(props: any) {
        super(props);

    }

    componentDidMount() {
        this.verifyLocationData();
    }

    verifyLocationData = () => {
        if (this.props.locationData.pinCode == undefined && this.props.locationData.city == undefined) {
            this.props.navigation.navigate("HierarchySettings");
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={[styles.bodyContainer]}>
                        <FlatList
                            keyExtractor={keyExtractor}
                            data={leaders}
                            renderItem={renderItem}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

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
    subtitleView: {
        flexDirection: 'column',
    },
    titleText: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontStyle: 'normal',
        paddingTop:5,paddingBottom:5,
    },
    subTitleText: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontStyle: 'normal',
        color: '#2F4F4F',
        lineHeight: 20,
    }

});

export default connect(mapStateToProps, null)(HierarchyHome);
