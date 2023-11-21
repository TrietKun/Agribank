import { View, Text, StyleSheet,Image , TouchableOpacity, Switch} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
export default  SoftOTPScreen;

function SoftOTPScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
           <View style={styles.wrapper}>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,fontWeight:'bold'}}>Xác giao dịch thực bằng Soft OTP</Text>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,color:'gray',width:300}}>Bảo mật và thuận tiện hơn khi xác thực giao dịch qua Soft OTP</Text>
                <Text style={{margin:5,color:'gray', borderBottomWidth : 1,
      borderStyle : 'dashed',width:380}}></Text>
                <Ionicons name='stop-circle' size={24} style={{position:'absolute', marginTop:85, marginLeft:10,color:'red'}}></Ionicons>
                <Text style={{marginTop:10,marginLeft:35,fontSize:16,}}>Lưu ý</Text>
                <Switch
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
               style={{position:'absolute', marginTop:30,marginLeft:330}}
               />
               <Text style={{marginTop:10,marginLeft:10,fontSize:14,}}>Để đảm bảo an toàn, ứng dụng chỉ cho phép sử dụng chức năng Soft OTP khi quý khách đã thực hiện 2 giao dịch tài chính thành công bằng SMS OTP sau khi kích hoạt ứng dụng.</Text>
                <Text style={{marginLeft:10,fontSize:14,color:'orange'}}>Quý khách tuyệt đối không gửi OTP và mật khẩu ứng dụng cho bất kỳ ai.</Text>
           </View>
           <View style={{borderRadius:10,backgroundColor:'#fff',margin:10,width:380, height:40, flexDirection:'row',justifyContent:'center'}}>
                <Text style={{marginTop:10,marginLeft:-280,fontSize:16,fontWeight:'bold',color:'orange'}}>Đổi PIN</Text>
                <Ionicons name='chevron-forward-outline' size={24} style={{color:'orange',position:'absolute', marginTop:10,marginLeft:330}}></Ionicons>
           </View>
           <View style={{borderRadius:10,backgroundColor:'#fff',margin:10,width:380, height:100, }}>
                <View style={{width:380, height:40, flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{marginTop:10,marginLeft:-270,fontSize:16,fontWeight:'bold', color:'orange'}}>Quên PIN</Text>
                        <Ionicons name='chevron-forward-outline' size={24} style={{color:'orange',position:'absolute', marginTop:10,marginLeft:330}}></Ionicons>
                </View>
                <Text style={{marginLeft:10,fontSize:14,}}>Quý khách sẽ được yêu cầu kích hoạt lại Soft OTP trong trường hợp sử dụng tính năng quên PIN</Text>
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