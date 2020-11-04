import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import { AmplifyTheme} from 'aws-amplify-react-native';





const Stack = createStackNavigator();



const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeaderText, { color: 'green' });
const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeaderText: MySectionHeader }); 

function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>      
    );

}  



export default withAuthenticator(App, false, [], null, MyTheme)