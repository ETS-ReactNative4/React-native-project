import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
//redux
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        place: state.places,
        promotions: state.promotions
    };
};

function RenderItem({ item }) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{ uri: baseUrl + item.image }}>

                <Text style={{ margin: 10 }}>
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
            favorite: false
        };
    }

    

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
        <ScrollView>
                <RenderItem
                    item={this.props.places.places.filter(place => place.featured)[0]}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                />
                
        </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);