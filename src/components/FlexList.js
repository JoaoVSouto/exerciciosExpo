import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const students = [
    { key: 1, name: 'John', grade: 7.9 },
    { key: 2, name: 'May', grade: 9.1 },
    { key: 3, name: 'Bobby', grade: 5.4 },
    { key: 4, name: 'Mathew', grade: 7.6 },
    { key: 5, name: 'Linda', grade: 6.8 },
    { key: 6, name: 'Mao', grade: 9.9 },
    { key: 7, name: 'Janet', grade: 10.0 },
    { key: 8, name: 'Brian', grade: 8.8 },
    { key: 9, name: 'Neil', grade: 8.8 },
    { key: 10, name: 'Bill', grade: 7.9 },
    { key: 11, name: 'Tobi', grade: 9.1 },
    { key: 12, name: 'Teresa', grade: 5.4 },
    { key: 13, name: 'Paul', grade: 7.6 },
    { key: 14, name: 'Alfonso', grade: 6.8 },
    { key: 15, name: 'Marvin', grade: 9.9 },
    { key: 16, name: 'Maurice', grade: 10.0 },
    { key: 17, name: 'Patti', grade: 8.8 },
    { key: 18, name: 'Marie', grade: 8.8 }
];

const itemStyle = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // alignItems: 'flex-end',
};

export const Student = props =>
    <View style={itemStyle}>
        <Text>Name: {props.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>Grade: {props.grade}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Student {...item} />
    }

    return (
        <ScrollView style={{marginTop: 23}}>
            <FlatList data={students} renderItem={renderItem}
                keyExtractor={(_, key) => key.toString()} />
        </ScrollView>
    );
}
