import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Item from '../components/Item'
import { useNavigation } from '@react-navigation/native';
import StockData , {setNavigationInstance}from '../data/StockData'

export default function StockScreen() {

  const navigation = useNavigation();
  setNavigationInstance(navigation);

  return (
 
    <View style={styles.container}>
      <View>
      <FlatList style={styles.flatListItem}
                        data={StockData}
                        renderItem={({ item }) => <Item option={item}  />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between'}}
                        scrollEnabled={false} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dce4e4',
    },
    flatListItem : {
      height : 200,
      marginTop : 10,
      marginHorizontal : 10,
    }
})
