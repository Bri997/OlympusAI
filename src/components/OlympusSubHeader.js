import React from 'react'
import { Text, Image, View, Dimensions, StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import CommonStyle from '../styles/CommonStyle';

export default class OlympusSubHeader extends React.Component
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
    return (
      <View style={{height: 30, marginBottom: 5}}>
          <Text style={[CommonStyle.subheaderLabel]}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
})