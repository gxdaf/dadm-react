import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';

export default function Sobre({navigation}){
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./assets/back.png')} style={{margin: 10, width:50, height:50}}/>
        </TouchableOpacity>
            <Text>Sobre</Text>
        </View>
    )
}