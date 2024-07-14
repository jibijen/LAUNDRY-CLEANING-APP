
import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ReusableButton = () => {
  const handlePress = () => {
    // Handle button press logic here
    console.log('Button pressed');
  };

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.tex}>hello welcome to the page of buttons</Text>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="check" size={40} color="#fff" />
            <Text style={styles.buttonText}>Success Button</Text>
          </View>}
          onPress={handlePress}
          color="green"
        />
      </View>

      <View style={styles.buttonContaine}>
        <Button
          title={<View style={styles.buttonContent}>
             <Icon name="exclamation" size={40} color="#fff" />
            <Text style={styles.buttonText}>Danger Button</Text>
            </View>}
             
          onPress={handlePress}
          color="red"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonConten}>
            <Icon name="warning" size={40} color="#fff" />
            <Text style={styles.buttonText}>Warning Button</Text>
          </View>}
          onPress={handlePress}
          color="#FAD02E"
        />
      </View>

      <View style={styles.buttonContaine}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="info" size={40} color="#fff" />
            <Text style={styles.buttonText}>Info Button</Text>
          </View>}
          onPress={handlePress}
          color="blue"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="star" size={40} color="#fff" />
            <Text style={styles.buttonText}>Primary Button</Text>
          </View>}
          onPress={handlePress}
          color="#6200ee"
        />
      </View>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tex: {
    fontSize: 34, 
    color:"#E74292",
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingVertical: 30,
    fontWeight:'600',
  },
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    //borderWidth:30,
   // flex:1,
  },
  buttonContainer: {
   // marginBottom: 10,
    borderWidth: 1,
    borderCurve: 10,
    borderRadius: 10,
    //  flex:1,
     marginBottom: 10,
    borderRadius: 10, // Rounded corners for all buttons
    overflow: 'hidden', // Ensure overflow doesn't show beyond border radius
  },
  buttonContaine: {
    marginBottom: 10,
    borderWidth: 1,
    
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   // flex:1,
  },
  buttonText: {
    color: '#EAF0F1',
    fontSize: 19,
    marginLeft: 15,
    marginRight:15,
  },
});

export default ReusableButton;
