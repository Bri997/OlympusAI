import React from 'react';
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
import { withSSRContext } from 'aws-amplify';

export default class LoginScreen extends React.Component {
  onLogin = () => {
    console.log('login');
    this.props.navigation.navigate('Home');
  }
  onSignUp = () => {
    console.log('sign up');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#b8f94e', '#0c1005']} style={styles.linearGradient}>
          <Text style={CommonStyle.title}>Olympus AI</Text>
          <View style={{flexDirection: 'column', justifyContent: 'center', flex: 1, alignItems: 'stretch'}}>
            <Text style={[CommonStyle.titleLg, CommonStyle.mb_15]}>Login</Text>
            <Text style={CommonStyle.labelWhite}>Email Address</Text>
            <OlympusInput></OlympusInput>
            <Text style={CommonStyle.labelWhite}>Password</Text>
            <OlympusInput style={CommonStyle.mb_30}></OlympusInput>
            <OlympusButton text="Login" onPress={this.onLogin}></OlympusButton>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 25}}>
              <Text style={[CommonStyle.labelWhite]}>
                Don't you have an account?
              </Text>
              <OlympusLink text="Sign Up" onPress={this.onSignUp} style={[CommonStyle.fontSize_12, {paddingTop: 8}]}></OlympusLink>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
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