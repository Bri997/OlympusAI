import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import React from 'react'

export default class OlympusLink extends React.Component
{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={[this.props.style, styles.btnTextStyle]}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnTextStyle: {
        color: '#bbfd4f',
    }
});