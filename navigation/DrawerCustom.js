// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,Image} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


function CustomDrawerContent({navigation}) {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
      }

      const closeDrawer = () => {
        navigation.closeDrawer();
      }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avataContainer}>
            <Image style={styles.imgAvata} source={require('../assets/iconAvata.png')}></Image>
        </View>
        <TouchableOpacity style={styles.LoginButton}
          onPress={() => navigateToScreen('Đăng nhập')}
        >
            <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
        <Ionicons name="code-working-outline" size={32} color="#e0721b"/>
        <Text style={{paddingLeft : 10}}>Cài đặt Soft OTP</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="chatbox-ellipses-outline" size={32} color="#e0721b"></Ionicons>
        <Text style={{paddingLeft : 10}}>Nhận tin biến động số dư</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="finger-print-outline" size={32} color="#e0721b"></Ionicons>
        <Text style={{paddingLeft : 10}}>Cài đặt vân tay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="calculator-outline" size={32} color="#e0721b"></Ionicons>
        <Text style={{paddingLeft : 10}}>Cài đặt hạn mức chuyển khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="language" size={32} color="#e0721b" />
        <Text style={{paddingLeft : 10}}>Cài đặt ngôn ngữ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="lock-open-outline" size={32} color="#e0721b"></Ionicons>        
        <Text style={{paddingLeft : 10}}>Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="key-outline" size={32} color="#e0721b"></Ionicons>
        <Text style={{paddingLeft : 10}}>Cấp/Đổi mã PIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="card-outline" size={32} color="#e0721b"></Ionicons>
        <Text style={{paddingLeft : 10}}>Quản lý nickname</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="book-outline" size={32} color="#e0721b"/>
        <Text style={{paddingLeft : 10}}>Quản lý danh bạ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDrawer} onPress={() => navigateToScreen('Home')}>
      <Ionicons name="trash-outline" size={32} color="#e0721b"/>
        <Text style={{paddingLeft : 10}}>Đóng tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container : {
        width : '90%',
        height : '90%',
        borderRadius : 30,
        backgroundColor : 'white',
        alignSelf : 'center',
        marginTop : 50,
        alignItems : 'center',
    },
    headerContainer : {
        width : '100%',
        height : '20%',
        backgroundColor : '#e0721b',
        justifyContent : 'center',
        alignItems : 'center',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
    },
    avataContainer : {
        width : 70,
        height : 70,
        borderRadius : 50,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
    },
    imgAvata : {
        width : 60,
        height : 60,
        bottom : 3.5,
    },
    LoginButton : {
        width : 150,
        height : 30,
        backgroundColor : '#fff',
        marginTop : 15,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#dce4e4',
        borderRadius : 15,
    },
    itemDrawer : {
        width : '100%',
        height : 45,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 10,
        backgroundColor : '#fff',
        paddingLeft : 10,
    },
    imgItem : {
        width : 30,
        height : 30,
        marginRight : 10,
    },
});