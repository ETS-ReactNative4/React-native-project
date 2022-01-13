import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    title="Contact Information"
                    wrapperStyle={{ margin: 20 }} >
                    <Text>42 Sovetskaya ave </Text>
                    <Text> Bishkek 4200</Text>
                    <Text style={{ marginBottom: 10 }}> KG </Text>
                    <Text> Phone: 1-996-312-0000</Text>
                    <Text> Email: suntravel@gmail.com </Text>
                </Card>

            </ScrollView>
        );
    }
}


export default Contact;
