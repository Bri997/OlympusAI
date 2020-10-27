import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScene from './activityscene/ActivityScene';
import GymMapScreen from './GymMapScreen';
import CommonStyle from '../../styles/CommonStyle';

const Stack = createStackNavigator();

export default class ActivityTabScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Stack.Navigator initialRouteName='Activity' headerMode='none'>
        <Stack.Screen name='Activity' component={ActivityScene} />
        <Stack.Screen name='GymMap'>
          {props => <GymMapScreen {...props} navigate={'Activity'} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
});