import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Pattern from '../style/Pattern';

export default class Event extends Component {
    state = {
        text: ''
    }

    changeText = text => {
        this.setState({ text });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={Pattern.font40}>{this.state.text}</Text>
                <TextInput value={this.state.text}
                    style={Pattern.input}
                    onChangeText={this.changeText} />
            </View>
        );
    }
}
