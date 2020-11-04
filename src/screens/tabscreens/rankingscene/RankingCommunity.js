import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import OlympusPicker from '../../../components/OlympusPicker';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import CommonStyle from '../../../styles/CommonStyle';

const arrow_up = require('../../../../assets/images/arrow-up.png');
const arror_down = require('../../../../assets/images/arrow-down.png');

const datas = [
    { id: 'id000', name: 'Darren Samuels',   type: 'Front Squat', percentile: 'Top 10%', comparison: '10%', comparison_up: true },
    { id: 'id001', name: 'Carl Irwin',       type: 'Front Squat', percentile: 'Top 10%', comparison: '10%', comparison_up: true },
    { id: 'id002', name: 'William Donose',   type: 'Front Squat', percentile: 'Top 10%', comparison: '10%', comparison_up: true },
    { id: 'id003', name: 'Jasper Varls',     type: 'Front Squat', percentile: 'Top 10%', comparison: '10%', comparison_up: true },
    { id: 'id004', name: 'Jess Cowin',       type: 'Front Squat', percentile: 'Top 20%', comparison: '20%', comparison_up: false },
    { id: 'id005', name: 'Jose Dunone',      type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: true },
    { id: 'id006', name: 'Ben Carper',       type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: false },
    { id: 'id007', name: 'John Turner',      type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: true },
    { id: 'id008', name: 'Michael Bogner',   type: 'Front Squat', percentile: 'Top 40%', comparison: '40%', comparison_up: true },
    { id: 'id009', name: 'Eddie Howards',    type: 'Front Squat', percentile: 'Top 50%', comparison: '50%', comparison_up: false },
    { id: 'id010', name: 'Jess Cowin',       type: 'Front Squat', percentile: 'Top 20%', comparison: '20%', comparison_up: false },
    { id: 'id011', name: 'Jose Dunone',      type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: true },
    { id: 'id012', name: 'Ben Carper',       type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: false },
    { id: 'id013', name: 'John Turner',      type: 'Front Squat', percentile: 'Top 30%', comparison: '30%', comparison_up: true },
    { id: 'id014', name: 'Michael Bogner',   type: 'Front Squat', percentile: 'Top 40%', comparison: '40%', comparison_up: true },
    { id: 'id015', name: 'Eddie Howards',    type: 'Front Squat', percentile: 'Top 50%', comparison: '50%', comparison_up: false },
]

export default class RankingCommunity extends React.Component {
    state = {
        show_column : '',
    }

    componentDidMount () {
        this.setState({
            show_column: 'col_percentile'
        })
    }

    render() {
        return (
            <View style={[CommonStyle.pt_10, CommonStyle.fullsize]}>
                <View style={[CommonStyle.flex_row, CommonStyle.mb_10]}>
                    <View style={{flexDirection: 'column', width: 200, marginRight: 10}}>
                        <Text style={CommonStyle.textBold_Normal}>Athlete</Text>
                        <TextInput style={styles.search} placeholder={'Search by Athlete'} placeholderTextColor='#999999'></TextInput>
                    </View>
                    <View style={{flexDirection: 'column', width: 150}}>
                        <Text style={CommonStyle.textBold_Normal}>Workout Type</Text>
                        <OlympusPicker items={[
                            {label: 'Front Squat', value: 'front_squat'}
                            ]} defaultValue='front_squat' containerStyle={{height: 30}}></OlympusPicker>
                    </View>
                </View>
                <View style={[CommonStyle.flex_row, CommonStyle.mb_20]}>
                    <View style={{flexDirection: 'column', width: 150, marginRight: 10}}>
                        <Text style={CommonStyle.textBold_Normal}>Division</Text>
                        <OlympusPicker items={[
                            {label: 'Men (35 - 39)', value: 'men_1'}
                            ]} defaultValue='men_1' containerStyle={{height: 30}}></OlympusPicker>
                    </View>
                    <View style={{flexDirection: 'column', width: 150}}>
                        <Text style={CommonStyle.textBold_Normal}>Location</Text>
                        <OlympusPicker items={[
                            {label: 'Park City, Utah', value: 'city_0'}
                            ]} defaultValue='city_0' containerStyle={{height: 30}}></OlympusPicker>
                    </View>
                </View>
                <View style={[CommonStyle.flex_col, CommonStyle.flexsize]}>
                    <View style={{flexDirection: 'row',  height: 30}}>
                        <View style={styles.header_view1}>
                            <Text style={styles.header1}>Name</Text>
                        </View>
                        <View style={styles.header_view2}>
                            <Text style={styles.header2}>Workout Type</Text>
                        </View>
                        <View style={styles.header_view3}>
                            <RNPickerSelect onValueChange={(value) => this.setState({show_column: value})}
                                placeholder={{}}
                                items={[
                                    {label: 'Percentile', key: 'col_percentile', value: 'col_percentile'},
                                    {label: 'Comparison', key: 'col_comparison', value: 'col_comparison'}
                                ]}
                                style={{...pickerSelectStyles,
                                    iconContainer: {
                                      top: 14,
                                      right: 8,
                                    },}}
                                value={this.state.show_column}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => {
                                    return <Chevron size={1} color="white" />;
                                }}
                            />
                            {/*
                            <DropDownPicker
                                items={[
                                    {label: 'Percentile', key: 'col_percentile', value: 'col_percentile'},
                                    {label: 'Comparison', key: 'col_comparison', value: 'col_comparison'}
                                ]}
                                defaultValue={this.state.show_column}
                                containerStyle={{width: '100%', height:30}}
                                style={styles.header3}
                                dropDownStyle={{backgroundColor: 'grey', borderColor: 'grey'}}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                labelStyle={{
                                    fontSize: RFValue(12, 580),
                                    textAlign: 'center',
                                    color: 'white',
                                }}
                                onChangeItem={item => this.setState({
                                    show_column: item.value
                                })}
                            />*/}
                        </View>
                    </View>
                    <ScrollView style={[CommonStyle.flex_col, CommonStyle.flexsize]}>
                        { datas.map((item) => {
                            return (
                                <View key={item.id} style={{flexDirection: 'row', width: '100%', height: 40}}>
                                    <View style={styles.field_view1}>
                                        <Text style={[CommonStyle.textNormal, styles.field1]}>{item.name}</Text>
                                    </View>
                                    <View style={styles.field_view2}>
                                        <Text style={[CommonStyle.textNormal, styles.field2]}>{item.type}</Text>
                                    </View>
                                    <View  style={styles.field_view3}>
                                    {(() => {
                                        if (this.state.show_column == 'col_percentile') {
                                            return (
                                                <Text style={[CommonStyle.textNormal, styles.field3]}>{item.percentile}</Text>
                                            )
                                        } else {
                                            return (
                                                <View style={{flexDirection: 'row', width: '100%'}}>
                                                    <Text style={[CommonStyle.textNormal, styles.field3_1]}>{item.comparison}</Text>
                                                    <Image style={styles.field3_2} source={item.comparison_up ? arrow_up : arror_down}></Image>
                                                </View>
                                            )
                                        }
                                    })()}
                                    </View>
                                </View>
                            )
                        })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 30,
        borderWidth: 2,
        borderColor: '#bbfd4f',
        paddingHorizontal: 5,
        paddingVertical: 5,
        color: 'white',
    },

    header3_container: {
        flex: 1,
        backgroundColor: '#606060'
    },

    header_view1: {
        width: '40%',
        borderRightColor: '#737373',
        borderRightWidth: 1,
    },

    header1: {
        fontSize: RFValue(12, 580),
        width: '100%',
        backgroundColor: '#606060',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: 'white',
    },

    header_view2: {
        width: '30%',
        borderRightColor: '#737373',
        borderRightWidth: 1,
    },

    header2: {
        fontSize: RFValue(12, 580),
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#606060',
        paddingHorizontal: 0,
        paddingVertical: 5,
        color: 'white',
    },

    header_view3: {
        width: '30%',
    },

    header3: {
        width: '100%',
        backgroundColor: '#606060',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'transparent',
        borderWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },

    field_view1: {
        width: '40%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'left',
        borderRightColor: '#737373',
        borderRightWidth: 1,
    },

    field1: {
        width: '100%',
        textAlign: 'left',
        padding: 0,
    },

    field_view2: {
        width: '30%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'center',
        borderRightColor: '#737373',
        borderRightWidth: 1,
    },

    field2: {
        width: '100%',
        textAlign: 'center',
        padding: 0,
    },

    field_view3: {
        width: '30%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'center',
    },

    field3: {
        width: '100%',
        textAlign: 'center',
    },

    
    field3_1: {
        width: '50%',
        marginRight: 10,
        textAlign: 'right',
    },

    field3_2: {
        marginTop: 0,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        height: 31,
        fontSize: RFValue(12, 580),
        textAlign: 'center',
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 20,
        color: 'white',
        backgroundColor: '#606060',
    },
    inputAndroid: {
        width: '100%',
        height: 29,
        fontSize: RFValue(12, 580),
        textAlign: 'center',
        paddingVertical: 5,
        paddingLeft: 0,
        paddingRight: 20,
        color: 'white',
        backgroundColor: '#606060',
    },
  });