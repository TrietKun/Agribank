import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Login() {   
    return (
        <View style={styles.background}>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView> 
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
                            <Text style={styles.inputLabel}>Số điện thoại</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputLabel}>Mật khẩu</Text>
                            <View style={styles.passwordInput}>
                                <TextInput style={styles.passwordTextInput} secureTextEntry={true} />
                                <TouchableOpacity style={styles.showPasswordIcon}>
                                    <Image style={styles.icon} source={require("../assets/no-view.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.LoginContaier}>
                        <TouchableOpacity style={[styles.loginButton]}
                           
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
        textAlignVertical: 'center',
        marginLeft: 5,
        color: '#00FF33'
    },
    input: {
        height: '100%',
        width: '70%',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        textAlign: 'right',
        color: '#00FF33'
    },
    passwordInput: {
        flexDirection: 'row',
        width: '70%',
        height: '100%',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        alignItems: 'center',
    },
    passwordTextInput: {
        flex: 1,
        height: '100%',
        color: '#00FF33',
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
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
