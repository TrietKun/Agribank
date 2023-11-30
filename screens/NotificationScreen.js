import { View, Text, StyleSheet,Image , TouchableOpacity, Switch} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TextInput } from 'react-native-gesture-handler';
export  default NotificationScreen;
import Noficationlistdata from '../data/NotificationData';
import NoficationComponent from '../components/NoficationComponent';
import { useNavigation } from '@react-navigation/native';
function NotificationScreen() { 
    return(
        <View style={{alignItems:'center', flex: 1, backgroundColor: '#dce4e4',}}>
            <View style={{alignItems:'center',backgroundColor:'orange',width:'100%',height: 30}}>
                <Text style={{fontSize:17, fontWeight:'bold',color:'white'}}>BIẾN ĐỘNG SỐ DƯ</Text>
            </View>
            <View style={{backgroundColor:'dce4e4',height:30,backgroundColor:'white'}}>
                    <Ionicons name='search-circle' size={24} style={{color:'gray',position:'absolute',marginLeft:10}}/>
                    <TextInput style={{borderBottomWidth:1, borderBottomColor:'gray', width:380, height:40,  marginLeft:35}} placeholder='Tìm kiếm'/>
            </View>
           <FlatList 
            data = {Noficationlistdata}
            renderItem={({item}) => <NoficationComponent option={item}/>}
            />
        </View>
    )
    
}