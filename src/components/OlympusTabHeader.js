import React from 'react'
import { Text, Image, View, Dimensions, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import CommonStyle from '../styles/CommonStyle';

export default class OlympusTabHeader extends React.Component
{
  state = {
    index: 0
  }

  constructor (props) {
      super(props)
  }

  setIndex = (value) => {
    this.setState({
      index: value
    })
  }

  render() {
    let icon = this.props.active ? require('../../assets/images/map-location-g.png') : require('../../assets/images/map-location-w.png');
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 32, marginBottom: 10}}>
          <Text style={[CommonStyle.tabheaderLabel]}>{this.props.title}</Text>
          <TouchableHighlight onPress={this.props.onPress}>
            <Image source={icon}/>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})