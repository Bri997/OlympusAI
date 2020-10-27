import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default StyleSheet.create({
    mainView: {
        backgroundColor: '#000',
        paddingTop: 45,
        paddingLeft: 8,
        paddingRight: 8,
        width: '100%',
        height: '100%',
    },
    modalView: {
        backgroundColor: '#000',
        paddingTop: 45,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 45,
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        backgroundColor: '#000',
        padding: 10,
        width: '100%',
        height: '100%',
        borderColor: '#979797',
        borderWidth: 2,
        borderRadius: 5,
    },
    fullsize: {
        width: '100%',
        height: '100%',
    },
    flexsize: {
        flex: 1,
    },
    flex_row: {
        flexDirection: 'row',
    },
    flex_col: {
        flexDirection: 'column',
    },
    title: {
        fontSize: RFValue(20, 580),
        color: '#fff',
        position: 'absolute',
        left: '15%',
        top: '20%'
    },
    titleLg : {
        fontSize: RFValue(24, 580),
        color: '#fff',
    },
    labelWhite: {
        fontSize: RFValue(12, 580),
        color: '#fff',
        paddingTop: 8,
        paddingBottom: 8
    },
    fontSize_12: {
        fontSize: RFValue(12, 580),
    },
    tabLabel: {
        fontSize: RFValue(10, 580),
        fontWeight: 'bold'
    },
    textBold_Normal: {
        fontSize: RFValue(11, 580),
        fontWeight: 'bold',
        color: 'white'
    },
    textNormal: {
        fontSize: RFValue(11, 580),
        color: 'white'
    },
    textLarge_Bold: {
        fontSize: RFValue(13, 580),
        fontWeight: 'bold',
        color: 'white'
    },
    tabheaderLabel: {
        fontSize: RFValue(16, 580),
        fontWeight: 'bold',
        color: 'white'
    },
    headerLabel: {
        fontSize: RFValue(16, 580),
        fontWeight: 'bold',
        color: 'white'
    },
    subheaderLabel: {
        fontSize: RFValue(14, 580),
        color: 'white'
    },
    logitemLabel: {
        fontSize: RFValue(13, 580),
        color: '#7e7e7e',
        marginRight: 8
    },
    logitemText: {
        fontSize: RFValue(13, 580),
        fontWeight: 'bold',
        color: '#f2f2f2',
        marginRight: 4
    },
    avatar_normal: {
        width: 50,
        height: 50,
    },
    avatar_small: {
        width: 30,
        height: 30,
    },
    image_small: {
        width: 30,
        height: 30,
    },

    mt_10: {
        marginTop: 10,
    },

    mb_10: {
        marginBottom: 10,
    },

    mb_15: {
        marginBottom: 15,
    },

    mb_20: {
        marginBottom: 20,
    },

    mb_30: {
        marginBottom: 30,
    },

    pt_10: {
        paddingTop: 10,
    }
});