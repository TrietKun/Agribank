import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default function ItemList(props){
    const {option, onPress} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <View style={{paddingLeft : 20}}>
                <Text style={styles.title}><b>{option.title}</b></Text>
                <Text style={styles.title}>{option.stk}</Text>
            </View>
            <TouchableOpacity style={styles.option}>
                        ⋮
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        width: '95%',
        height: 70,
        position: 'relative',
        margin: 4,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth : 1,
    },
    img: {  
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 15,
        color: 'black',
        textAlignVertical: 'center',
    },
    option : {
        position : 'absolute',
        right : 10,
        fontSize : 30,
        color : 'gray',
    }
})