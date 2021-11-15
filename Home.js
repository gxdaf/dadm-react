import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Touchable, ScrollView, Button } from 'react-native';
import styles from './styles';

export default function Home({navigation}){
    return(
        <View>
        <View style={styles.sobre}>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}><Image source={require('./assets/info.png')} style={{width:25, height:20}}/></TouchableOpacity>
        </View>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titulo}>
                        AP2
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.item}>
                        <Text>
                            Home
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}