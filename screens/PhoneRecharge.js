import { View, Text,StyleSheet, SafeAreaView, TextInput, FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons} from '@expo/vector-icons';

export default function PhoneRecharge() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.nguonContainer}>
            <View style={styles.nguonNuaTren}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <Ionicons style={{margin : 5}} name='card' size={24} color={'#e0721b'}></Ionicons>
                    <Text style={{fontSize : 16}}>Tài khoản nguồn</Text>
                </View>
                <Text style={{marginLeft : 5, fontWeight : 'bold', color : '#e0721b'}}>4399 0175 1412</Text>
            </View>
            <View style ={styles.nguonNuaDuoi}>
                <Text>Số dư</Text>
                <View style={{flexDirection : 'row', width : '40%', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Text>1.000.000.000</Text>
                    <Ionicons name='eye' size={24} color={'#e0721b'}></Ionicons>
                </View>
            </View>
        </View>

        <View style={styles.sdtContainer}>
            <View style={styles.sdtNuaTren}>
                <View>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <Ionicons style={{margin : 5}} name='call' size={24} color={'#e0721b'} ></Ionicons>
                        <Text style={{fontSize : 16}}>Chọn số điện thoại</Text>
                    </View>
                    <View style={{flexDirection : "row"}}>
                        <TextInput style={{width : '90%', height : 40, paddingLeft : 10, borderRadius : 20}} placeholder='Nhập số điện thoại'></TextInput>
                        <Ionicons style={{margin : 5}} name='bookmarks' size={24} color={'#e0721b'}></Ionicons>
                    </View>
                </View>
            </View>
            <View style={styles.sdtNuaDuoi}>
                <Text style={{marginLeft : 5}}>Không cần nhập nếu nạp tiền cho quý khách</Text>
            </View>
        </View>
        <View style={styles.menhGiaContainer}>
            <View style={styles.menhGiaNuaTren}>
                <Ionicons name='logo-usd' size={20} color={'#e0721b'}></Ionicons>
                <Text style={{fontSize : 16}}>Chọn mệnh giá nạp</Text>
            </View>
            <View style={styles.menhGiaNuaDuoi}>
                <FlatList
                    style={{width : '100%', height : '100%'}}
                    data={data}
                    renderItem={({item}) => (
                        <View style={styles.itemNap}>
                            <TouchableOpacity style={{width : '100%', height : '100%', justifyContent : 'center', alignItems : 'center'}}>
                                <Text style={{color : 'black'}}>{item.value}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    numColumns={3}
                />
            </View>
        </View>
        <View style={{width : '90%',alignSelf : 'center', alignItems : 'center', flexDirection : 'row', justifyContent : 'space-around', marginTop : 20}}>
            <TouchableOpacity style={{width : '40%', height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center', borderWidth : 2,borderColor : '#e0721b', backgroundColor : 'white'}}>
                <Text style={{color : '#e0721b', fontSize : 16}}>Tiếp tục</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width : '40%', height : 50, backgroundColor : '#e0721b', borderRadius : 20, justifyContent : 'center', alignItems : 'center'}}>
                <Text style={{color : 'white', fontSize : 16}}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginTop : 20, color : 'gray', marginHorizontal : 10}}>
                Lưu ý : Quý khách nên sử dụng hình thức xác thực bằng SoftOTP để đảm bảo tính bảo mật và tiết kiệm thời gian hơn khi giao dịch 
                tài chính trên Ứng dụng
            </Text>
        </View>
        <TouchableOpacity>
            <Text style={{color : '#e0721b', textDecorationLine : 'underline'}}>Cài đặt ngay</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

var data = [
    {
        id : 1,
        value : "30.000",
    },
    {
        id : 2,
        value : '50.000',
    },
    {
        id : 3,
        value : '100.000',
    },
    {
        id : 4,
        value : '200.000',
    },
    {
        id : 5,
        value : '300.000',
    },
    {
        id : 6,
        value : '500.000',
    }
]

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        alignItems : 'center',
        backgroundColor : '#e4e4e4'
    },
    containerSafe : {
        width : '100%',
        height : '100%',
        alignItems : 'center',
        backgroundColor : '#e4e4e4',
        marginTop : 30
    },
    nguonContainer : {
        width : '90%',
        height : 120,
        backgroundColor : 'white',
        borderRadius : 20,
    },
    nguonNuaTren : {
        width : '90%',
        height : 60,
        alignSelf : 'center',
        borderBottomWidth : 1,
        borderBottomColor : 'gray',
        borderStyle : 'dashed',
    },
    nguonNuaDuoi :{
        width : '90%',
        height : 40,
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    sdtContainer : {
        width : '90%',
        height : 120,
        backgroundColor : 'white',
        borderRadius : 20,
        marginTop : 20
    },
    sdtNuaTren : {
        width : '90%',
        height : 80,
        alignSelf : 'center',
        borderBottomWidth : 1,
        borderBottomColor : 'gray',
        borderStyle : 'dashed',
    },
    sdtNuaDuoi : {
        width : '90%',
        height : 30,
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    menhGiaContainer :{
        width : '90%',
        height : 200,
        backgroundColor : 'white',
        borderRadius : 20,
        marginTop : 20
    },
    menhGiaNuaTren : {
        width : '90%',
        height : 50,
        alignSelf : 'center',
        borderBottomWidth : 1,
        borderBottomColor : 'gray',
        borderStyle : 'dashed',
        paddingTop : 10,
        flexDirection : 'row', 
        alignItems : 'center',
    },
    menhGiaNuaDuoi : {
        width : '90%',
        height : 130,
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'cneter',
        paddingTop : 10,
    },
    itemNap : {
        width : 100, 
        height : 50, 
        borderRadius : 10, 
        alignItems : 'center', 
        justifyContent : 'center',
        alignSelf : 'center',
        margin : 3,
        borderWidth : 1,
    }
})
