import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CommonStyle from '../../../styles/CommonStyle';
import OlympusTabHeader from '../../../components/OlympusTabHeader';
import OlympusTabView from '../../../components/OlympusTabView';
import OlympusSubHeader from '../../../components/OlympusSubHeader';
import ActivityWeekly from './ActivityWeekly';

export default class ActivityScene extends React.Component {
    onPressHeader = () => {
        this.props.navigation.navigate('GymMap');
    }

    render() {
        const { navigate } = this.props.navigation;
        const items = [
            { id: 'weekly', text: 'Weekly', scene: () => { return <ActivityWeekly key='weekly'/> } },
            { id: 'monthly', text: 'Monthly', scene: () => { return <ActivityWeekly key='monthly'/> } },
            { id: 'yearly', text: 'Yearly', scene: () => { return <ActivityWeekly key='yearly'/> } }
        ];

        return (
            <View style={[CommonStyle.mainView]}>
                <OlympusTabHeader title="Activity" onPress={this.onPressHeader}></OlympusTabHeader>
                <OlympusSubHeader title="Progress"></OlympusSubHeader>
                <View style={CommonStyle.flexsize}>
                    <OlympusTabView activeTab='weekly' tabItems={items} style={{marginTop: 8, width: '20%'}} tabsStyle={{justifyContent: 'space-between'}}></OlympusTabView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});