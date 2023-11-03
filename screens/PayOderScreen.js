import { View, Text,StyleSheet,FlatList,Image } from 'react-native'
import React from 'react'
import Item from '../components/item'
import PayOderData from '../data/PayOderFlatListData'
export default function CardService() {
  return (
    <View style={styles.container}>
    <View>
    <FlatList style={styles.flatListItem}
                        data={PayOderData}
                        renderItem={({ item }) => <Item option={item}  />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', alignSelf: 'center' }}
                        scrollEnabled={true} />
    </View>
      <View style={styles.odersContainer}>
        <View style={styles.title}>
            <Image style={{width : 30, height : 30}} source={require('../assets/hoadon.png')}></Image>
            <Text><b>Hóa đơn của quý khách</b></Text>
        </View>
        <View style={styles.content}>
          <Image style={{width : 70, height : 70}} source={require('../assets/notebg.png')}/>
          <Text style={styles.titleContent}>
            <b>Quý khách chưa lưu thông tin hóa đơn,</b><br/>
            Hãy "Lưu thông tin hóa đơn" để tiết kiệm thời gian cho các lần thanh toán tiếp theo
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width : '100%',
      height : '100%',
      backgroundColor: '#dce4e4',
    },
    flatListItem : {
      width : '100%',
      height : 'fit-content',
      alignContent : 'center',
    },
    odersContainer : {
      width : '95%',
      height : 'fit-content',
      top : 10,
      alignSelf : 'center',
    },
    title : {
      flexDirection : 'row',
      alignItems : 'center',
      backgroundColor : 'white',
      borderTopRightRadius : 10,
      borderTopLeftRadius : 10,
      borderBottomWidth : 1,
      borderStyle : 'dashed',
    },
    content : {
      width : '100%',
      height : 150,
      backgroundColor : 'white',
      borderBottomRightRadius : 10,
      borderBottomLeftRadius : 10,
      alignItems : 'center',
      paddingTop : 10,
    },
    titleContent : {
      color : 'gray',
      justifyContent : 'center',
      textAlign : 'center',
      paddingHorizontal : 15,
    }
})
