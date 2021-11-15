import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';



export default function Sobre({item, navigation}){


    return(
        <View>
        <TouchableOpacity style={{justifyContent: 'flex-end', alignSelf: 'flex-start', marginTop: 15}} onPress={() => navigation.goBack()}>
        <Image source={require('./assets/back.png')} style={{margin: 10, width:50, height:50}}/>
        </TouchableOpacity>
        <View style={styles.header}>
            <Text style={styles.titulo}>Sobre</Text>
            <FlatList data = {[{id:'1', membro: 'Gabriela Xavier Fontes', matricula:'5306709'},
    {id:'2', membro: 'Leonardo Goulart Rodrigues', matricula: '5306685'},
    {id:'3', membro: 'Edyr Oliveira Souza Junior', matricula: '5306725'},
    {id:'4', membro: 'Nathália Geraldo Gurjão', matricula: '545570'}]} renderItem={({item}) => <View style={styles.item}><Text style={{color: '#fff', textAlign: 'center'}}>{item.membro} - {item.matricula}</Text></View>}/>
        </View>
        </View>
    )
}