// ReusableTextInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const ReusableTextInput = ({ placeholder, value, onChangeText, ...props }) => (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
    />
);

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderColor: '#ccc',
    },
});

export default ReusableTextInput;
