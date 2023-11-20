import { View, Text, StyleSheet,Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function GiftScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.coverContainer}>
            <View style={{width : 250, height : 190, alignSelf : 'center',
                            marginTop : -200,       
                            borderWidth : 1,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 4,
                            elevation: 5,
                            shadowColor: '#000'
        }}>
            <Image 
                style={styles.img} 
                source={require('../assets/tmt.png')}/>
            </View>
        </View>
        <TouchableOpacity 
            style={{width : 250, 
                    height : 50, 
                    backgroundColor : '#e0721b',
                    justifyContent : 'center',
                    alignItems : 'center',
                    borderRadius : 40,
                    marginTop : 150
                    }}>
            <Text style={{fontWeight : 'bold',
                        color : 'white',
                        fontSize : 20,
                        textAlign : 'center'
                }}>Gửi tiền mừng</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={{width : 250, 
                    height : 50, 
                    justifyContent : 'center',
                    alignItems : 'center',
                    borderRadius : 40,
                    marginTop : 20,
                    borderWidth : 3,
                    borderColor : '#e0721b'
                    }}>
            <Text style={{fontWeight : 'bold',
                        color : '#e0721b',
                        fontSize : 20,
                        textAlign : 'center'
                }}>Tiền mừng của tôi</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : 'white',
        // #e0721b
        alignItems : 'center',

    },
    header : {
        width : '100%',
        height : 180,
        backgroundColor : '#e0721b',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderBottomLeftRadius : 190,
        borderBottomRightRadius : 190,
    },
    coverContainer : {
        width : '100%',
        height : 200,
        justifyContent : 'center',
        alignItems : 'center',
    }, 
    img :{
        width : '100%',
        height : '100%',
        borderWidth : 2
    }
})