import { View, Text, StyleSheet,Image , TouchableOpacity, Switch} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
export default  LimitedTranferScreen;

function LimitedTranferScreen() {
    
    return (
        <View style={styles.container}>
           <View style={styles.wrapper}>
                <Text style={{marginTop:15,marginLeft:10,fontSize:14,width:360, textAlign:'center'}}>Chức năng cho phép cài đặt hạn mức tối đa/ giao dịch và tổng hạn mức/ ngày, áp dụng cho giao dịch chuyển khoản nội bộ qua thẻ và tài khoản</Text>
                <Text style={{margin:5,color:'gray', borderBottomWidth : 1,borderStyle:'dashed'}}></Text>
                <Text style={{marginTop:10,marginLeft:10,fontSize:14}}>Hạn mức/ giao dịch</Text>
                <Text style={{marginTop:10,marginLeft:10,fontSize:14}}>2,500,000,000 VND</Text>
                <Ionicons name='pencil-outline' size={24} style={{color:'orange',position:'absolute', marginTop:115,marginLeft:330}}></Ionicons>
                <Text style={{margin:5,color:'gray', borderBottomWidth : 1}}></Text>
                <Text style={{marginTop:10,marginLeft:10,fontSize:14}}>Tổng hạn mức/ ngày</Text>
                <Text style={{marginTop:10,marginLeft:10,fontSize:14}}>5,000,000,000 VND</Text>
                <Ionicons name='pencil-outline' size={24} style={{color:'orange',position:'absolute', marginTop:185,marginLeft:330}}></Ionicons>
                <Text style={{margin:5,color:'gray', borderBottomWidth : 1}}></Text>

           </View>  
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dce4e4',
        alignItems : 'center',
    },
    wrapper:{
        margin:10,
        backgroundColor:'#fff',
        width:380,
        height:240,
        borderRadius:10,

    }

})