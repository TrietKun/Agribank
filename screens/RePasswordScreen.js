import { View, Text, StyleSheet,Image , TouchableOpacity, Switch} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
export default  RePasswordScreen;

function RePasswordScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
           <View style={styles.wrapper}>
                <Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'bold'}}>Cài đặt cấp lại mật khẩu</Text>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,color:'gray',width:300}}>Khi thực hiện xác thực trắc sinh học và cài đặt chức nâng cấp lại mật khẩu thành công, Ứng dụng cho phép khách hàng lấy lại mật khẩu trên thiết bị đã đăng nhập</Text>
                <Switch
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
               style={{position:'absolute', marginTop:50,marginLeft:330}}
               />
            </View>
            <View style={{borderRadius:10,backgroundColor:'#fff',margin:10,width:380, height:100}}>
                    <Text style={{marginTop:15,marginLeft:10,fontSize:16,fontWeight:'bold'}}>Đổi mật khẩu</Text>
                    <Ionicons name='chevron-forward-outline' size={24} style={{color:'orange',position:'absolute', marginTop:15,marginLeft:330}}/>
                    <Text style={{marginTop:5,marginLeft:10,fontSize:14,color:'gray',width:300}}>Để đảm bảo an toaanf bảo mật - sau thời gian sử dụng nhât định, quý khách vui lòng thực hiện đổi mật khẩu</Text>
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
        height:120,
        borderRadius:10,

    }

})