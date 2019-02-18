import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// FUNCTIONAL COMPONENT
export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.f40}>App!</Text>
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
