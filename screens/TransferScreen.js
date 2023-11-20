import { View, Text,StyleSheet,FlatList ,Image} from 'react-native'
import React from 'react'
import ItemList from '../components/ItemList'
import Item from '../components/Itemm'
import { useNavigation } from '@react-navigation/native';
import TransferData , {setNavigationInstance}from '../data/TransferData'
import ItemCK from '../components/ItemCK'

export default function TransferScreen() {

  const navigation = useNavigation();
  setNavigationInstance(navigation);


  
  return (
 
    <View style={styles.container}>
      <View>
      <FlatList style={styles.flatListItem}
                        data={TransferData}
                        renderItem={({ item }) => <ItemCK option={item}  />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between'}}
                        scrollEnabled={false} />
      </View>
      <View style={styles.odersContainer}>
        <View style={styles.title}>
            <Image style={{width : 30, height : 30}} source={require('../assets/hoadon.png')}></Image>
            <Text>Danh sách thụ hưởng</Text>
        </View>
        <View style={styles.content}>
        <FlatList style={styles.flatListItem}
                        data={TransferData}
                        renderItem={({ item }) => <ItemList option={item}  />}
                        numColumns={1}
                        contentContainerStyle={{ justifyContent: 'space-between'}}
                        scrollEnabled={true} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#dce4e4',
    },
    flatListItem : {
        width : '100%',
        height : 'fit-content',
        marginHorizontal : 10,
        position : 'relative',
        zindex : 1,
    },
    odersContainer : {
        width : '95%',
        height : 530,
        top : -90,
        alignSelf : 'center',
        alignItems : 'center',
        position : 'fixed',
        zIndex : 2,
      },
      title : {
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'white',
        borderTopRightRadius : 10,
        borderTopLeftRadius : 10,
        borderBottomWidth : 1,
        borderStyle : 'dashed',
        top : 430
      },
      content : {
        width : '100%',
        height : '75%',
        backgroundColor : 'white',
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10,
        alignItems : 'center',
        paddingTop : 0,
        top : 430
      },
      titleContent : {
        color : 'gray',
        justifyContent : 'center',
        textAlign : 'center',
        paddingHorizontal : 15,
      }
})
