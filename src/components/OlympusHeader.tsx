import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import CommonStyle from '../styles/CommonStyle';

export default class OlympusHeader extends React.Component
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
      <View style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={[CommonStyle.headerLabel]}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})