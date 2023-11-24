import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet,Image,Dimensions,TouchableOpacity,FlatList } from 'react-native';
import IconHome from '../components/IconHome';
import IconHome1 from '../components/Itemm1';
import IconHomeFinance from '../components/IconHomeFinance';
import  Swiper  from 'react-native-swiper/src';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';
import axios from 'axios';

import store from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

import FinanceFlatListData, {setNavigationInstance}  from '../data/FinanceFlatListData';
import ShoppingFlatListData from '../data/ShopingFlatListData';
import ExtensionFlatListData from '../data/ExtensionFlatListData';
import Finance from '../data/FinanceFlatListData copy';

const widowHeight = Dimensions.get('window').height;
const widowWidth = Dimensions.get('window').width;

export default function Home() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);
    const data = users.value;

    setNavigationInstance(navigation);
    const openDrawer = () => {
        navigation.openDrawer();
      };

    const adData = [
        { id: 1, imageUrl: require('../assets/coverPhoto.png') },
        { id: 2, imageUrl: require('../assets/coverPhoto.png') },
        { id: 3, imageUrl: require('../assets/coverPhoto.png') },
    ];

    var optionList = [
        {
            title: 'Tài khoản',
            img: require('../assets/core1.png'),
            onPress: () => navigation.navigate('Thông tin', [ { data : data }]),
        },
        {
            title: 'QR Pay',
            img: require('../assets/core2.png'),
            onPress: () => navigation.navigate('Home')    
        },
        {
            title: 'Dịch vụ thẻ',
            img: require('../assets/core3.png'), 
            onPress: () => navigation.navigate('Dịch vụ thẻ')
        },
        
    
    ]   
    


  return (
    
   <View style={styles.container}>
        <View style={styles.bg}>
            <Image style={styles.image} source={require('../assets/Icon-Agribank.png')}></Image>
            <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.drawerButton} onPress={()=>{navigation.navigate('Tìm kiếm')}}>
                    <Ionicons name="search-sharp" size={32} color="#2e755d"></Ionicons>
                </TouchableOpacity>
                <View style={styles.logoHeader}>
                    <Image style={{width : 150, height : 20}}
                        source={require('../assets/Logo-Agribank-H.png')}
                    ></Image>
                </View>
                <TouchableOpacity style={styles.drawerButton} onPress={openDrawer}>
                <Ionicons name="reorder-three-sharp" size={32} color="#2e755d"></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.scrollContainer}>
            <ScrollView style={styles.scroll}>
                <View style={styles.coverPhotoContainer}>
                    <Image style={styles.coverPhoto} 
                        source={require('../assets/coverPhoto.png')}
                    ></Image>
                </View>
                <View style={styles.avataIconContainer}>
                    <View style={styles.avataIconBg}>
                        <Image style={styles.avataIcon}source={require('../assets/iconAvata.png')}/>
                    </View>
                    <TouchableOpacity style={styles.loginButton}
                        
                        onPress={()=>{
                            dispatch(fetchUsers());
                            navigation.navigate('Đăng nhập')
                        }}
                    >
                        <Text>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                        data={optionList}
                        renderItem={({ item }) => <IconHome option={item} onPress={item.onPress} />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
                <View style={styles.swipContainer}>
                <Swiper
                    dotColor="#BBBBBB"
                    activeDotColor="white"
                    autoplay={true}
                    autoplayTimeout={5}
                    loop={true}
                    pointerEvents="auto"
                    style={styles.swipSwapper}
                >
                    {adData?.map((image) => (            
                        <View key={image?.id} style={styles.slide}>
                            <Image source={image.imageUrl} style={styles.imageSwiper} />
                        </View>
                    ))}
                </Swiper>                  
                </View>
                <View style={{display : 'flex', flexDirection : "row", width : '90%', justifyContent : 'space-between', alignSelf : 'center', marginTop : 10}}>
                    <Text>Tài chính</Text>
                    <TouchableOpacity style={{color : '#e0721b'}} onPress={()=>{navigation.navigate('Tài chính')}}>
                        <Text>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.finance}>
                <FlatList
                    style={styles.flatListfinance}
                    data={Finance}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(item.onPress, [{ data: data }]);
                            }}
                        >
                            <IconHome1 option={item} />
                        </TouchableOpacity>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                    scrollEnabled={false}
                />
                </View>
                <View style={{display : 'flex', flexDirection : "row", width : '90%', justifyContent : 'space-between', alignSelf : 'center', marginTop : 10}}>
                    <Text style ={{fontSize:16,fontWeight:5}}>Mua sắm</Text>
                </View>
                <View style={styles.buy}>
                    <FlatList style={styles.flatListBuy}
                        data={ShoppingFlatListData}
                        renderItem={({ item }) => <IconHomeFinance option={item} />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
                <View style={styles.swipContainer}>
                <Swiper
                    dotColor="#BBBBBB"
                    activeDotColor="white"
                    autoplay={true}
                    autoplayTimeout={5}
                    loop={true}
                    pointerEvents="auto"
                    style={styles.swipSwapper}
                >
                    {adData?.map((image) => (            
                        <View key={image?.id} style={styles.slide}>
                            <Image source={image.imageUrl} style={styles.imageSwiper} />
                        </View>
                    ))}
                </Swiper>                  
                </View> 
                <View style={{display : 'flex', flexDirection : "row", width : '90%', justifyContent : 'space-between', alignSelf : 'center', marginTop : 10}}>
                    <Text style ={{fontSize:16,fontWeight:5,color:'orange'}}>Tiện ích</Text>
                </View>
                <View style={styles.extension}>
                    <FlatList style={styles.flatListExtension}
                        data={ExtensionFlatListData}
                        renderItem={({ item }) => <IconHomeFinance option={item}  
                        onPress={() => {
                            navigation.navigate(item.onPress, [{ data: data }]);
                        }}
                        />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
            </ScrollView> 
        </View>
        
        </View>
   </View>


                        
  );
  
};


const styles = StyleSheet.create({
    container : {
        width: widowWidth,
        height: 'fit-content',
    },
    bg:{
        width: widowWidth,
        height: widowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'fixed',
        // top: 0,
        // zIndex: -1,
    },
    image : {
        width: 200,
        height: 200,
        opacity: 0.1,
    },
    scrollContainer : {
        width: widowWidth,
        // height: '31%',
        height: '90%',
        backgroundColor: 'transparent',
        // zIndex: 2,
        position: 'absolute',
        top: 0
    },
    scroll : {
        width: widowWidth,
        height: 'fit-content',
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 2,
        top: 50,
    },
    headerContainer : {
        width: widowWidth,
        height: 50,
        backgroundColor : 'white',
        position : 'absolute', 
        zIndex : 3,
        alignItems : 'center',
        top : 0
    },
    header : {
        width : '90%',
        height : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    findIcon : {
        width : 30,
        height : 30,
        backgroundColor : '#dce4e4',
        borderRadius : 15,
        alignSelf : 'center',
    },
    logoHeader : {
        width : 250,
        height : 40,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center'
    },
    drawer : {
        width : 30,
        height : 30,
        backgroundColor : 'red'
    },
    drawerButton : {
        width : 40,
        height : 40,
        backgroundColor : '#dce4e4',
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center'
    },
    coverPhotoContainer : {
        width : '100%',
        height : 150,
        position : 'relative',
    },
    coverPhoto : {
        width : '100%',
        height : 150
    },
    avataIconContainer : {
        width : '100%',
        height : 100,
        position : 'relative',
        backgroundColor : 'white',
        borderBottomColor : '#dce4e4',
        borderBottomWidth : 1,
    },
    avataIcon : {
        width : 80,
        height : 80,
        alignSelf : 'center',
        borderRadius : 40,
        top : -4
    },
    avataIconBg : {
        width : 80,
        height : 80,
        backgroundColor : 'white',
        borderRadius : 40,
        justifyContent : 'space-around',
        alignItems : 'center',
        position : 'absolute',
        left : widowWidth/2 - 40,
        top : -40,
    },
    loginButton : {
        width : 200,
        height : 40,
        backgroundColor : 'white',
        borderRadius : 20,
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        top : 50,
        backgroundColor : '#e0721b',
        color : 'white'
    },
    flatList : {
        backgroundColor : 'transparent',
        position : 'relative',
        zIndex : 3,

    },
    options : {
        width : '100%',
        height : 150,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
    },
    swipContainer : {
        width: '90%',
        height: 150,
        backgroundColor: 'pink',
        top: 0,
        alignContent : 'center',
        // flex : 1,
        // posotion : 'absolute',
        alignSelf : 'center',
        zIndex : 4,
    },
    swipSwapper : {
       
        backgroundColor: 'pink',

    },
    slide : {
        width : '100%',
        height : 150,
    },
    imageSwiper : {
        width : '100%',
        height : '100%',
        flex : 1,
    },
    finance : {
        width : '100%',
        height : 540,
        backgroundColor : 'transparent',
        alignItems : 'center',
        justifyContent : 'center',
    },
    flatListfinance : {
        position: 'sticky',
        backgroundColor : 'transparent',
        position : 'relative',
        borderBottomRightRadius : 20,
    },
    buy : {
        width : '100%',
        height : 510,
        // backgroundImage: 'linear-gradient(#ebf6f0 0%, #f3f5e7 80%, #f4f1de 100%)',
        backgroundColor: 'linear-gradient(rgba(235, 246, 240, 0) 0%, rgba(243, 245, 231, 0.8) 80%, rgba(244, 241, 222, 1) 100%)',
        alignItems : 'center',
        justifyContent : 'center',
        borderTopLeftRadius : 20,
        borderBottomEndRadius : 20,
    },
    flatListBuy : {
        position: 'sticky',
        backgroundColor : 'transparent',
        position : 'relative',

    },
    extension : {
        width : '100%',
        height : 530,
        backgroundColor : 'transparent',
        alignItems : 'center',
        justifyContent : 'center',
    },
    flatListExtension : {
        position: 'sticky',
        backgroundColor : 'transparent',
        position : 'relative',

    },
});

