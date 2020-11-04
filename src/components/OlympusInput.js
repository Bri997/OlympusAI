import {
  StyleSheet,
  TextInput
} from 'react-native';
import React from 'react'

export default class OlympusInput extends React.Component
{
    constructor (props) {
        super(props)
        this.state = {
            height: 0
        };
    }

    render() {
        return (
            <TextInput style={[this.props.style, styles.olympusInput]}></TextInput>
        );
    }
}

const styles = StyleSheet.create({
    olympusInput: {
        borderRadius: 3,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        padding: 6,
    }
});