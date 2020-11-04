import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonStyle from '../../../styles/CommonStyle';

const datas = [
    { id: 'id000', title: 'FULL BODY', subtitle: '30 Minutes', round: [4, 12], items:['Burpees', 'Lunges', 'Walk outs', 'Jump Squats'] },
    { id: 'id001', title: 'LEG DAY', subtitle: '25 Minutes', round: [6, 10], items:['Jump Squats', 'Frog Squats', 'Jump Rope'] },
]

export default class ProfileProgressTab2 extends React.Component {
    componentDidMount () {

    }

    render() {
        return (
            <View style={{paddingTop: 10, width: '100%', height: '100%'}}>
                <ScrollView style={{flexDirection: 'column', width: '100%', height: '100%'}}>
                    <View style={{flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'center'}}>
                    { datas.map((item) => {
                        return (
                            <View key={item.id} style={styles.container}>
                                <Text style={[CommonStyle.textLarge_Bold, styles.title]}>{item.title}</Text>
                                <Text style={[CommonStyle.textNormal, styles.subtitle]}>{item.subtitle}</Text>
                                <Text style={[CommonStyle.textLarge_Bold, styles.round]}>{item.round[0] + ' Round of ' + item.round[1] + ':'}</Text>
                                <View style={[CommonStyle.flex_col, styles.items]}>
                                { 
                                    item.items.map((i, idx) => {
                                        return (
                                            idx < 3 && <Text key={i} style={CommonStyle.textLarge_Bold}>{i}</Text>
                                        )
                                    })
                                }
                                {
                                    item.items.length > 3 && <Text style={CommonStyle.textLarge_Bold}>...</Text>
                                }
                                </View>
                                <View style={{marginVertical: 15, alignItems: 'center', flex: 1}}>
                                    <TouchableOpacity>
                                        <View style={styles.button_start}>
                                            <Text style={CommonStyle.textBold_Normal}>View Workout</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    })
                    }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 240,
        backgroundColor: '#3f3f3f',
        marginRight: 20,
        borderRadius: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
    },

    title: {
        textAlign: 'center',
        marginTop: 10,
        borderBottomColor: '#565656',
        borderBottomWidth: 2,
    },

    subtitle: {
        textAlign: 'center',
        marginTop: 5,
    },

    round: {
        textAlign: 'center',
        marginTop: 10,
    },

    items: {
        marginTop: 10,
        marginLeft: 15,
        height: 80,
    },

    button_start: {
        width: 130,
        height: 30,
        borderColor: '#bbfd4f',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 3
    }
});