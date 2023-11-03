import React, {Component} from 'react';
import { ScrollView, View, Text, StyleSheet,Image,Dimensions,TouchableOpacity,FlatList } from 'react-native';
import IconHome from '../components/IconHome';
import IconHomeFinance from '../components/IconHomeFinance';
import  Swiper  from 'react-native-swiper/src';
import { useNavigation } from '@react-navigation/native';

import FinanceFlatListData, {setNavigationInstance}  from '../data/FinanceFlatListData';
import ShoppingFlatListData from '../data/ShopingFlatListData';
import ExtensionFlatListData from '../data/ExtensionFlatListData';

const widowHeight = Dimensions.get('window').height;
const widowWidth = Dimensions.get('window').width;

export default function Home() {

    const navigation = useNavigation();
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
            onPress: () => navigation.navigate('Thông tin'),
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
        </View>
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Tìm kiếm')}}>
                <Image style={styles.findIcon}
                    source={require('../assets/findIcon.png')}
                ></Image>
                </TouchableOpacity>
                <View style={styles.logoHeader}>
                    <Image style={{width : 150, height : 20}}
                        source={require('../assets/Logo-Agribank-H.png')}
                    ></Image>
                </View>
                <TouchableOpacity style={styles.drawerButton} onPress={openDrawer}>
                    <Image style={styles.findIcon}
                        source={require('../assets/drawer.png')}
                    ></Image>
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
                        onPress={()=>{navigation.navigate('Đăng nhập')}}
                    >
                        Đăng nhập
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
                    <TouchableOpacity style={{color : '#e0721b'}}>
                        Xem thêm
                    </TouchableOpacity>
                </View>
                <View style={styles.finance}>
                    <FlatList style={styles.flatListfinance}
                        data={FinanceFlatListData}
                        renderItem={({ item }) => <IconHomeFinance option={item} 
                        onPress={item.onPress}
                         />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
                
                <View style={styles.buy}>
                    <FlatList style={styles.flatListBuy}
                        data={ShoppingFlatListData}
                        renderItem={({ item }) => <IconHomeFinance option={item} />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
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
                <View style={styles.extension}>
                    <FlatList style={styles.flatListExtension}
                        data={ExtensionFlatListData}
                        renderItem={({ item }) => <IconHomeFinance option={item}  
                            // onPress={navigation.navigate('Thông tin')}
                        />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false} />
                </View>
            </ScrollView> 
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
        position: 'fixed',
        top: 0,
        zIndex: -1,
    },
    image : {
        width: 200,
        height: 200,
        opacity: 0.1,
    },
    scrollContainer : {
        width: widowWidth,
        height: '31%',
        backgroundColor: 'transparent',
        zIndex: 2,
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
        position : 'fixed', 
        zIndex : 3,
        alignItems : 'center',
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
        width : 30,
        height : 30,
        backgroundColor : '#dce4e4',
        borderRadius : 15,
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
        borderRadius : '50%',
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
        width: '100%',
        height: 150,
        backgroundColor: 'pink',
        top: 0,
        alignContent : 'center',
        flex : 1,
        posotion : 'absolute',
        zIndex : 4,
    },
    swipSwapper : {
        width: '90%',
        height: 150,
        backgroundColor: 'pink',
        top: 0,
        alignContent : 'center',
        flex : 1,

    },
    slide : {
        width : '100%',
        height : '100%',
        position : 'absolute',
        position : 'sticky',
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
        borderBottomRightRadius : '20%',
    },
    buy : {
        width : '100%',
        height : 450,
        backgroundImage: 'linear-gradient(#ebf6f0 0%, #f3f5e7 80%, #f4f1de 100%)',
        alignItems : 'center',
        justifyContent : 'center',
        borderTopLeftRadius : '20%',
        borderBottomEndRadius : '20%',
    },
    flatListBuy : {
        position: 'sticky',
        backgroundColor : 'transparent',
        position : 'relative',

    },
    extension : {
        width : '100%',
        height : 510,
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

