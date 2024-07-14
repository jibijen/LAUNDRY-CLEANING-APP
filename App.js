
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReusableButton from './components/ReusableButton';
import GetStartedScreen from './components/Welcome';
import LoginScreen from './components/Login';
import SignUpScreen from './components/SignUp';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }} // Hide the header for GetStartedScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }} // Optionally set the title for the Login screen
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }} // Optionally set the title for the SignUp screen
        />
         <Stack.Screen
          name="ReusableButton"
          component={ReusableButton}
          options={{ headerShown: false }} // Hide the header for Reusable screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;







