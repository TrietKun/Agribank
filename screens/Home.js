import React from 'react';
import { ScrollView, View, Text, StyleSheet,Image,Dimensions } from 'react-native';

const widowHeight = Dimensions.get('window').height;
const widowWidth = Dimensions.get('window').width;

export default function Home(){
  return (
   <View style={styles.container}>
        <View style={styles.bg}>
            <Image style={styles.image} source={require('../assets/Icon-Agribank.png')}>

            </Image>
        </View>
        <ScrollView style={styles.scroll}>
                <View style={{width : '100%', height :300, backgroundColor : 'transparent'}}>
                        sdvsdfs
                </View>
                <View style={{width : '100%', height :300, backgroundColor : 'transparent'}}>
                        sdvsdfs
                </View>
                <View style={{width : '100%', height :300, backgroundColor : 'transparent'}}>
                        sdvsdfs
                </View>
                <View style={{width : '100%', height :300, backgroundColor : 'transparent'}}>
                        sdvsdfs
                </View>
        </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
    container : {
        width: widowWidth,
        height: 'fit-content',
        backgroundColor: 'pink',  
    },
    bg:{
        width: widowWidth,
        height: widowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        zIndex: -1,
    },
    image : {
        width: 200,
        height: 200,
        opacity: 0.1,
    },
    scroll : {
        width: widowWidth,
        height: 'fit-content',
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        top: 0,
    }
});

