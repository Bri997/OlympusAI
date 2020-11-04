import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CommonStyle from '../../styles/CommonStyle';
import OlympusTabView from '../../components/OlympusTabView';
import Search from 'react-native-search-box';
import HomeScene from './homescene/HomeScene';
import { Auth } from 'aws-amplify'
import { API, graphqlOperation } from 'aws-amplify'
// import { createTodo } from '../../../graphql/mutations'
// import { listTodos } from '../../../graphql/queries'
import OlympusButton from '../../components/OlympusButton';
export default class HomeTabScreen extends React.Component {

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  logout = async () => {
    try {
      await Auth.signOut()
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }




  render() {
    const { navigate } = this.props.navigation;
    
    const items = [
      { id: 'all', text: 'All', scene: () => { return <HomeScene key='all' name='all'/> } },
      { id: 'top', text: 'Top', scene: () => { return <HomeScene key='top' name='top'/> } },
      { id: 'accounts', text: 'Accounts', scene: () => { return <HomeScene key='accounts' name='accounts'/> } },
      { id: 'tags', text: 'Tags', scene: () => { return <HomeScene key='tags' name='tags'/> } },
      { id: 'places', text: 'Places', scene: () => { return <HomeScene key='places' name='places'/> } }
    ];
    return (
      <View style={[CommonStyle.mainView]}>
        <OlympusButton text="Log Out" onPress={this.logout}></OlympusButton>
        <Search backgroundColor='#000'></Search>
        <View style={CommonStyle.flexsize}>
          <OlympusTabView activeTab='all' tabItems={items} style={{marginTop: 8, width: '20%'}} tabsStyle={{justifyContent: 'space-between'}}></OlympusTabView>
        </View>
      </View>
    );
  }
}

// Later on in your styles..
const styles = StyleSheet.create({
});