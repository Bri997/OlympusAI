import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GymMapScreen from './GymMapScreen';
import AICaochScene from './aicoachscene/AICoachScene';
import CommonStyle from '../../styles/CommonStyle';

const Stack = createStackNavigator();

export default class AICoachTabScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Stack.Navigator initialRouteName='AICoach' headerMode='none'>
        <Stack.Screen name='AICoach' component={AICaochScene} />
        <Stack.Screen name='GymMap'>
          {props => <GymMapScreen {...props} navigate={'AICoach'} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
});