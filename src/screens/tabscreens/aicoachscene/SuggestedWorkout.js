import React from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Platform
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

import CommonStyle from '../../../styles/CommonStyle';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from '/Users/edouardovitale/Documents/GitHub/OlympusAI/graphql/subscriptions';
import * as queries from '/Users/edouardovitale/Documents/GitHub/OlympusAI/graphql/queries';
import * as mutations from '/Users/edouardovitale/Documents/GitHub/OlympusAI/graphql/mutations';
import awsconfig from '/Users/edouardovitale/Documents/GitHub/OlympusAI/aws-exports';
Amplify.configure(awsconfig);
var equipmentData = 2

const buttons = [
    { id: 'id00', title: 'CURLS', subtitle: '20 MINUTES'},
    { id: 'id01', title: 'STRICT PRESS', subtitle: '15 MINUTES'}
]

export default class SuggestedWorkout extends React.Component {
    state = {
        checkedId   : '',

        nfc_log     : '',
        nfc_text    : 'Hi, NFC!',
    }

    handleCheck =  (checkedId) => {
        this.setState({checkedId})
    }

    constructor (props) {
        super(props)    
    }

    componentDidMount() {
        NfcManager.start();
    }

    componentWillUnmount() {
        this.cleanUp();
    }

    cleanUp = () => {
        NfcManager.cancelTechnologyRequest().catch(() => 0);
    }

    nfc_read_data = async () => {
        
        try {
            let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
            let resp = await NfcManager.requestTechnology(tech, {
                alertMessage: 'Ready for magic',
            });

            let cmd = Platform.OS === 'ios' ? NfcManager.sendMifareCommandIOS : NfcManager.transceive;

            resp = await cmd([0x3A, 4, 4]);
            let payloadLength = parseInt(resp.toString().split(',')[1]);
            let payloadPages = Math.ceil(payloadLength / 4);
            let startPage = 5;
            let endPage = startPage + payloadPages - 1;

            resp = await cmd([0x3A, startPage, endPage]);
            let bytes = resp.toString().split(',');
            let text = '';

            for ( let i = 0; i < bytes.length; i++ ) {
                if ( i < 5 ) {
                    continue;
                }

                if ( parseInt(bytes[i]) === 254 ) {
                    break;
                }

                text = text + String.fromCharCode(parseInt(bytes[i]));
            }

            this.setState({
                nfc_text: text
            });
            console.log(text);

        } catch(err) {
            this.setState({
                nfc_log: err.toString()
            });
            console.log(err.toString());
            this.cleanUp();
        }
        
    }

    properties = async (data) => { 

        console.log("sub data", data.onEquipmentNotification)
        
        if (data.onEquipmentNotification.action == 'Add-Equipment') {

            const { data: { equipmentQuery} } = await API.graphql(
                graphqlOperation(queries.equipmentQuery , { EquipmentID: '123456789' })
            ) 
            console.log(`Query ID2: ${equipmentQuery.id}`)
           
                    
            const subscription = API.graphql(
                graphqlOperation(subscriptions.onEquipmentConfirmation, { id: equipmentQuery.id})
            ).subscribe({
                error: err => console.log("error caught", err.error),
                next: data => {
                    console.log(data.value.data)
                    subscription.unsubscribe();
                },
                }
            );


        }
    } 


    api_test = async () => {



        const { data: { stationConfigurations} } = await API.graphql(
            graphqlOperation(queries.stationConfigurations , { StationID: { user: "eddy",  Station: "123456"} })
        ) 
        console.log(`Query ID: ${stationConfigurations.status}`);
        
        // 2. Subscribe to search result
        console.log("subscribing")

        
                const subscription = API.graphql(
                    graphqlOperation(subscriptions.onEquipmentNotification, { id: stationConfigurations.id})
                ).subscribe({
                    error: err => console.log("error caught", err.error),
                    next: data => {
                        
                        this.properties(data.value.data)
                        subscription.unsubscribe();
                    },
                    }
                );
    
                };
    
       
        
    

    render() {
        return (
            <View style={{flexDirection: 'column', width: '100%', height: '100%'}}>
                <View style={styles.button_container}>
                    {   buttons.map(button => {
                            return (
                                <TouchableHighlight key={button.id} onPress={() => this.handleCheck(button.id)} style={{marginHorizontal: 15}} >
                                    <View style={ this.state.checkedId == button.id ? styles.button_selected : styles.button_normal}>
                                        <Text style={this.state.checkedId == button.id ? styles.title_selected : styles.title_normal}> {button.title} </Text>
                                        <Text style={this.state.checkedId == button.id ? styles.subtitle_selected : styles.subtitle_normal }> {button.subtitle} </Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
                <View style={{marginVertical: 15, alignItems: 'center', flex: 1}}>
                    <TouchableOpacity onPress={this.nfc_read_data}>
                        <View style={styles.button_start}>
                            <Text style={CommonStyle.textBold_Normal}>Start Workout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical: 15, alignItems: 'center', flex: 1}}>
                    <TouchableOpacity onPress={this.api_test}>
                        <View style={styles.button_start}>
                            <Text style={CommonStyle.textBold_Normal}>API</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button_container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },

    button_normal: {
        width: 160,
        height: 100,
        backgroundColor: '#606060',
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: '15%'
    },

    button_selected: {
        width: 160,
        height: 100,
        backgroundColor: '#bbfd4f',
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: '15%'
    },

    title_normal: {
        fontSize: RFValue(14, 580),
        fontWeight: 'bold',
        color: '#fbfbfb',
    },

    title_selected: {
        fontSize: RFValue(14, 580),
        fontWeight: 'bold',
        color: '#23300f',
    },

    subtitle_normal: {
        fontSize: RFValue(13, 580),
        color: '#fbfbfb',
    },

    subtitle_selected: {
        fontSize: RFValue(13, 580),
        color: '#23300f',
    },

    button_start: {
        width: 140,
        height: 30,
        borderColor: '#bbfd4f',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 3
    }
});