import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import OlympusSubHeader from '../../components/OlympusSubHeader';
import OlympusTabHeader from '../../components/OlympusTabHeader';
import OlympusCheckButton from '../../components/OlympusCheckButton';
import CommonStyle from '../../styles/CommonStyle';

const data = [
  { id: 'equip000',
    name : 'Smith Machine', 
    image : require('../../../assets/images/equip_png/00.png'), 
    occupy_rate : 86,
    available: true,
  },
  { id: 'equip001',
    name : 'Leg Extension / Curls', 
    image : require('../../../assets/images/equip_png/01.png'), 
    occupy_rate : 76,
    available: true,
  },
  { id: 'equip002',
    name : 'Leg Abductor', 
    image : require('../../../assets/images/equip_png/02.png'), 
    occupy_rate : 86,
    available: true,
  },
  { id: 'equip003',
    name : 'Leg Press', 
    image : require('../../../assets/images/equip_png/03.png'), 
    occupy_rate : 86,
    available: false,
  },
  { id: 'equip004',
    name : 'Calf Raise', 
    image : require('../../../assets/images/equip_png/04.png'), 
    occupy_rate : 86,
    available: false,
  },
  { id: 'equip005',
    name : 'Front Squat Machine', 
    image : require('../../../assets/images/equip_png/05.png'), 
    occupy_rate : 86,
    available: false,
  },
];

export default class GymMapScreen extends React.Component {
  state = {
    is_arms         : false,
    is_chest        : false,
    is_abs          : false,
    is_shoulders    : false,
    is_back         : false,
    is_glutes       : false,
    is_legs         : false,
  }

  onPressHeader = () => {
    this.props.navigation.navigate(this.props.navigate);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[CommonStyle.mainView]}>
        <OlympusTabHeader title='Gym Map' active={true} onPress={this.onPressHeader}/>
        <OlympusSubHeader title='Equipment Availability'/>
        <View style={CommonStyle.mb_20}>
          <View style={styles.button_row}>
            <OlympusCheckButton text="Arms" style={{width: 70}} onPress={() => this.setState({ is_arms: !this.state.is_arms })}></OlympusCheckButton>
            <OlympusCheckButton text="Chest" style={{width: 70}} onPress={() => this.setState({ is_chest: !this.state.is_chest })}></OlympusCheckButton>
            <OlympusCheckButton text="Abs" style={{width: 70}} onPress={() => this.setState({ is_abs: !this.state.is_abs })}></OlympusCheckButton>
            <OlympusCheckButton text="Shoulders" style={{width: 100}} onPress={() => this.setState({ is_shoulders: !this.state.is_shoulders })}></OlympusCheckButton>
          </View>
          <View style={styles.button_row}>
            <OlympusCheckButton text="Back" style={{width: 70}} onPress={() => this.setState({ is_back: !this.state.is_back })}></OlympusCheckButton>
            <OlympusCheckButton text="Glutes" style={{width: 70}} onPress={() => this.setState({ is_glutes: !this.state.is_glutes })}></OlympusCheckButton>
            <OlympusCheckButton text="Legs" style={{width: 70}} onPress={() => this.setState({ is_legs: !this.state.is_legs })}></OlympusCheckButton>
          </View>
        </View>
        <ScrollView style={[CommonStyle.flexsize, CommonStyle.flex_col]}>
          { data.map((item) => {
            return (
              <View key={item.id} style={styles.equip_item}>
                <Image source={item.image} style={styles.equip_image}></Image>
                <View style={[CommonStyle.flexsize, CommonStyle.flex_col, {paddingVertical: 10}]}>
                  <View style={[CommonStyle.flexsize, CommonStyle.flex_row]}>
                    <Text style={[CommonStyle.textBold_Normal, {marginRight: 20}]}>{item.name}</Text>
                    { item.available  ? <Text style={[CommonStyle.textBold_Normal, {color: 'green'}]}>Available</Text> 
                                      : <Text style={[CommonStyle.textBold_Normal, {color: 'red'}]}>Not Available</Text> 
                    }
                  </View>
                  <Text style={CommonStyle.textNormal}>{item.occupy_rate + '% Occupancy Rate'}</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  equip_item: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 23,
  },
  equip_image: {
    width: 45,
    height: 55,
    marginRight: 12,
    borderRadius: 2,
  },
  button_row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
  },
});