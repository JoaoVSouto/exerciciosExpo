import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Pattern from '../style/Pattern';

export const Entry = props =>
    <View>
        <TextInput value={props.text}
            style={Pattern.input}
            onChangeText={props.callWhenChange} />
    </View>

export default class SyncedText extends Component {
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
                <Entry text={this.state.text} callWhenChange={this.changeText} />
            </View>
        );
    }
}
