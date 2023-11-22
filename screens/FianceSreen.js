const { StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,Image} = require("react-native");
import React,{Component} from "react";
import { FlatList, ScrollView } from "react-native-web";
export  default FianceScreen;
import FianceOptionComponent from "../components/FianceOptionComponent";

function FianceScreen(props) {
    return(<View style={styles.container}>
        <ScrollView style={styles.scroll} bounces= {false} >
            {/* <View style={styles.header}>
                <Image style={styles.img} source={require('../assets/fiancescreen/TCh1.jpg')}/>
                <Text style={styles.title}>TÀI CHÍNH</Text>
                <Text style={[{'fontSize':16},{'color':'#e17700'},{'textAlign':'right'},{'marginLeft':110},{'fontWeight':'bold'}]}>Sửa</Text>
            </View> */}
            <View style={styles.bodyCNDHT}>
                <Text style={[{'fontSize':14},{'color':'black'},{'textAlign':'left'},{'marginLeft':10},{'fontWeight':'bold'}]}>Chức năng hiển thị</Text>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                    data = {dataCNHT}
                    renderItem={({item}) => <FianceOptionComponent option={item}/>}
                    numColumns={3}
                    scrollEnabled={false}
                    />
                </View>
            </View>
            <View style={styles.bodyCK}>
                <Text style={[{'fontSize':14},{'color':'black'},{'textAlign':'left'},{'marginLeft':10},{'fontWeight':'bold'}]}>Chuyển khoản</Text>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                    data = {dataCK}
                    renderItem={({item}) => <FianceOptionComponent option={item}/>}
                    numColumns={3}
                    scrollEnabled={false}
                    />
                </View>
            </View>
            <View style={styles.bodyCNDHT}>
                <Text style={[{'fontSize':14},{'color':'black'},{'textAlign':'left'},{'marginLeft':10},{'fontWeight':'bold'}]}>Thanh toán hóa đơn</Text>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                    data = {dataPayment}
                    renderItem={({item}) => <FianceOptionComponent option={item}/>}
                    numColumns={3}
                    scrollEnabled={false}
                    />
                </View>
            </View>
            <View style={styles.bodyCK}>
                <Text style={[{'fontSize':14},{'color':'black'},{'textAlign':'left'},{'marginLeft':10},{'fontWeight':'bold'}]}>Nạp tiền dịch vụ</Text>
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                    data = {dataDV}
                    renderItem={({item}) => <FianceOptionComponent option={item}/>}
                    numColumns={3}
                    scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView> 
  </View>)

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'gray',
        textAlign: 'center',
        alignContent: 'center',
    },
    scroll: {
        backgroundColor: '#F7F7F7',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'gray',
        borderBottomeHeight: 1,
        borderBottomWidth:1,
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
        color: 'black',
        textAlign: 'center',
        marginLeft: 150,
    },
    bodyCNDHT: {
        marginTop:10,
        width: '100%',
        height: 470,
        backgroundColor: 'white',
    },
    bodyCK: {
        marginTop:10,
        width: '100%',
        height: 240,
        backgroundColor: 'white',
    },
    options: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        position: 'sticky',
        backgroundColor: 'white',
    }
  });
  var dataCNHT = [
    {title:'Chuyển khoản' , img: require('../assets/fiancescreen/TC1.jpg')},
    {title:'Nạp tiền điện thoại' , img: require('../assets/fiancescreen/TC2.jpg')},
    {title:'Thanh toán hóa đơn' , img: require('../assets/fiancescreen/TC3.jpg')},
    {title:'Mã thẻ/Data' , img: require('../assets/fiancescreen/TC4.jpg')},
    {title:'Tiền gửi trực tuyến' , img: require('../assets/fiancescreen/TC5.jpg')},
    {title:'Chứng khoán' , img: require('../assets/fiancescreen/TC6.jpg')},
    {title:'Nạp tiền dịch vụ' , img: require('../assets/fiancescreen/TC7.jpg')},
    {title:'Gửi tiền mừng' , img: require('../assets/fiancescreen/TC8.jpg')},
    {title:'Nhận tiền kiểu hối' , img: require('../assets/fiancescreen/TC9.jpg')},
    {title:'Trả tiền vay' , img: require('../assets/fiancescreen/TC10.jpg')},
    {title:'Bạn bè' , img: require('../assets/fiancescreen/TC11.jpg')},
    {title:'Bảo hiểm Argibak Abic' , img: require('../assets/fiancescreen/TC12.jpg')}
  ]
  var dataCK = [
    {title:'Chuyển khoản qua nội bộ TK' , img: require('../assets/fiancescreen/TC13.jpg')},
    {title:'CK liên NH qua số tài khoản' , img: require('../assets/fiancescreen/TC14.jpg')},
    {title:'CK liên NH qua số thẻ' , img: require('../assets/fiancescreen/TC15.jpg')},
    {title:'CK 24/7 mã QR' , img: require('../assets/fiancescreen/TC16.jpg')}
  ]
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
  var dataDV = [
    {title:'Dịch vụ tài chính' , img: require('../assets/fiancescreen/TC17.jpg')},
    {title:'Nạp tiền giao thông' , img: require('../assets/fiancescreen/TC18.jpg')},
    {title:'Nạp học phí số tiền động' , img: require('../assets/fiancescreen/TC19.jpg')},
    {title:'Nạp thuế' , img: require('../assets/fiancescreen/TC20.jpg')}
  ]