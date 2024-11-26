import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import MyButton from '../components/MyButton'; // Assuming you have a custom button component

const Recover = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');

  const handlePasswordRecovery = () => {
    // Placeholder action for sending an email, e.g., make an API call to handle the recovery
    console.log('Password recovery submitted');
    
    // Show confirmation alert
    Alert.alert('Password Recovery', 'A recovery email has been sent to your registered email address.', [
      { text: 'OK', onPress: () => router.replace('/') }, // Navigate back to the login page after pressing OK
    ]);
  };

  return (
    <ScrollView contentContainerStyle={recoverStyle.scrollContainer}>
      <View style={recoverStyle.container}>
        {/* Logo Section */}
        <View style={recoverStyle.headerSection}>
          <Image source={require('../assets/logo.png')} style={recoverStyle.logo} />
        </View>

        {/* Recover Password Header */}
        <View style={recoverStyle.headerTextSection}>
          <Text style={recoverStyle.title}>Recover Password</Text>
        </View>

        {/* Email Input Section */}
        <View style={recoverStyle.formSection}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your registered email"
            style={recoverStyle.textInput}
          />
        </View>

        {/* Submit Button */}
        <View style={recoverStyle.buttonContainer}>
          <MyButton
            text="Send an Email"
            action={handlePasswordRecovery} // Call the handlePasswordRecovery function on click
            mode="contained"
            size="medium"
            buttonColor="#3A7D46"
          />
        </View>

        {/* Back to Login Button */}
        <View style={recoverStyle.forgotPasswordSection}>
          <TouchableOpacity
            onPress={() => router.replace('/')} // Navigates back to the login screen
            style={recoverStyle.linkContainer}
          >
            <Text style={recoverStyle.linkText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Recover;

const recoverStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DE', // Light background color
    paddingHorizontal: 20,
    paddingTop: 20, // Added padding to the top to avoid sticking to the top
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: -1,
  },
  headerSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginBottom: -20,
  },
  headerTextSection: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 33,
    fontWeight: 'italic',
    color: '#54473F',
    textAlign: 'center',
  },
  formSection: {
    width: '100%',
    paddingHorizontal: 5,
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 18,
    height: 50,
    width: '100%',
    alignSelf: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 1,
    width: '80%',
    alignSelf: 'center',
  },
  forgotPasswordSection: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  linkContainer: {
    marginTop: -1,
  },
  linkText: {
    color: '#ffbb00',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
