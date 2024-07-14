
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';

const SignUpScreen = () => {
  let email = '';
  let password = '';
  let confirmPassword = '';

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    // Add sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => (email = text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => (password = text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => (confirmPassword = text)}
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
      />
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#53E0BC',
   // width: null,
   // height: null,
  // resizeMode: 'cover',
  //  justifyContent: 'center',
   // alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default SignUpScreen;
