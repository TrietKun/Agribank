import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function CardServiceCustom({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : 'pink',
    }
})