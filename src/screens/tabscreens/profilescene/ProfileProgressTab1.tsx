import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OlympusLogItem from '../../../components/OlympusLogItem';
import CommonStyle from '../../../styles/CommonStyle';

export default class ProfileProgressTab1 extends React.Component {
    componentDidMount () {

    }

    render() {
        return (
            <View style={CommonStyle.fullsize}>
                <ScrollView style={CommonStyle.flexsize}>
                    { this.props.data.map((item) => {
                        return (
                            <OlympusLogItem key={item.id} data={item} activeItem={this.props.activeItem == -1 ? '' : this.props.data[this.props.activeItem].id}></OlympusLogItem>
                        )
                    })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});