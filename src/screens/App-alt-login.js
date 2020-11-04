import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator} from 'react-native';

import HomeTabScreen from  "/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/HomeScreen"
import SignIn from '/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/signin';
import SignUp from '/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/signup'
import ConfirmSignUp from "/Users/edouardovitale/Documents/GitHub/OlympusAI/src/screens/confirmsignup"
// import { Greetings, withAuthenticator, SignIn, SignUp, ConfirmSignIn, ConfirmSignUp, ForgotPassword , VerifyContact ,RequireNewPassword, Authenticator, AmplifyTheme} from 'aws-amplify-react-native'
import Amplify , { Auth }from 'aws-amplify';
import awsconfig from './aws-exports';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '/Users/edouardovitale/Documents/GitHub/OlympusAI/src/styles/CommonStyle';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';

Amplify.configure(awsconfig);
const AppStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = props => {
  
    return (
  
      <AuthenticationStack.Navigator headerMode="none">
  
        <AuthenticationStack.Screen name="SignIn">
        {screenProps => (<SignIn {...screenProps} updateAuthState={props.updateAuthState} />)}
        </AuthenticationStack.Screen>
  
        <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        <AuthenticationStack.Screen

        name="ConfirmSignUp"

        component={ConfirmSignUp}

      />

  
      </AuthenticationStack.Navigator>
  
    );
  
  };


const AppNavigator = props => {
  
    return (
  
      <AppStack.Navigator headerMode="none">
  
        <AppStack.Screen name="home">
        {screenProps => (<HomeTabScreen {...screenProps} updateAuthState={props.updateAuthState} />)}

        </AppStack.Screen>

  
      </AppStack.Navigator>
  
    );
  
  };

  

  const Initializing = () => {
    
      return (
    
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
          <ActivityIndicator size="large" color="tomato" />
    
        </View>
    
      );
    
    };


function App ()  {
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');
  useEffect(() => {
    
        checkAuthState();
    
      }, []);
    
    
      async function checkAuthState() {
    
        try {
    
          await Auth.currentAuthenticatedUser();
    
          console.log(' User is signed in');
    
          setUserLoggedIn('loggedIn');
    
        } catch (err) {
    
          console.log(' User is not signed in');
    
          setUserLoggedIn('loggedOut');
    
        }
    
      }
    
    
      function updateAuthState(isUserLoggedIn: React.SetStateAction<string>) {
    
        setUserLoggedIn(isUserLoggedIn);
    
      }




      return (
        
              <NavigationContainer>
        
                {isUserLoggedIn === 'initializing' && <Initializing />}
        
                {isUserLoggedIn === 'loggedIn' && (
        
                  <AppNavigator updateAuthState={updateAuthState} />
        
                )}
        
                {isUserLoggedIn === 'loggedOut' && (
      
                  <AuthenticationNavigator updateAuthState={updateAuthState} />
        
                )}
        
              </NavigationContainer>
        
            );
        
      }
      
    // return (
      
    //   <NavigationContainer>
    //     <AppStack.Navigator initialRouteName="Home" headerMode="none">
    //     {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    //       <AppStack.Screen name="Home" component={HomeScreen} />
    //     </AppStack.Navigator>

    //   </NavigationContainer>    
   
       
    // )
      


export default App;
// export default withAuthenticator(App);



  // [ 
  //   <Greetings/>,
  //   <ConfirmSignIn/>,
  //   <ConfirmSignUp/>,
  //   <ForgotPassword/>,
  //   <RequireNewPassword />, 
  //   <VerifyContact/>,
  //   <SignIn/>,
  //   <SignUp/>,
  //   <VerifyContact/>]