import React, { Component } from 'react';
import { Alert, View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { getStates, getDistricts, getSubDistricts } from '../services/location';
import { connect } from 'react-redux';
import { updateLocation } from '../redux/actions/update-location-action';

interface MainState {
    data?: string[];
    isLoading?: Boolean;
}   

const mapStateToProps = (state: any) => {
    return {
        locationData: state.locationReducer.locationData
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        reduxUpdateLocation: (locationData: {}) => dispatch(updateLocation(locationData))
    }
}

export  class SubDistrictList extends Component<{navigation:{navigate:any},locationData: any,reduxUpdateLocation: any}, Partial<MainState>> {
        
    constructor(props: any) {
        super(props);
        this.state = { isLoading: true, data: []}

    }

    changeValue(fieldName: string, value: any) {
        this.props.locationData[fieldName] = value;
        this.props.reduxUpdateLocation(this.props.locationData);
        this.props.navigation.navigate('CityList');
    }
    
    componentDidMount() {
        getSubDistricts(this.props.locationData.state,this.props.locationData.district).then(data => {
            this.setState({ isLoading: false, data: data });
        }, error => {
            Alert.alert('Error', 'Something went wrong');
        });
    }

    keyExtractor = (item: any, index: number) => index.toString()

    renderItem = ({ item }: any) => (
        <ListItem
            title={item}
            titleStyle={{ fontWeight: '300'}}
            onPress={()=> this.changeValue('subdistrict',item)}
            bottomDivider
        />
    )

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
            />
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SubDistrictList);