//goods
import React from 'react';
import { View, StyleSheet, Image, TextInput as RNTextInput, TouchableOpacity, Text } from 'react-native'; // Added Text import
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from '../components/MyButton'; // Ensure MyButton exists
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={regStyle.container}>
      <View style={{...regStyle.section, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/logo.png')} style={regStyle.logo} />
      </View>
      
      <Text style={regStyle.title}>Create Account</Text>
      
      <View style={regStyle.section}>
        <RNTextInput
          placeholder="Full name"
          style={regStyle.input}
          placeholderTextColor="#666666"
        />
        <RNTextInput
          placeholder="Email"
          style={regStyle.input}
          placeholderTextColor="#666666"
        />
        <RNTextInput
          placeholder="Password"
          style={regStyle.input}
          placeholderTextColor="#666666"
          secureTextEntry
        />
        <RNTextInput
          placeholder="Confirm Password"
          style={regStyle.input}
          placeholderTextColor="#666666"
          secureTextEntry
        />
      </View>
      
      <View style={{...regStyle.section, marginTop: 40}}>
        <View style={{ margin: 5 }}>
          <MyButton
            text='Register'
            action={() => console.log("register")}
            mode='contained'
            size='small'
            buttonColor="#4C9B55" // Darker green background color
          />
        </View>
        <View style={{ margin: 5 }}>
          <MyButton
            text='Login'
            action={() => router.back()}
            mode='contained'
            size='small'
            buttonColor="#3A7D46" // Darker green background color
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FFF8DE', // Light background color
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 15,
    paddingTop: 0,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: -50,
  },
  title: {
    fontSize: 33,
    fontWeight: 'italic',
    color: '#54473F',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#54473F',
    padding: 15,
    marginVertical: 5,
    borderRadius: 30,
    color: '#333333',
    position: 'relative', // Add relative positioning
    top: -20,             // Move the input up by 20 units
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

});
