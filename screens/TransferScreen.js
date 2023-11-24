import { View, Text,StyleSheet,FlatList ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import ItemList from '../components/ItemList'
import Item from '../components/Itemm'
import { useNavigation } from '@react-navigation/native';
import TransferData , {setNavigationInstance}from '../data/TransferData'
import ItemCK from '../components/ItemCK'
import {useState,useEffect} from 'react'
import {useRoute} from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';

export default function TransferScreen() {

  const navigation = useNavigation();
  setNavigationInstance(navigation);
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
 
    <View style={styles.container}>
      <View style={{width : '100%', height : 250}}>
      <FlatList style={styles.flatListItem}
                        data={TransferData}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            onPress={() => navigation.navigate(item.screen)}
                          >
                            <ItemCK option={item} />
                          </TouchableOpacity>
                        )}
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
        position: 'fixed',
    },
    flatListItem : {
        width : '100%',
    },
    odersContainer : {
        width : '95%',
        height : '70%',
        alignSelf : 'center',
        alignItems : 'center',
        marginTop : 10,
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
      },
      content : {
        width : '100%',
        height : '75%',
        backgroundColor : 'white',
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10,
        alignItems : 'center',
        paddingTop : 0,
      },
      titleContent : {
        color : 'gray',
        justifyContent : 'center',
        textAlign : 'center',
        paddingHorizontal : 15,
      }
})
