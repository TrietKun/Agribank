import { View, Text,StyleSheet,FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Item from '../components/Itemm'
import { useNavigation } from '@react-navigation/native';
import SavingMonneyData , {setNavigationInstance}from '../data/SavingMonneyData'

export default function SavingMoneyScreen() {

  const navigation = useNavigation();
  setNavigationInstance(navigation);

  return (
 
    <View style={styles.container}>
        <SafeAreaView style={{marginTop : 30}}>
        <FlatList style={styles.flatListItem}
                        data={SavingMonneyData}
                        renderItem={({ item }) => <Item option={item}  />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between'}}
                        scrollEnabled={false} />
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dce4e4',
    },
    flatListItem : {
      height : 200,
      marginTop : 10,
      marginHorizontal : 10,
    }
})
