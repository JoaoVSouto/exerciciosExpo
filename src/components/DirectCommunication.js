import React, { Component } from 'react';
import { View, Text } from 'react-native';

const font = { style: { fontSize: 30 } };

function sonsWithProps(props) {
    return React.Children.map(props.children, 
            c => React.cloneElement(c, { ...props, ...c.props }));
}

export const Son = props =>
    <View>
        <Text {...font}>Son: {props.name} {props.surname}</Text>
    </View>

export const Father = props => 
    <View>
        <Text {...font}>Father: {props.name} {props.surname}</Text>
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, {...props, ...props.children.props})} ACCEPTS ONLY ONE COMPONENT */}
        {sonsWithProps(props)}
    </View>

export const Grandfather = props => 
    <View style={{marginTop: 40}}>
        <Text {...font}>Grandfather: {props.name} {props.surname}</Text>
        <Father name='Andrew' surname={props.surname}>
            <Son name='James' />
            <Son name='Anthony' />
            <Son name='Bob' />
        </Father>
        <Father {...props} name='Peter'>
            <Son name='Nick' />
            <Son name='Hawk' />
        </Father>
    </View>

export default Grandfather;
