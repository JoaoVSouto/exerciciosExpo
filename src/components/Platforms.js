import React from 'react';
import { View, Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notify = msg => {
        if (Platform.OS === 'android') { // ios
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert('Information', msg);
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button 
                title='Platform?' 
                onPress={() => notify('Congratulations!!!')}
                />
        </View>
    );
}
