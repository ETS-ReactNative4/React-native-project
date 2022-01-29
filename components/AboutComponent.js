import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


//added function mapStateToprops
const mapStateToProps = state => {
    return {
        promotions: state.promotions
    };
};



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


    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPromotion = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        return (
            <ScrollView>
                <Mission />
                <Card
                    title='About Us'>
                    <FlatList
                        data={this.props.promotions.promotions}
                        renderItem={renderPromotion}
                        keyExtractor={item => item.id.toString()} />
                </Card>
            </ScrollView>
        );
    }
}



export default connect(mapStateToProps)(About);

