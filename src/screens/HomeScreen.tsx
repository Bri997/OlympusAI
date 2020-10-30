import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './tabscreens/HomeTabScreen';
import ActivityTabScreen from './tabscreens/ActivityTabScreen';
import AICoachTabScreen from './tabscreens/AICoachTabScreen';
import RankingTabScreen from './tabscreens/RankingTabScreen';
import ProfileTabScreen from './tabscreens/ProfileTabScreen';


const Tab = createBottomTabNavigator();

export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <Tab.Navigator screenOptions= {({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log(route.name);
          let iconName = '';
          if (route.name === 'HomeTabScreen') {
            iconName = focused ? require('../../assets/images/home-g.png') : require('../../assets/images/home-w.png')
          } else if (route.name === 'ActivityTabScreen') {
            iconName = focused ?  require('../../assets/images/running-g.png') : require('../../assets/images/running-w.png')
          } else if (route.name === 'AICoachTabScreen') {
            iconName = focused ?  require('../../assets/images/weight-g.png') : require('../../assets/images/weight-w.png')
          } else if (route.name === 'RankingTabScreen') {
            iconName = focused ?  require('../../assets/images/trophy-g.png') : require('../../assets/images/trophy-w.png')
          } else if (route.name === 'ProfileTabScreen') {
            iconName = require('../../assets/images/default.png')
          }

          return (<Image source={iconName}></Image>);
        },
      })} tabBarOptions={{style:{backgroundColor: '#000'}, showLabel: false}}>
        <Tab.Screen key="maintab000" name="HomeTabScreen" component={HomeTabScreen} />
        <Tab.Screen key="maintab001" name="ActivityTabScreen" component={ActivityTabScreen} />
        <Tab.Screen key="maintab002" name="AICoachTabScreen" component={AICoachTabScreen} />
        <Tab.Screen key="maintab003" name="RankingTabScreen" component={RankingTabScreen} />
        <Tab.Screen key="maintab004" name="ProfileTabScreen" component={ProfileTabScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
});