import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import OlympusPicker from '../../../components/OlympusPicker';
import OlympusProgressChart from '../../../components/OlympusProgressChart';
import OlympusTabView from '../../../components/OlympusTabView';
import CommonStyle from '../../../styles/CommonStyle';

import ProfileProgressTab1 from './ProfileProgressTab1';
import ProfileProgressTab2 from './ProfileProgressTab2';

const data = [
    { id: 'id0001', type: 'Front Squat', date: 'June 2, 2020', date1: 'June 2', sets: 4, reps: 8, weight: 214, cal: 600, duration: 8 },
    { id: 'id0002', type: 'Front Squat', date: 'May 28, 2020', date1: 'May 28', sets: 4, reps: 8, weight: 260, cal: 660, duration: 9 },
    { id: 'id0003', type: 'Front Squat', date: 'May 24, 2020', date1: 'May 24', sets: 5, reps: 8, weight: 230, cal: 631, duration: 8 },
    { id: 'id0004', type: 'Front Squat', date: 'May 20, 2020', date1: 'May 20', sets: 4, reps: 8, weight: 250, cal: 640, duration: 9 },
    { id: 'id0005', type: 'Front Squat', date: 'May 16, 2020', date1: 'May 16', sets: 5, reps: 9, weight: 210, cal: 630, duration: 10 }
];

export default class ProfileProgress extends React.Component {
    state = {
        activeItem: -1,
    }

    componentDidMount () {

    }

    onPressDot = (index) => {
        this.setState({activeItem: index});
    }

    render() {
        const items = [
            { id: 'workoutlog', text: 'Workout Log', scene: () => { return <ProfileProgressTab1 data={data} activeItem={this.state.activeItem} key='workoutlog'/> } },
            { id: 'featuredworkout', text: 'Featured Workouts', scene: () => { return <ProfileProgressTab2 key='featuredworkout'/> } },
        ];

        return (
            <View style={[CommonStyle.pt_10, CommonStyle.fullsize]}>
                <View style={{width: '30%'}}>
                    <OlympusPicker items={[
                        {label: 'Front Squat', value: 'front_squat'}
                        ]} defaultValue='front_squat'></OlympusPicker>
                </View>
                <View style={styles.chart_container}>
                    <View style={styles.progress_chart}>
                    <OlympusProgressChart data={data} onPressDot={this.onPressDot} height={150}/>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <OlympusTabView activeTab='workoutlog' tabItems={items} style={{marginTop: 8, width: 170}} tabsStyle={{justifyContent: 'space-around'}}></OlympusTabView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chart_container: {
        width: '100%',
        height: 150,
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#1a1a1a',
    },

    progress_chart: {
        width: '100%',
        height: '100%',
        borderColor: '#628529',
        borderWidth: 2,
        borderRadius: 25,
    }
});