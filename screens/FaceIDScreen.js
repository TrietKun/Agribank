import { View, Text, StyleSheet,Image , TouchableOpacity, Switch} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
export default  FaceIDScreen;

function FaceIDScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={styles.container}>
           <View style={styles.wrapper}>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,fontWeight:'bold'}}>Đặng nhập bằng Face ID</Text>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,color:'gray',width:300}}>Quý khách đăng nhập bằng Face ID trong vòng 30 ngày hoặc 30 lần sau khi kích hoạt</Text>
                <Switch
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
               style={{position:'absolute', marginTop:30,marginLeft:330}}
               />
               <Text style={{margin:5,color:'gray', borderBottomWidth : 1,
      width:380}}></Text>
               <Text style={{marginTop:10,marginLeft:10,fontSize:14,fontWeight:'bold'}}>Xác thực bằng Face ID</Text>
                <Text style={{marginTop:5,marginLeft:10,fontSize:14,color:'gray',width:300}}>Sử dụng Face ID để xác thực giao dịch</Text>
                <Switch style={{position:'absolute', marginTop:85,marginLeft:330}}
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isEnabled1 ? 'white' : 'white'}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                />
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
        height:140,
        borderRadius:10,

    }

})