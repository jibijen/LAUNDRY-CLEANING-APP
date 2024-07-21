// ReusableButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReusableButton = ({ title, onPress, kind = 'primary', size = 'large', style }) => {
    const buttonStyles = [
        styles.button,
        styles[kind], // Apply styles based on kind prop (e.g., primary, secondary)
        styles[size], // Apply styles based on size prop (e.g., small, large)
        style, // Additional styles passed through props
    ];

    const textStyles = [
        styles.text,
        styles.textDefault, // Default text style
        styles[`${kind}Text`], // Text color based on kind prop (e.g., primaryText, secondaryText)
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textDefault: {
        color: '#FFFFFF',
    },
    primary: {
        backgroundColor: '#4CAF50',
    },
    primaryText: {
        color: '#FFFFFF',
    },
    secondary: {
        backgroundColor: '#2196F3',
    },
    secondaryText: {
        color: '#FFFFFF',
    },
    large: {
        paddingVertical: 16,
        paddingHorizontal: 22,
    },
    small: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default ReusableButton;
