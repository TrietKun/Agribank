import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity,Image} from 'react-native';
export default NoficationComponent;

function NoficationComponent(props) {
    const {option, onPress} = props;
    return (
        <View  style={{width:'100%',alignItems:'center',height:170 , marginTop:15}}>
                <Text style={{fontSize:14, fontWeight:'bold',backgroundColor:'gray',borderRadius:20,width:'30%',textAlign:'center'}}>{option.date}</Text>
                <View style={{backgroundColor:'white', width:'90%', marginTop:10,borderRadius:5}}>
                    <Text style={{fontSize:12, marginLeft:5, marginTop:5}}>{option.time}</Text>
                    <Text style={{fontSize:16, marginLeft:15, marginTop:10}}>Tài khoản: {option.user}</Text>
                    <Text style={{fontSize:16, marginLeft:15}}>Số tiền giao dịch: {option.tranPrice}</Text>
                    <Text style={{fontSize:16, marginLeft:15}}>Số dư cuối: {option.lastPrice}</Text>
                    <Text style={{fontSize:16, marginLeft:15, marginEnd:15}}>Nội dung: {option.content}</Text>
                </View>
        </View>
    )
}