import React from 'react';
import { View, Text } from 'react-native';
import Pattern from '../style/Pattern';
import If from './If';

function OddOrEven(num) {
    // if (num % 2 == 0) {
    //     return <Text style={Pattern.ex}>Even</Text>;
    // } else {
    //     return <Text style={Pattern.ex}>Odd</Text>;
    // }
    const v = num % 2 === 0 ? 'Even' : 'Odd';
    return <Text style={Pattern.ex}>{num} = {v}</Text>;
}

{/* <If test={props.number % 2 === 0}>
    <Text style={Pattern.ex}>{props.number} = Even</Text>
</If>
<If test={props.number % 2 === 1}>
    <Text style={Pattern.ex}>{props.number} = Odd</Text>
</If> */}

export default props =>
    <View>
        {OddOrEven(props.number)}
        {
            /*
            props.number % 2 === 0 
            ?  <Text style={Pattern.ex}>Even</Text>
            : <Text style={Pattern.ex}>Odd</Text>
            */
        }
    </View>
