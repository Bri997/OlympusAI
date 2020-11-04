import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';
import OlympusCheckButton from '../../../components/OlympusCheckButton';

const img_body = require('../../../../assets/images/body.png')
const img_body1 = require('../../../../assets/images/body_1.png')
const img_body2 = require('../../../../assets/images/body_2.png')

export default class BodyProgress extends React.Component {
    state = {
        is_arms         : false,
        is_chest        : false,
        is_abs          : false,
        is_shoulders    : false,
        is_back         : false,
        is_glutes       : false,
        is_legs         : false,
    }

    constructor (props) {
        super(props)    
    }

    render() {
        return (
            <View>
                <View style={styles.button_row}>
                    <OlympusCheckButton text="Arms" style={{width: 70}} onPress={() => this.setState({ is_arms: !this.state.is_arms })}></OlympusCheckButton>
                    <OlympusCheckButton text="Chest" style={{width: 70}} onPress={() => this.setState({ is_chest: !this.state.is_chest })}></OlympusCheckButton>
                    <OlympusCheckButton text="Abs" style={{width: 70}} onPress={() => this.setState({ is_abs: !this.state.is_abs })}></OlympusCheckButton>
                    <OlympusCheckButton text="Shoulders" style={{width: 100}} onPress={() => this.setState({ is_shoulders: !this.state.is_shoulders })}></OlympusCheckButton>
                </View>
                <View style={styles.button_row}>
                    <OlympusCheckButton text="Back" style={{width: 70}} onPress={() => this.setState({ is_back: !this.state.is_back })}></OlympusCheckButton>
                    <OlympusCheckButton text="Glutes" style={{width: 70}} onPress={() => this.setState({ is_glutes: !this.state.is_glutes })}></OlympusCheckButton>
                    <OlympusCheckButton text="Legs" style={{width: 70}} onPress={() => this.setState({ is_legs: !this.state.is_legs })}></OlympusCheckButton>
                </View>
                <View style={styles.body_container}>
                    <View style={styles.body_layout}>
                        <Image source={img_body} style={styles.body_image}></Image>
                        <Image source={img_body1} style={this.state.is_shoulders ? styles.body_1 : styles.display_none}></Image>
                        <Image source={img_body2} style={this.state.is_arms ? styles.body_2 : styles.display_none}></Image>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button_row: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
    },

    body_container: {
        width: '100%',
        marginTop: 15,
        alignItems: 'center',
    },

    body_layout: {
        width: 200,
        backgroundColor: '#606060',
        alignItems: 'center',
        borderRadius: 40
    },

    body_image: {
        backgroundColor: '#606060',
        borderRadius: 15,
    },

    display_none: {
        display: 'none'
    },

    body_1: {
        position: 'absolute',
        left: 98,
        top: 49,
    },

    body_2: {
        position: 'absolute',
        left: 115,
        top: 61,
    }
});