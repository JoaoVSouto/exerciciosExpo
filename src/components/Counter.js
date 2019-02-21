import React, { Component } from 'react';
import { View, 
        Text, 
        TouchableHighlight,
        StyleSheet } from 'react-native';

export default class Counter extends Component {
    state = {
        number: this.props.startNumber
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {/* ... */}
    //     this.moreOne = this.moreOne.bind(this);
    // }

    moreOne() {
        this.setState({ number: ++this.state.number });
    }

    clear = () => {
        this.setState({ number: 0 });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>
                        { this.state.number }
                    </Text>
                </View>
                <TouchableHighlight 
                    onPress={() => this.moreOne()} 
                    onLongPress={this.clear}
                    style={styles.button}
                    underlayColor={'#777'}
                    >
                    <Text>Add/Clean</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        fontSize: 32,
        color: '#FF00FF'
    }
});
