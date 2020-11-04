import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export default class OlympusCheckButton extends React.Component
{
    state = {
        checked: false
    }

    constructor (props) {
        super(props)
    }

    onClick = () => {
        this.props.onPress();
        this.setState({ checked : !this.state.checked });
    }

    render() {
        return (
            <View style={{marginRight: 10}}>
                <TouchableHighlight onPress={this.onClick}>
                    <View style={[this.props.style, this.state.checked ? styles.button_selected : styles.button_normal]}>
                        <Text style={this.state.checked ? styles.text_selected : styles.text_normal}> {this.props.text} </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button_normal: {
        backgroundColor: '#606060',
        paddingVertical: 8,
        borderRadius: 20
    },

    button_selected: {
        backgroundColor: '#bbfd4f',
        paddingVertical: 8,
        borderRadius: 20
    },

    text_normal: {
        color: '#f0f0f0',
        fontSize: RFValue(12, 580),
        fontWeight: 'bold',
        textAlign: 'center',
    },

    text_selected: {
        color: '#1b250b',
        fontSize: RFValue(12, 580),
        fontWeight: 'bold',
        textAlign: 'center',
    }
})