import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import styles from './styles';

export default function Home({navigation}){
    return(
        <View>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titulo}>
                        GentleNutrition
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