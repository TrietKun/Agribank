import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function MainOptionComponent(props){
    const navigation = useNavigation();

    const {option, onPress} = props;
    return (
        <View style={styles.container} >
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <Text style={styles.title}>{option.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 5,
        width: 110,
        height: 120,
        alignItems: 'center',
    },
    img: {  
        width: 50,
        height: 50,
        margin: 10,
    },
    title: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginHorizontal:10,
        textAlignVertical: 'center',
        width: '100%',
    },
})