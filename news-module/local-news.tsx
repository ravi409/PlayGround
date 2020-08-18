import React, { Component } from 'react';
import { getArticles } from '../services/news';
import { Alert, View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

interface MainState {
    data?: { title?: string, urlToImage?: string, author: string }[];
    isLoading?: Boolean;
}
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];

export default class LocalNews extends Component<{}, Partial<MainState>> {
    constructor(props: any) {
        super(props);
        this.state = { isLoading: true, data: [] }

    }
    componentDidMount() {
        getArticles('in').then(data => {
            this.setState({ isLoading: false, data: data });
        }, error => {
            Alert.alert('Error', 'Something went wrong');
        });
    }

    keyExtractor = (item: any, index: number) => index.toString()

    renderItem = ({ item }: any) => (
        <ListItem
            title={item.title}
            titleStyle={{ fontWeight: '300'}}
            leftAvatar={{ rounded: false, source: { uri: item.urlToImage } }}
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




    // render() {
    //     return (
    //         <View>
    //         {
    //           this.state.data?.map((item, i) => (
    //             <ListItem
    //               key={i}
    //               leftAvatar={{ source: { uri: item.urlToImage } }}
    //               title={item.title}
    //               subtitle={item.author}
    //               bottomDivider
    //             />
    //           ))
    //         }
    //       </View>
    //     );
    // }
}