import React from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput as RNTextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={loginStyle.container}>
      <ScrollView contentContainerStyle={loginStyle.scrollContainer}>
        <View style={loginStyle.logoSection}>
          <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
        </View>

        <View style={loginStyle.formSection}>
          <RNTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Username/Email"
            style={loginStyle.input}
            placeholderTextColor="#666666"
          />
          <RNTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={loginStyle.input}
            secureTextEntry={!isShowPassword}
            placeholderTextColor="#666666"
          />
          <TouchableOpacity
            onPress={() => setIsShowPassword(!isShowPassword)}
            style={loginStyle.togglePassword}
          >
            <Text style={loginStyle.togglePasswordText}>
              {isShowPassword ? 'Hide Password' : 'Show Password'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[loginStyle.buttonContainer, loginStyle.loginButtonContainer]}>
          <MyButton
            text="Log In"
            action={() => router.replace('/dashboard/home')} // Navigate to the Home screen
            mode="contained"
            size="small"
            textColor="#FFFFFF"
            buttonColor="#4C9B55"
          />
        </View>

        <View style={[loginStyle.buttonContainer, loginStyle.registerButtonContainer]}>
          <MyButton
            text="Register"
            action={() => router.push('register')} // Navigate to the Register screen
            mode="contained"
            size="small"
            textColor="#FFFFFF"
            buttonColor="#3A7D46"
          />
        </View>

        <TouchableOpacity
          style={loginStyle.linkButton}
          onPress={() => router.push('recover')} // Navigate to the Recover Password screen
        >
          <Text style={loginStyle.linkButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF8DE',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 150,
    marginTop: -50,
  },
  formSection: {
    width: '100%',
    marginTop: -10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#54473F',
    padding: 12,
    marginVertical: 10,
    borderRadius: 30,
    color: '#333333',
  },
  togglePassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  togglePasswordText: {
    color: '#54473F',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  linkButton: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  linkButtonText: {
    color: '#ffbb00',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
