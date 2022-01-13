import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { COMMENTS } from '../shared/comments';
import { PLACES } from '../shared/places';
import { PROMOTIONS } from '../shared/promotions';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/mountain-3700494_1920.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            places: PLACES,
            promotions: PROMOTIONS,
            comments: COMMENTS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            
            <ScrollView>
                <RenderItem 
                    item={this.state.places.filter(place => place.featured)[0]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[1]}
                />

            </ScrollView>
        );
    }
}

export default Home;