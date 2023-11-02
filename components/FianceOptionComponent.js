import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity,Image} from 'react-native';
export default FianceOptionComponent;

function FianceOptionComponent(props) {
    const {option, onPress} = props;
    return (
       <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={option.img}></Image>
            <Text style={styles.title}>{option.title}</Text>
       </TouchableOpacity>
    )
}   
const styles = StyleSheet.create({ 
    container: {
        margin: 10,
        width: 110,
        height: 90,
        backgroundColor: 'white',
        elevation: 1,    
    },
    img: {  
        marginLeft: 40,
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin: 10,
    },
    title: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:10,
        textAlignVertical: 'center',
    },
})