import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';

export default function Pais3({navigation}){
    return(
        <View>
        <View style={styles.sobre}>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}><Image source={require('./assets/info.png')} style={{width:25, height:20}}/></TouchableOpacity>
        </View>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titulo}>
                        Pais3
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.item}>
                        <Text>
                            Pais3
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}