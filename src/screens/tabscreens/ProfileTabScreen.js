import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GymMapScreen from './GymMapScreen';
import ProfileScene from './profilescene/ProfileScene';
import CommonStyle from '../../styles/CommonStyle';

const Stack = createStackNavigator();

export default class ProfileTabScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='Profile' headerMode='none'>
        <Stack.Screen name='Profile' component={ProfileScene} />
        <Stack.Screen name='GymMap'>
          {props => <GymMapScreen {...props} navigate={'Profile'} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
});