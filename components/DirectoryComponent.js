import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
            title={item.name}
            subtitle={item.description}
            onPress={() => props.onPress(item.id)}
            leftAvatar={{ source: require('./images/issyk-kulV8PIvXjVqrk-unsplash.jpg')}}
        />
        );
    };

    return (
        <FlatList
            data={props.places}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;