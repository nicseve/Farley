import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from './Styles.js'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Farley',
        headerStyle: {
            backgroundColor: '#ede5bc',
        },
        headerTintColor: '#212121',
        headerTitleStyle: {
            color:'#212121',
            fontWeight: 'bold',
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container}>

            <TouchableOpacity style={styles.button}
                onPress={() => navigate('Profile', {name: 'Jane'})}
            >
                <Text style = {styles.buttontext}>
                    PROFILE
                </Text>
            </TouchableOpacity>
            </View>
        );
    }
}
