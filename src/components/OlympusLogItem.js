import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import CommonStyle from '../styles/CommonStyle';

export default class OlympusLogItem extends React.Component
{
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={this.props.activeItem == this.props.data.id ? styles.log_item_sel : styles.log_item}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={CommonStyle.logitemText}>{this.props.data.type}</Text>
                <Text style={CommonStyle.logitemText}>{this.props.data.date}</Text>
            </View>
            <View style={styles.log_view2}>
                <Text style={CommonStyle.logitemText}>{this.props.data.sets}</Text>
                <Text style={CommonStyle.logitemLabel}>Sets</Text>
                <Text style={CommonStyle.logitemText}>{this.props.data.reps}</Text>
                <Text style={CommonStyle.logitemLabel}>Reps</Text>
                <Text style={[CommonStyle.logitemText, this.props.activeItem == this.props.data.id && styles.selected_item]}>{this.props.data.weight}</Text>
                <Text style={[CommonStyle.logitemLabel, this.props.activeItem == this.props.data.id && styles.selected_item]}>Lbs</Text>
                <Text style={CommonStyle.logitemText}>{this.props.data.cal}</Text>
                <Text style={CommonStyle.logitemLabel}>Cal</Text>
                <Text style={CommonStyle.logitemText}>{this.props.data.duration}</Text>
                <Text style={CommonStyle.logitemLabel}>Avg. Rep Duration</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    log_item: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: '#606060',
        borderRadius: 3,
        paddingHorizontal: 10,
        marginBottom: 10
    },

    log_item_sel: {
      width: '100%',
      height: 70,
      justifyContent: 'center',
      flexDirection: 'column',
      borderWidth: 2,
      borderColor: '#7aa534',
      borderRadius: 3,
      paddingHorizontal: 10,
      marginBottom: 10
    },

    selected_item: {
      color: '#7aa534',
    },
    
    log_view2: {
        flexDirection: 'row',
        marginTop: 10
    }
  });