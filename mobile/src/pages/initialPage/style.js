import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '10px',
        paddingTop: Constants.statusBarHeight + 10,
    },

    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    profile: {
        backgroundColor: '#5f6368',
        width: '30px',
        height: '30px',
        borderRadius: '50%'
        
    },

    logo: {
        fontSize: '1em',
        fontWeight: 'bold',
        fontFamily:'"Sans-Serif Product Sans",Roboto,RobotoDraft,Arial,sans-serif'
    }
})