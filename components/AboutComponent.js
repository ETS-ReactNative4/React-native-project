import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions.js';


function Mission() {
    return (
        <Card title="Our Mission">
            <Text style={{ margin: 10 }}>
            Sun Travel Kyrgyzstan is leading Kyrgyzstan travel agency, we outdo at helping you get your trip planned. Not just trip, but exceptional trips filled with exciting and life-enriching experiences. Our travel agents are experts at handcrafting and coordinating complex itineraries to Kyrgyzstan. Their expertise encompass all logistics, accommodation, guides, transportation, and insider access to exceptional experiences – as well as round the clock support throughout your trip. So, explore Kyrgyzstan with us to get the life’s best travel experience.
            </Text>
        </Card>
    );
}


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotions: PROMOTIONS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPromotion = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/marek-brzoska-Fp89mUyzBfc-unsplash.jpg') }}
                />
            );
        };

        return (
            <ScrollView>
                <Mission />
                <Card
                    title='About Us'>
                    <FlatList
                        data={this.state.promotions}
                        renderItem={renderPromotion}
                        keyExtractor={item => item.id.toString()} />
                </Card>
            </ScrollView>
        );
    }
}



export default About;

