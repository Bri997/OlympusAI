import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('window').width

export default class OlympusButton extends React.Component
{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[this.props.style, styles.btnContainerStyle]}>
                    <Text style={styles.btnTextStyle}> {this.props.text} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#bbfd4f',
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 20
  },
  btnTextStyle: {
    color: '#000',
    fontSize: RFValue(12, 580),
    textAlign: 'center',
    // fontFamily: 'Quicksand-Medium'
  }
})