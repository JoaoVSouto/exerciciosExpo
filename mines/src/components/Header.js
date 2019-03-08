import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackgroundBorderless()} onPress={props.onNewGame}>
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Novo Jogo</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
        marginTop: 2
    },
    flagContainer: {
        flexDirection: 'row'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 8,
        borderRadius: 12
    },
    buttonLabel: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
