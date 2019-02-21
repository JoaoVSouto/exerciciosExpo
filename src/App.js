import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './components/Simples';
import OddOrEven from './components/OddOrEven';
import Reverse, { Lottery } from './components/Multi';

// FUNCTIONAL COMPONENT
export default () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.f40}>App!</Text> */}
      <Simples text='Flexible text' />
      <OddOrEven number={25}/>
      <Reverse text='React Native!' />
      <Lottery />
    </View>
  );
}

// CLASS BASED COMPONENT
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.f40}>App!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f40: {
    fontSize: 40
  }
});
