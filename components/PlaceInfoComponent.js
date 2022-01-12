import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderPlace({place}) {
    if (place) {
        return (
            <Card 
                featuredTitle={place.name}
                image={require('./images/issyk-kulV8PIvXjVqrk-unsplash.jpg')}
            >
                <Text style={{margin: 10}}>
                    {place.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function PlaceInfo(props) {
    return <RenderPlace place={props.place} />;
}

export default PlaceInfo;