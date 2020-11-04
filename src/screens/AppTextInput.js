import React, { useState }from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '../styles/CommonStyle';
import OlympusInput from '../components/OlympusInput';
import OlympusButton from '../components/OlympusButton';
import OlympusLink from '../components/OlympusLink';
import { withSSRContext , Auth , I18n } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';



 export default function AppTextInput({ leftIcon, ...otherProps }) {
   return(
     <View style={styles.container}>
     
     {leftIcon && (<Icon name={leftIcon} size={30} color="#900" />)}
     
     <TextInput
        style={styles.input}
        placeholderTextColor="#6e6869"
        {...otherProps}
      />
     
     </View>
     
       )
   
   }



   const styles = StyleSheet.create({

      container: {

        backgroundColor: '#f9f9f9',

        borderRadius: 25,

        flexDirection: 'row',

        padding: 15,

        marginVertical: 10

      },

      icon: {

        marginRight: 10

      },

      input: {

        width: '80%',

        fontSize: 18,

        color: '#101010'

      }

    });