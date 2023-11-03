import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Item from '../components/Item'
import ExtensionFlatListData from '../data/ExtensionFlatListData'
export default function CardService() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        Dịch vụ áp dụng cho khách hàng có <b>Thẻ Agribank</b>
      </View>
      <FlatList style={styles.flatListItem}
                        data={ExtensionFlatListData}
                        renderItem={({ item }) => <Item option={item}  />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', alignSelf: 'center' }}
                        scrollEnabled={false} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dce4e4',
    },
    headerContainer : {
        width : '100%',
        height : 50,
        backgroundColor : '#dce4e4',
        textAlign : 'center',
        justifyContent : 'center',
    },
    flatListItem : {
      width : '100%',
      height : 'fit-content',
      alignContent : 'center',
    }
})
