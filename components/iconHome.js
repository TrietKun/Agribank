import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default function MainOptionComponent(props){
    const {option, onPress} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 10,
        width: 110,
        height: 90,
        backgroundColor: 'white',
        position: 'relative',
        alignItems: 'center',
    },
    img: {  
        width: 60,
        height: 60,
        margin: 10,
    },
    title: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:10,
        textAlignVertical: 'center',
    },
})