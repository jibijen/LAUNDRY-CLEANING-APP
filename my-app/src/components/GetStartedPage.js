import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GetStartedPage = ({ navigateTo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Button title="Get Started" onPress={() => navigateTo('Login')} />
      <Button title="Register" onPress={() => navigateTo('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GetStartedPage;