import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import OlympusTabView from '../../../components/OlympusTabView';
import OlympusTabHeader from '../../../components/OlympusTabHeader';
import ProfileProgress from './ProfileProgress';
import CommonStyle from '../../../styles/CommonStyle';

const avatar = require('../../../../assets/images/default.png');

export default class ProfileScene extends React.Component {
    onPressHeader = () => {
        this.props.navigation.navigate('GymMap');
    }

    render() {
        const { navigate } = this.props.navigation;
        const items = [
            { id: 'progress', text: 'Progress', scene: () => { return <ProfileProgress key='progress'/> } },
            { id: 'activity', text: 'Activity', scene: () => { return <ProfileProgress key='activity'/> } },
        ];
        return (
            <View style={[CommonStyle.mainView]}>
                <OlympusTabHeader title='Profile' onPress={this.onPressHeader}></OlympusTabHeader>
                <View style={styles.profile_header}>
                    <View style={[{flexDirection: 'column', flex: 1}, styles.follower_text]}>
                        <Text style={CommonStyle.textBold_Normal}>6,314</Text>
                        <Text style={CommonStyle.textBold_Normal}>Followers</Text>
                    </View>
                    <View style={[{flexDirection: 'column', flex: 1}, styles.avatar_text]}>
                        <Image source={avatar} style={CommonStyle.avatar_normal}></Image>
                        <Text style={CommonStyle.textBold_Normal}>Ben Carper</Text>
                        <Text style={CommonStyle.textNormal}>Utah</Text>
                    </View>
                    <View style={[{flexDirection: 'column', flex: 1}, styles.following_text]}>
                        <Text style={CommonStyle.textBold_Normal}>1,210</Text>
                        <Text style={CommonStyle.textBold_Normal}>Following</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <OlympusTabView activeTab='progress' tabItems={items} style={{marginTop: 8, width: '20%'}} tabsStyle={{justifyContent: 'space-around'}}></OlympusTabView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  profile_header: {
    flexDirection: 'row', 
    width: '100%', 
    height: 100, 
    borderBottomWidth: 2, 
    borderBottomColor: '#1a1a1a',
  },

  follower_text: {
    alignItems: 'center',
    paddingTop: 20
  },

  following_text: {
    alignItems: 'center',
    paddingTop: 20
  },

  avatar_text: {
    alignItems: 'center'
  }
});