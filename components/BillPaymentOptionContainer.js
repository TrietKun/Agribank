import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity,Image} from 'react-native';

 export default function BillPaymentOptionContainer(props) {
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
        backgroundColor: '#ffffff',
        elevation: 1,    
    },
    img: {  
        marginLeft: 40,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10,
    },
    title: {
        fontSize: 11,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:10,
        textAlignVertical: 'center',
    },
})