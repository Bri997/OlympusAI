import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Modal, Image } from 'react-native'
import Video from 'react-native-video-controls';
import { RFValue } from "react-native-responsive-fontsize";
import OlympusSubHeader from './OlympusSubHeader';
import OlympusProgressChart from './OlympusProgressChart';
import CommonStyle from '../styles/CommonStyle';

const width = Dimensions.get('window').width;

const workout_png = require('../../assets/images/workout.png');
const workout_video = require('../../assets/images/1.mp4');
const close_button = require('../../assets/images/close_button.png');

const data = [
    { id: 'id0001', type: 'Front Squat', date: 'June 2, 2020', date1: 'June 2', sets: 4, reps: 8, weight: 214, cal: 600, duration: 8 },
    { id: 'id0002', type: 'Front Squat', date: 'May 28, 2020', date1: 'May 28', sets: 4, reps: 8, weight: 260, cal: 660, duration: 9 },
    { id: 'id0003', type: 'Front Squat', date: 'May 24, 2020', date1: 'May 24', sets: 5, reps: 8, weight: 230, cal: 631, duration: 8 },
    { id: 'id0004', type: 'Front Squat', date: 'May 20, 2020', date1: 'May 20', sets: 4, reps: 8, weight: 250, cal: 640, duration: 9 },
    { id: 'id0005', type: 'Front Squat', date: 'May 16, 2020', date1: 'May 16', sets: 5, reps: 9, weight: 210, cal: 630, duration: 10 }
  ];

export default class OlympusPWModal extends React.Component
{
    state = {

    }

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.props.visible}
                    presentationStyle='overFullScreen'
                    onRequestClose={() => this.props.closeModal()}
                >
                    <View style={CommonStyle.modalView}>
                        <View style={CommonStyle.modalContainer}>
                            <View style={{width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={this.props.data.avatar} style={CommonStyle.avatar_small}></Image>
                                    <Text style={[CommonStyle.textNormal, {marginLeft: 10, paddingTop: 5}]}>{this.props.data.name}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.props.closeModal()}
                                    activeOpacity={1} 
                                    style={CommonStyle.image_small}
                                >
                                    <Image source={close_button} style={CommonStyle.image_small}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{width: '100%', height: 360, paddingTop: 10}}>
                                    <OlympusSubHeader title='Workout'></OlympusSubHeader>
                                    {/*<Image style={{width: '100%', flex: 1, borderRadius: 20}} source={workout_png}></Image>*/}
                                    {<Video source={workout_video} 
                                        resizeMode='stretch' 
                                        paused={true}
                                        onBack={() => this.props.closeModal()}
                                        style={{width: '100%', flex: 1}}></Video>}
                                </View>
                                <View style={{width: '100%', height: 250, paddingTop: 10}}>
                                    <OlympusSubHeader title='Progress'></OlympusSubHeader>
                                    <View style={styles.chart_container}>
                                        <View style={styles.progress_chart}>
                                            <OlympusProgressChart data={data} onPressDot={() => {}} width={width - 24} height={215}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    chart_container: {
        width: '100%',
        flex: 1,
    },
  
    progress_chart: {
        width: '100%',
        height: '100%',
        borderColor: '#628529',
        borderWidth: 2,
        borderRadius: 20,
    }
})