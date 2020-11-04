import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import CommonStyle from '../styles/CommonStyle';

export default class OlympusPicker extends React.Component
{
  state = {
  }

  constructor (props) {
      super(props)
  }

  render() {
      return (
        <RNPickerSelect onValueChange={(value) => console.log('select value: ' + value)}
          placeholder={{}}
          items={this.props.items}
          value={this.props.defaultValue}
          style={{...pickerSelectStyles,
            iconContainer: {
              top: 14,
              right: 8,
            },}}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
              return <Chevron size={1} color="black" />;
          }}
        />
        /*
        <DropDownPicker
          items={this.props.items}
          defaultValue={this.props.defaultValue}
          containerStyle={[{height: 25, padding: 0, margin: 0}, this.props.containerStyle]}
          style={[{borderColor: '#bbfd4f', backgroundColor: '#bbfd4f'}, this.props.widthStyle]}
          selectedLabelStyle={{
            fontSize: RFValue(9, 580)
          }}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          arrowStyle={{
            margin: 0,
            padding: 0,
            height: 15
          }}
          dropDownStyle={[{
            backgroundColor: '#bbfd4f',
            borderColor: '#bbfd4f',
            padding: 1,
          }, this.props.widthStyle]}
          labelStyle={{
            fontSize: RFValue(9, 580)
          }}
          activeLabelStyle={{
            fontWeight: 'bold'
          }}
          onChangeItem={item => this.setState({
              country: item.value
          })}
        />
        */
      );
  }
}

const styles = StyleSheet.create({
  
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      width: '100%',
      height: 30,
      fontSize: RFValue(9, 580),
      textAlign: 'left',
      padding: 5,
      backgroundColor: '#bbfd4f',
      borderRadius: 2,
  },
  inputAndroid: {
    width: '100%',
    height: 30,
    fontSize: RFValue(10, 580),
    color: 'black',
    textAlign: 'left',
    padding: 5,
    backgroundColor: '#bbfd4f',
    borderRadius: 2,
  },
});