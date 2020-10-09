import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '10px',
        paddingTop: Constants.statusBarHeight + 10,
        margin: 0,
        padding: 0
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
    },

    podcastSubscribe: {
        flexDirection: 'row',
        marginTop: '15px',
        marginBottom: '15px',
        justifyContent:'center'
    },

    podcast: {
        width: '60px',
        height: '60px',
        backgroundColor: '#5f6368',
        borderRadius: '8px',
        marginRight: '5px'
        
    },

    rowDescription:{
        width: '105%',
        height: 'auto',
        marginLeft: '-10px',
        borderBottomWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#A9A9A9',
    },

    borderTop: {
        borderTopWidth: '1px',
    },

    podcastProfile: {
        flexDirection: 'row',
        marginBottom: '10px',
        marginLeft: '20px',
        marginTop: '10px'
    },

    logoPodcast: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        backgroundColor: '#5f6368'
    },

    infoPodcast: {
        marginLeft: '5px'
    },

    title: {
        fontSize: '0.8em',
        fontWeight: 'bold'
    },

    time:{
        fontSize: '0.5',
        fontWeight: '400',
        color: '#5f6368'
    },

    titlePodcast:{
        width: '90%',
        fontSize: '1em',
        fontWeight: 'bold',
        marginLeft: '20px'
    },

    descriptionPodcast:{
        width: '90%',
        fontSize: '0.8em',
        marginLeft: '20px'
    },

    rowButtons: {
        flexDirection: 'row',
        marginTop: '10px',
        marginLeft: '20px',
        marginBottom: '10px',
        alignItems: 'center',
    },

    firstbutton: {
        flexDirection: 'row',
        width: '90px',
        borderRadius: '20px',
        padding: '3px',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#A9A9A9',
        backgroundColor: 'transparent'
    },

    minutes: {
        marginLeft: '5px',
        fontSize: '0.8em',
        fontWeight: '700'
    }

})