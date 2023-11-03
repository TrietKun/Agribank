import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Item from '../components/item'
import ExtensionFlatListData from '../data/ExtensionFlatListData'
export default function StockScreen() {
  return (
    <View style={styles.container}>
      
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
