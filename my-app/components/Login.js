// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';

const LoginScreen = () => {
  let email = '';
  let password = '';

  const handleLogin = () => {
    // Add login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
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
      <Button
        title="Login"
        onPress={handleLogin}
      />
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#53E0BC',
    //width: null,
    //height: null,
   //resizeMode: 'cover',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:40,
  },
  title: {
    fontSize: 34,
    marginBottom: 30,
   // color:'',
  },
  input: {
    width: '80%',
    height: 40,
    //borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    //paddingBottom:10,
    //color:'#fff',
  },
  
});

export default LoginScreen;
