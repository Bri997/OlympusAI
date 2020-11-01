import React, { useState }from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '../styles/CommonStyle';
import OlympusInput from '../components/OlympusInput';
import OlympusButton from '../components/OlympusButton';
import OlympusLink from '../components/OlympusLink';
import { withSSRContext , Auth , I18n } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/AppButton';
import AppTextInput from '/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/AppTextInput';



 export default function LoginScreen({ navigation, updateAuthState }) {
  const [username, setUsername] = useState('');
  
    const [password, setPassword] = useState('');

    async function onLogin() {

      try {

        await Auth.signIn(username, password);

        console.log(' Success');

        // updateAuthState('loggedIn');

      } catch (error) {

        console.log(' Error signing in...', error);
  
      }

    }

   
  // onLogin = () => {
  //   console.log('login');
  //   this.props.navigation.navigate('Home');
  // }
  // onSignUp = () => {
  //   console.log('sign up');
  // }

    // const { navigate } = this.props.navigation;
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AppTextInput
      value={username}
      onChangeText={text => setUsername(text)}

          leftIcon="account"

          placeholder="Enter username"

          autoCapitalize="none"

          keyboardType="email-address"

          textContentType="emailAddress"
        />


<AppTextInput
      value={password}
      onChangeText={text => setPassword(text)}

      leftIcon="lock"

          placeholder="Enter password"

          autoCapitalize="none"

          keyboardType="email-address"
          secureTextEntry
          ttextContentType="password"

        />
        
        <AppButton title="Login" onPress={onLogin} />

        <View >
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text >Don't have an account? Sign Up </Text>
        </TouchableOpacity>
        </View>
        
        </View>
    );
  }







// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: 30
  }
});


