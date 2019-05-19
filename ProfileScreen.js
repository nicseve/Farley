
import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from './Styles.js'

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
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
                                  onPress={() => navigate('Login')}
                >
                    <Text style = {styles.buttontext}>
                        HOME
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
