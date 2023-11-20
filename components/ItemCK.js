import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default function item(props){
    const {option, onPress} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <Text style={styles.title}>{option.name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 1,
        width: 120,
        height: 110,
        backgroundColor: 'white',
        position: 'relative',
        alignItems: 'center',
        margin: 4,
    },
    img: {  
        width: 40,
        height: 40,
        margin: 10,
    },
    title: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})