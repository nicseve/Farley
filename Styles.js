import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'stretch',
        backgroundColor: '#212121',
        justifyContent:'flex-start'
    },
    buttontext:{
        fontSize:16,
        fontWeight:'bold',
        color:'#212121'
    },
    button:{
        flex:1,
        borderRadius:10,
        flexDirection:'row',
        marginTop:530,
        height:75,
        // width:200,
        color: '#ede5bc',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ede5bc',
        borderColor: '#212121',
        borderWidth:.2
    },
    mapcontainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});