import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity, Image} from 'react-native';
import { FlatList } from "react-native-web";
import BillPaymentOptionContainer from "../component/BillPaymentOptionContainer";
export default BillPaymentScreen;
function BillPaymentScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={require('../assets/fiancescreen/TTHDheader.jpg')}/>
                <Text style={styles.title}>Thanh toán hoá đơn</Text>
            </View>
             <View style={styles.body}>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                        data ={dataPayment}
                        renderItem={({item}) => <BillPaymentOptionContainer option={item}/>}
                        numColumns={3}
                        scrollEnabled={false} />
                </View>
            </View>
            <View style={styles.listorder}>
                <View style={styles.hlistorder}>
                    <Image style={styles.img} source={require('../assets/fiancescreen/TTHDS1.jpg')}/>
                    <Text style={styles.title1}>Hóa đơn của quý khách</Text>
                    <Image style={ [{'marginLeft':'340px'},  {'position': 'absolute'},{'height':25},{'width':25}]} source={require('../assets/fiancescreen/TTHDsearch.jpg')}/>
                </View>
                <Image style={[{'marginLeft':160},{'width':70},{'height':70},{'marginTop':15}]} source={require('../assets/fiancescreen/TTHD.jpg')}/>
                <Text style={[{'marginTop':15},{'textAlign':'center'},{'fontSize':15},{'fontWeight':'bold'},{'color':'gray'}]}>Quý khách chưa lưu thông tin hóa đơn</Text>
                <Text style={[{'textAlign':'center'},{'fontSize':15},{'color':'gray'},{'marginLeft':20},{'marginRight':20}]}>Hãy "Lưu thông tin hóa đơn" để tiết kiệm thời gian cho lần giao dịch sau</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        textAlign: 'center',
        alignContent: 'center',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#e17700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        left: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    body: {
        width: '100%',
        height: '55%',
        backgroundColor: '#F7F7F7',
    },
    options: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        position: 'sticky'
    },
    listorder:{
        width: '95%',
        height: 220,
        borderRadius: 20,
        margin: 10,
        backgroundColor: 'white',
    },
    hlistorder:{
        width: '100%',
        height: 40,
        borderEndColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomeHeight: 1,
        borderBottomWidth:2,
        borderBottomColor: 'gray',
        borderBottomStyle : 'dashed',
    },
    title1:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 125,
    }
  });
  var dataPayment = [
    {title:'Cước viễn thông' , img: require('../assets/fiancescreen/TTHD1.jpg')},
    {title:'Tiền điện', img: require('../assets/fiancescreen/TTHD2.jpg')},
    {title:'Nước & VSMT' , img: require('../assets/fiancescreen/TTHD3.jpg')},
    {title:'Thanh toán vé máy bay' , img: require('../assets/fiancescreen/TTHD4.jpg')},
    {title:'Nộp tiền học phí' , img: require('../assets/fiancescreen/TTHD5.jpg')},
    {title: 'Cước truyền hình', img: require('../assets/fiancescreen/TTHD6.jpg')},
    {title: 'Viện phí', img: require('../assets/fiancescreen/TTHD7.jpg')},
    {title: 'Chuyển phát', img: require('../assets/fiancescreen/TTHD8.jpg')},
    {title: 'Phí chung cư', img: require('../assets/fiancescreen/TTHD9.jpg')},
    {title: 'Bảo hiểm', img: require('../assets/fiancescreen/TTHD10.jpg')},
    {title: 'Lưu trú', img: require('../assets/fiancescreen/TTHD11.jpg')},
    {title: 'Dịch vụ học trực tuyến', img: require('../assets/fiancescreen/TTHD12.jpg')}
  ]