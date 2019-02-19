import React from 'react';
import { Text } from 'react-native';

// returning JSX without a container
export default props =>  [
    <Text key={Math.random()}>My sample text1: {props.text}!!</Text>,
    <Text key={Math.random()}>My sample text2: {props.text}!!</Text>
]
