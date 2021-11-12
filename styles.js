import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        width: '90%',
        height: 150,
    },
    titulo: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 30
    },
    header:{
        marginTop: 50,
        marginHorizontal: 25,
    },
    body:{
        margin:25,
    }
})

export default styles;