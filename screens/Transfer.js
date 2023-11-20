import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function Transfer() {

  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;
  const [soTien, setSoTien] = useState(0);
  const [noiDung, setNoiDung] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [nguoiChuyen, setNguoiChuyen] = useState([]);
  const [nguoiNhan, setNguoiNhan] = useState([]);
  const [allData, setAllData] = useState([]);
  const getDataChuyen  = async() => {
    try{
        const response = await axios.get('https://655080547d203ab6626ddba7.mockapi.io/nh/'+data.data.data.id);
       setNguoiChuyen(response.data);
    }catch(error){
        console.log(error);
    }
}

const getAll  = async() => {
    try{
        const response = await axios.get('https://655080547d203ab6626ddba7.mockapi.io/nh');
        setAllData(response.data);
    }catch(error){
        console.log(error);
    }
}

function getNguoiNhan(){
    const user = allData.find(item => item.phone === soDienThoai);
    setNguoiNhan(user);
    console.log(soDienThoai);
}

function chuyenTien(){
    if(nguoiNhan.tien >= soTien){
      const tienNguoiChuyen = parseFloat(nguoiChuyen.tien) - parseFloat(soTien);
      const tienNguoiNhan = parseFloat(nguoiNhan.tien) + parseFloat(soTien);
        axios.put('https://655080547d203ab6626ddba7.mockapi.io/nh/'+nguoiChuyen.id, {
            tien : tienNguoiChuyen
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          axios.put('https://655080547d203ab6626ddba7.mockapi.io/nh/'+nguoiNhan.id, {
            tien : tienNguoiNhan
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

useEffect(() => {
    getAll();
    getDataChuyen();

}, [route]);

console.log(nguoiChuyen);
console.log(allData);
console.log(nguoiNhan);


  return (
    <View style={styles.container}>
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
                    <Text>{nguoiChuyen.tien && new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(nguoiChuyen.tien)}</Text>
                    <Ionicons name='eye' size={24} color={'#e0721b'}></Ionicons>
                </View>
            </View>
        </View>
        <View style={styles.thongTinContainer}>
            <TextInput 
              onChangeText={(text) => {
                setSoDienThoai(text);
              }}
              onBlur={getNguoiNhan}
              style={{width : '90%', height : 40, alignSelf : 'center', marginTop : 10, paddingLeft : 10, borderBottomWidth : 1, borderBottomColor : 'gray'}}
              placeholder='Nhập số điện thoại hoặc số tk'>
                
            </TextInput>
            <TextInput 
             onChangeText={text => setSoTien(text)}
              style={{width : '90%', height : 40, alignSelf : 'center', marginTop : 10, paddingLeft : 10, borderBottomWidth : 1, borderBottomColor : 'gray'}}
              placeholder='Nhập số tiền'>
               
            </TextInput>
            <TextInput 
              onChangeText={text => setNoiDung(text)}
              style={{width : '90%', height : 40, alignSelf : 'center', marginTop : 10, paddingLeft : 10, borderBottomWidth : 1, borderBottomColor : 'gray'}}
              placeholder='Nhập nội dung'>
                
                
            </TextInput>
        </View>
       <View style={{width : '100%'}}>
       <View style={{width : '90%',alignSelf : 'center', alignItems : 'center', flexDirection : 'row', justifyContent : 'space-around', marginTop : 20}}>
            <TouchableOpacity style={{width : '40%', height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center', borderWidth : 2,borderColor : '#e0721b', backgroundColor : 'white'}}>
                <Text style={{color : '#e0721b', fontSize : 16}}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={chuyenTien}
            style={{width : '40%', height : 50, backgroundColor : '#e0721b', borderRadius : 20, justifyContent : 'center', alignItems : 'center'}}>
                <Text style={{color : 'white', fontSize : 16}}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    alignContent : 'center',
    alignItems : 'center',
    paddingTop : 30,
    backgroundColor : '#dce4e4'
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
  thongTinContainer : {
    width : '90%',
    height : 180,
    backgroundColor : 'white',
    borderRadius : 20,
    marginTop : 20
  },
})