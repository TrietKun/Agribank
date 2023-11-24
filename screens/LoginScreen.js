import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,   
    TextInput, 
    Image,
    StyleSheet,
} from 'react-native';
import Reducer, { setUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default function Login() {   
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);


    function login() {
        console.log('Login function called'); // Kiểm tra xem hàm login có được gọi không
        console.log('Data:', users.value); // Kiểm tra dữ liệu từ API
        const user = users.value.find(item => item.phone === phone && item.pass === password);
        if (user) {
            dispatch(setUser(user));
            navigation.push('Trang chủ');
          console.log('Login success');
        } else {
          console.log('User not found');
        }
      }
      
      
    return (
        <View style={styles.background}>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{marginTop : 30}}> 
                <View style={styles.container}>
                <TouchableOpacity style={{position : 'absolute', right : 0}} 
                    onPress={() => {navigation.navigate('Home')}}
                >
                    <Image style={{width : 50, height : 50}} source={require('../assets/icons8-x-64.png')}></Image>
                </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputRow}>
                            <TextInput 
                            onChangeText={(text) => {setPhone(text)}}
                            placeholder='Số điện thoại' style={styles.input} />
                        </View>
                        <View style={styles.inputRow}>
                            <View style={styles.passwordInput}>
                                <TextInput 
                                onChangeText={(text) => {setPassword(text)}}
                                placeholder='Mật khẩu' style={styles.passwordTextInput} secureTextEntry={true} />
                                <TouchableOpacity style={styles.showPasswordIcon}>
                                    <Image style={styles.icon} source={require("../assets/no-view.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.LoginContaier}>
                        <TouchableOpacity style={[styles.loginButton]}
                          onPress={() => {
                            console.log('Button pressed'); // Kiểm tra xem sự kiện onPress có được kích hoạt không
                            login(); // Gọi hàm login
                          }}
                        >
                            <Text style={styles.loginButtonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.iconImage} source={require('../assets/flame-118.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contactContainer}>
                        <TouchableOpacity style={styles.contactIcon}>
                            <Image style={styles.iconImage} source={require("../assets/icons8-question-50.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactIcon}>
                            <Image style={styles.iconImage} source={require("../assets/icons8-share-50.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactIcon}>
                            <Image style={styles.iconImage} source={require("../assets/icons8-telephone-50.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        opacity: 0.9,
        height: windowHeight,
        width: "100%"
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        width: 200,
        height: 30,
        marginTop: '10%'
    },
    logo: {
        opacity: 1,
        width: '100%',
        height: '100%'
    },
    inputContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 100,
        marginTop: 0.15 * windowHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight : '1%'
    },
    inputRow: {
        flexDirection: 'row',
        width: '80%',
        height: 30,
        marginTop: 10,
        alignItems: 'center',
    },
    inputLabel: {
        width: '30%',
        verticalAlign: 'center',
        marginLeft: 5,
        color: '#00FF33'
    },
    input: {
        height: '100%',
        width: '100%',
        borderBottomWidth: 2,
    },
    passwordInput: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderBottomWidth: 2,
        alignItems: 'center',
    },
    passwordTextInput: {
        flex: 1,
        height: '100%',
    },
    showPasswordIcon: {
        width: 30,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    LoginContaier: {
        width : 300,
        height: 60,
        flexDirection : 'row',
        marginTop: 40,
        display: 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    loginButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#de7508',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    iconButton: {
        width: 50,
        height: 50,
        backgroundColor: '#de7508',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: 40,
        height: 40,
    },
    forgotPasswordContainer: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        textDecorationLine: 'underline',
        fontSize: 17,
        color: "#00FF33"
    },
    contactContainer: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 250,
    },
    contactIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
