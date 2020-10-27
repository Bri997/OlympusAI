import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import OlympusHeader from '../../components/OlympusHeader';
import OlympusTabView from '../../components/OlympusTabView';
import RankingCommunity from './rankingscene/RankingCommunity';
import RankingFriends from './rankingscene/RankingFriends';
import CommonStyle from '../../styles/CommonStyle';

export default class RankingTabScreen extends React.Component {
  render() {
    const items = [
      { id: 'community', text: 'Community', scene: () => { return <RankingCommunity key='community'/> } },
      { id: 'friends', text: 'Friends', scene: () => { return <RankingFriends key='friends'/> } },
    ];
    const { navigate } = this.props.navigation;
    return (
      <View style={CommonStyle.mainView}>
        <OlympusHeader title='Ranking'></OlympusHeader>
        <View style={CommonStyle.flexsize}>
          <OlympusTabView activeTab='community' tabItems={items} style={{marginTop: 8, width: 100}} tabsStyle={{justifyContent: 'space-around'}}></OlympusTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});