import { View, Text ,StyleSheet,Image,TouchableOpacity,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import {useRoute} from '@react-navigation/native'

export default function InfScreen({navigation}) {

const route = useRoute();
const data = route.params;
console.log(data.data.tien);
const tien = data.data.tien.toLocaleString('vi-VN');
  return (
   <SafeAreaView style={{marginTop : 30}}>
     <View style={styles.container}>
      <View style={styles.nav}>
            <Text style={{paddingLeft : 100}}>THÔNG TIN TÀI KHOẢN</Text>
            <TouchableOpacity style={styles.iconLeftArrow} onPress={()=>{navigation.navigate('Trang chủ')}}>
                <Image style={styles.iconLeftArrow} source={require('../assets/icons8-left-50.png')}></Image>
            </TouchableOpacity>
      </View>
      <View style={styles.balanceTop}>
        <Image style={styles.iconCredit} source={require('../assets/credit.png')}></Image>
          <Text>Tài khoản thanh toán</Text>
      </View>
      <View style={styles.balanceBottom}>
            <View style={styles.accountNumberContainer}>
                <Text style={{color: '#de7508', fontSize : 15, marginLeft : 30}}>
                    4494935353 
                </Text>
                <TouchableOpacity style={styles.iconCopy}>
                        <Image style={styles.iconCopy} source={require('../assets/icons8-copy-64.png')}></Image>
                    </TouchableOpacity>
            </View>
            <View style={styles.accountNumberContainer}>
                <Text style={{fontSize : 15}}>
                    Số dư : {tien} VND
                </Text>
                <TouchableOpacity style={styles.iconQr}>
                    <Image style={styles.iconQr} source={require('../assets/icons8-qr-code-24.png')}></Image>
                </TouchableOpacity>
            </View>  
      </View>
      <View style={styles.savingContainer}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity style={styles.piggy}>
                        <Image style={styles.piggy} source={require('../assets/icons8-piggy-64.png')}></Image>
                    </TouchableOpacity>
                    <Text>Tài khoản tiết kiệm</Text>                
                </View>
                <TouchableOpacity style={styles.viewDetail}>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>
            </View>
    </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor : '#f3f3f3'
    },
    nav: {
        backgroundColor: '#de7508',
        width: '100%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily : 'sans-serif',
    },
    iconLeftArrow: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
    balanceTop : {
        width : '95%',
        height : 50,
        marginTop : 15,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
        borderBottomWidth : 1,
        borderStyle : 'dashed',
        paddingLeft : 50,
        justifyContent : 'center',
        fontSize : 15,
        fontFamily : 'sans-serif',
        backgroundColor : '#fff',
    },
    iconCredit : {
        width : 40,
        height : 40,
        position : 'absolute',
        left : 10,
    },
    balanceBottom : {
        width : '95%',
        height : 90,
        borderBottomLeftRadius : 15,
        borderBottomRightRadius : 15,
        borderTopWidth : 1,
        borderStyle : 'dashed',
        justifyContent : 'center',
        fontSize : 15,
        fontFamily : 'sans-serif',
        backgroundColor : '#fff',
        alignItems : 'center',
    },
    accountNumber : {
        fontSize : 15,
        fontFamily : 'sans-serif',
        color : '#de7508',
    },
    iconCopy : {
        width : 20,
        height : 20,
        position : 'absolute',
    },
    iconQr : {
        width : 20,
        height : 20,
        position : 'absolute',
        right : 10,
    },
    accountNumberContainer : {
        width : '95%',
        height : 30,
        justifyContent : 'center',
        paddingLeft : 20,
    },
    balance : {
        fontSize : 15,
        fontFamily : 'sans-serif',
        color : '#de7508',
    },
     qrCodeIcon : {
        width : 40,
        height : 40,
        position : 'absolute',
        right : 10,
     },
     savingContainer : {
        width : '95%',
        height : 30,
        justifyContent : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : 'white',
        marginTop : 10,
        borderRadius : 5,
     },
     titleContainer : {
        width : '50%',
        height : 30,
        justifyContent : 'center',
        flexDirection : 'row',
        alignItems : 'center',
     },
     piggy : {
        width : 20,
        height : 20,
        marginRight : 10,
     },
     viewDetail : {
        width : '50%',
        height : 30,
        justifyContent : 'center',
        alignItems : 'flex-end',
        paddingRight : 10,
        textDecorationLine : 'underline',
        fontStyle : 'italic',
        color : '#de7508',
     },
     })