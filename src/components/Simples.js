import React from 'react';
import { Text } from 'react-native';
import Pattern from '../style/Pattern';

export default props =>  
    <Text style={[Pattern.ex]}>My props: {props.text}!!</Text>

