import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    item:{
        backgroundColor: '#800000',
        borderRadius: 15,
        margin: 10,
        justifyContent: 'center',
        width: '90%',
        height: 50,
    },
    titulo: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 30
    },
    header:{
        marginTop: 10,
        marginHorizontal: 25,
    },
    body:{
        margin:25,
    },
    sobre:{
        width: 30,
        height: 30,
        borderRadius: 30,
        marginTop: 30,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    }
})

export default styles;