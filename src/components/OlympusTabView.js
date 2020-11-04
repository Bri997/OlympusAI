import React from 'react'
import { Text, View, TouchableHighlight, Dimensions, StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

import CommonStyle from '../styles/CommonStyle';

export default class OlympusTabView extends React.Component
{
  state = {
    activeTab: null,
    items: []
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.setState({
      activeTab: this.props.activeTab
    })
  }

  onClickTab (id) {
    this.setState({
      activeTab: id
    })
  }

  render() {
    console.log('render')
    return (
      <View style={CommonStyle.fullsize}>
        <View style={[this.props.tabsStyle ? this.props.tabsStyle : {justifyContent: 'center'}, styles.tabheader]}>
          { this.props.tabItems.map((item) => {
            return (
            <TouchableHighlight key={item.id} style={[
                this.props.style, 
                styles.btnContainerStyle, 
                this.state.activeTab === item.id ? styles.activeBorder :styles.inactiveBorder]}
              onPress={() => this.onClickTab(item.id)}>
              <Text style={[CommonStyle.fontSize_12, styles.btnTextStyle]}>{item.text}</Text>
            </TouchableHighlight >)
            })
          }
        </View>
        <View style={CommonStyle.flexsize}>
          { this.props.tabItems.map((item) => {
              return (this.state.activeTab === item.id && item.scene())
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabheader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  btnContainerStyle: {
    paddingBottom: 3,
    borderBottomWidth: 3,
    //width: 130
  },
  activeBorder: {
    borderColor: '#bbfd4f',
  },
  inactiveBorder: {
    borderColor: '#000',
  },
  btnTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: 'Quicksand-Medium'
  }
})