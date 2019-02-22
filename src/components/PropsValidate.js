import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const PropsValidate = props =>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 35 }}>
            {props.label}
            {props.year + 2000}
        </Text>
    </View>

PropsValidate.defaultProps = {
    label: 'Year: '
}

PropsValidate.propTypes = {
    year: PropTypes.number.isRequired
}

export default PropsValidate;
