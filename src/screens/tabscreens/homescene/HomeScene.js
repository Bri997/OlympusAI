import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import OlympusPWModal from '../../../components/OlympusPWModal';
import CommonStyle from '../../../styles/CommonStyle';

const data = [
  {
    id: 1,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Bean.carper',
    message: 'Reached a new Front Squat PR',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 2,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Jen.harris23',
    message: 'Leg Day workout burner',
    time: '6:23 pm',
    p: false,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin222',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  },
  {
    id: 3,
    avatar: require('../../../../assets/images/default.png'),
    name: 'Carl.irwin111',
    message: 'New chest Day workout, check it out!',
    time: '6:23 pm',
    p: true,
    w: true
  }
];

export default class HomeScene extends React.Component {
  state = {
    modalVisible: false,
    d: {}
  }

  componentDidMount () {

  }

  showModal = (data) => {
    this.setState({d: data, modalVisible: true});
  }

  closeModal = () => {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <ScrollView style={{paddingTop: 10, width: '100%', height: '100%'}}>
        <OlympusPWModal data={this.state.d} visible={this.state.modalVisible} closeModal={this.closeModal}></OlympusPWModal>
        {data.map((item) => {
          return (
          <View style={{flexDirection: 'row', padding: 7}}>
            <View>
              <Image source={item.avatar}></Image>
            </View>
            <View style={{flex: 1, paddingBottom: 8, paddingLeft: 7, paddingRight: 4, paddingTop: 5, borderBottomColor: '#5f5f5f', borderBottomWidth: 2}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[CommonStyle.textBold_Normal]}>{item.name}</Text>
                <Text style={[CommonStyle.textNormal]}> {item.message}</Text>
              </View>
              <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                <Text style={[CommonStyle.textNormal]}>{item.time}   </Text>
                {item.p && 
                  <TouchableHighlight style={styles.circle}
                    onPress={() => this.showModal(item)}>
                    <Text style={[CommonStyle.textLarge_Bold]}>P</Text>
                  </TouchableHighlight>}
                {item.w && 
                  <TouchableHighlight style={styles.circle}
                    onPress={() => this.showModal(item)}>
                    <Text style={[CommonStyle.textLarge_Bold]}>W</Text>
                  </TouchableHighlight>}
              </View>
            </View>
          </View>
          )
        }) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    marginLeft: 6,
    width: 30, 
    height: 30, 
    borderRadius: 50, 
    borderColor: '#bbfd4f', 
    borderWidth: 3, 
    alignItems: 'center'
  },
});