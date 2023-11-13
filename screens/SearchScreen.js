import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import React from 'react'

export default function SearchScreen({navigation}) {
  return (
   <SafeAreaView>
     <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.searchIcon}>
                    <Image style={styles.icon} source={require('../assets/icons8-search-48.png')}></Image>
                </View>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={()=>{navigation.navigate('Trang chủ')}}>
                <Text>Đóng</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.title}>
            <Text style={{fontWeight : 'bold'}}>Chức năng nổi bật</Text>
        </View>
        <View style={styles.tipContainer}>
            <View style={styles.tip}><Text>Chuyển khoản</Text></View>
            <View style={styles.tip}><Text>Thanh toán hóa đơn</Text></View>
            <View style={styles.tip}><Text>Nhận tin biến động số dư</Text></View>
            <View style={styles.tip}><Text>Cài đặt Soft OTP</Text></View>
        </View>
        <View style={styles.note}>
        <Text>Lưu ý : Quý khách có thể tìm kiếm chức năng , dịch vụ , 
            danh bạ thụ hưởng , mẫu thanh toán hóa đơn ...</Text>
        </View>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        marginTop : 30,
    },
    searchContainer : {
        width : '100%',
        height : 50,
        backgroundColor : 'white',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        borderBottomWidth : 1,
        borderColor : '#eff4f7',
    },
    inputContainer : {
        width : '70%',
        height : 30, 
        backgroundColor : '#eff4f7',
        flexDirection : 'row',
        justifyContent : 'space-around',
        borderRadius : 10

    },
    textInput : {
        width : '85%',
        height : 30,
        borderRadius : 10,
        paddingLeft : 10,
    },
    closeButton : {
        width : '20%',
        height : 30,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        color : '#e69c60',
    },
    searchIcon : {
        width : 30,
        height : 30,
     },
    tipContainer : {
        width : '100%',
        height : 'fit-content',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
       
    },
    tip : {
        width : 'fit-content',
        height : 'fit-content',
        backgroundColor : '#eff4f7', 
        padding : 10,
        borderRadius : 20,
        margin : 5,
    },
    note : {
        width : '95%',
        height : 'fit-content',
        alignSelf : 'center',
        marginTop : 10,
    },
    title : {
        width : '95%',
        height : 'fit-content',
        alignSelf : 'center',
        margin : 5,
    }, 
    icon : {
        width : 30,
        height : 30,
    }
})