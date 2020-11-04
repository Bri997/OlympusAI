import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import OlympusSubHeader from '../../../components/OlympusSubHeader';
import SuggestedWorkout from './SuggestedWorkout';
import BodyProgress from './BodyProgress';
import OlympusTabHeader from '../../../components/OlympusTabHeader';
import CommonStyle from '../../../styles/CommonStyle';

export default class AICaochScene extends React.Component {
    onPressHeader = () => {
        this.props.navigation.navigate('GymMap');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[CommonStyle.mainView]}>
                <OlympusTabHeader title='AI Coach' onPress={this.onPressHeader}></OlympusTabHeader>
                <ScrollView style={CommonStyle.flexsize}>
                    <OlympusSubHeader title="Body Progress"></OlympusSubHeader>
                        <View style={{width: '100%', height: 430}}>
                            <BodyProgress/>
                        </View>
                        <OlympusSubHeader title="Suggested Workouts"></OlympusSubHeader>
                        <View style={CommonStyle.flexsize}>
                            <SuggestedWorkout/>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});